import {WakandaClient} from 'wakanda-client/browser/no-promise';

export class Wakanda {

  private _client: WakandaClient;
  private _catalog;

  constructor() {
    //this._client = new WakandaClient({ host: 'http://127.0.0.1:8081' });
    this._client = new WakandaClient({});
    this._catalog = null;
  }

  get catalog() {
    if (!this._catalog) {
      return this._client.getCatalog().then(c => {
        this._catalog = c;

        return c;
      });
    }

    return Promise.resolve(this._catalog);
  }

  get directory() {
    return this._client.directory;
  }

  get wakandaClientVersion() {
    return this._client.version();
  }
}