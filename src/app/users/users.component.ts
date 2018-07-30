import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import { map } from 'rxjs/operators';
import {UsersService} from '../../services/Users.service';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  pageUser:any;
  constructor(public http:Http,public userServise:UsersService) { }

  ngOnInit() {
      this.userServise.getUsers().subscribe(data=>{
        this.pageUser=data;
      },err=>console.log(err));
/*    this.http.get("http://localhost:8080/users")
      .pipe(map(resp=>resp.json()))
      .subscribe(data=>{
        this.pageUser=data;
      },err=>{
        console.log(err);
      })*/
  }

}
