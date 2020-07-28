import { Component, OnInit } from '@angular/core';
import {IUser} from "../IUser";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  title_page = 'Users'
  users: IUser[] = [
    {
      id: 1,
      name: 'nam',
      email: 'nam@gamil.com'
    },
    {
      id: 2,
      name: 'vinh',
      email: 'vinh@gamil.com'
    },
    {
      id: 3,
      name: 'duc',
      email: 'duc@gamil.com'
    }
  ]

  userFilter =[];
  constructor() { }

  ngOnInit(): void {
    this.userFilter = this.users;
  }

  search(event){
    let keyword = event.target.value;
    this.userFilter = (keyword) ? this.filerByKeyword(keyword): this.users;
  }

  filerByKeyword(keyword) {
    return this.users.filter(user => {
      return user.name.indexOf(keyword) != -1;
    })
  }

  delete(id){
    let userDelete=[];
    this.userFilter.map(user =>{
      if (user.id != id){
        userDelete.push(user);
      }
      });
    this.userFilter=userDelete;
    return this.userFilter;
  }

}
