import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {map} from 'rxjs/operators';

@Injectable()
export class UsersService {
  constructor(public http:Http){

  }
  getUsers(){

    return this.http.get("http://localhost:8080/users").pipe(map(resp=>resp.json()));
  }

}
