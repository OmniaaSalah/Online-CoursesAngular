import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isuserlogged:boolean= false;
  constructor(private userservice:UserService) { }

  ngOnInit(): void {
    this.isuserlogged=this.userservice.IsUserLogged;
  }
  Logout()
  {
    if(confirm("Are you sure that You need to Logout "))
    {localStorage.removeItem("token");
     
     location.reload();
    }
  }
  
}
