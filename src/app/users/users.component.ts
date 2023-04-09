import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users:any=[];
  errorMessage:any;
  constructor(private userService: UsersService){}

  ngOnInit(): void {
    
    this.userService.GetAllUsers().subscribe({
      next:data=>this.users = data,
      error:error=>this.errorMessage = error
    })
  }

}
