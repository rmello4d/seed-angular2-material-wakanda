var minimist = require('minimist'),
    del = require('del'),
    fse = require('fs-extra')
    ;
    
var defaultOptions = {
  default: {
    webBuildFolderName: 'dist'
  }
};

var options = minimist(process.argv.slice(2), defaultOptions);

if(! options.buildPath) {
    console.error('buildPath param is required.');
    return;
}

if(! options.projectPath) {
    console.error('projectPath param is required.');
    return;
}

if(! options.solutionPath) {
    console.error('solutionPath param is required.');
    return;
}

// solution build path
var isWin = /^win/.test(process.platform);
var realPathSolution = fse.realpathSync(options.solutionPath);
var solutionFolderName = realPathSolution.substring(realPathSolution.lastIndexOf(isWin ? '\\' : '/') + 1);
options.solutionBuildPath = options.buildPath + '/' + solutionFolderName;

// project build path
var realPathProject = fse.realpathSync(options.projectPath);
var projectFolderName = realPathProject.substring(realPathProject.lastIndexOf(isWin ? '\\' : '/') + 1);
options.projectBuildPath = options.buildPath + '/' + projectFolderName;


function bundle() {
  // copy project
  fse.readdir(options.projectPath, function (err, files) {
    files.forEach(function (file) {
      if(file === 'mobile') {
        return;
      }
      
      if(file === 'web') {
        fse.copy(options.projectPath + '/web/' + options.webBuildFolderName, options.projectBuildPath + '/web');
        
      } else if(file === 'backend') {
        fse.readdir(options.projectPath + '/backend', function (_err, _files) {
          _files.forEach(function (_file) {
            if (_file !== 'data') {
              fse.copy(options.projectPath + '/backend/' + _file, options.projectBuildPath + '/backend/' + _file);
            }
          });
        });        
      } else {
        fse.copy(options.projectPath + '/' + file, options.projectBuildPath + '/' + file);
      }
    });
  });

  // copy solution folder
  fse.readdir(options.solutionPath, function (err, files) {
    files.forEach(function (file) {
      if(file === 'ExtensionSettings' || file === '.git') {
        return;
      }
      fse.copy(options.solutionPath + '/' + file, options.solutionBuildPath + '/' + file);
    });
  });
}

function clean() {
  return del.sync([
    options.buildPath + '/**/*',
    '!' + options.buildPath + '/.git' // delete all files/folders except .git folder
  ], { force: true });
}

clean();
bundle(); 