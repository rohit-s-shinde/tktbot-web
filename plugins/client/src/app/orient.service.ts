import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';

@Injectable()
export class OrientService {

  url = 'http://localhost:2480/command/tkiet/';
  username = 'root';
  password = 'root';

  constructor(private http: Http) {
  }

  command(statement: string, success: (data: any) => void, error: (err: any) => void): void {
    const url = this.url + 'sql/-/-1';
    const headers = new Headers();
    headers.append('Authorization', 'Basic ' + btoa(this.username + ':' +     this.password));

    this.http.post(url,
      JSON.stringify({'command': statement}),
      {headers: headers})
      .toPromise()
      .then(success)
      .catch(error);
  }
}
