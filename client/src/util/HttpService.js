export class HttpService {
  _handlerError(res) {
    if (!res.ok) throw new Error(res.statusText);
    return res;
  }

  get(url) {
    return fetch(url)
      .then((res) => this._handlerError(res))
      .then((res) => res.json());
  }
}
