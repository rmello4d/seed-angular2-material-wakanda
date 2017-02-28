import {Component, OnInit} from '@angular/core';


export interface Task {
  name: string;
  completed: boolean;
  subtasks?: Task[];
}

@Component({
  selector: 'md-checkbox-demo-nested-checklist',
  styles: [`
    li {
      margin-bottom: 4px;
    }
  `],
  templateUrl: 'nested-checklist.html',
})
export class MdCheckboxDemoNestedChecklist {
  tasks: Task[] = [
    {
      name: 'Reminders',
      completed: false,
      subtasks: [
        { name: 'Cook Dinner', completed: false },
        { name: 'Read the Material Design Spec', completed: false },
        { name: 'Upgrade Application to Angular', completed: false }
      ]
    }
  ];

  allComplete(task: Task): boolean {
    let subtasks = task.subtasks;
    return subtasks.every(t => t.completed) ? true
        : subtasks.every(t => !t.completed) ? false
        : task.completed;
  }

  someComplete(tasks: Task[]): boolean {
    const numComplete = tasks.filter(t => t.completed).length;
    return numComplete > 0 && numComplete < tasks.length;
  }

  setAllCompleted(tasks: Task[], completed: boolean) {
    tasks.forEach(t => t.completed = completed);
  }
}

@Component({
  selector: 'md-checkbox-demo',
  templateUrl: 'checkbox-demo.html',
  styleUrls: ['checkbox-demo.scss'],
})
export class CheckboxDemo extends OnInit {
  isIndeterminate: boolean = false;
  isChecked: boolean = false;
  isDisabled: boolean = false;
  alignment: string = 'start';
  useAlternativeColor: boolean = false;

  printResult() {
    if (this.isIndeterminate) {
      return 'Maybe!';
    }
    return this.isChecked ? 'Yes!' : 'No!';
  }

  checkboxColor() {
    return this.useAlternativeColor ? 'primary' : 'accent';
  }
  
    constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello Checkbox');
  }
  
  
  
}
