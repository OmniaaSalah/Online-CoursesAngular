import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import { ApiObj } from 'src/app/View Models/api-obj';
import { Loginadmin } from 'src/app/View Models/loginadmin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 admin:Loginadmin={} as Loginadmin;
 Username:string='';
 password:string='';
 token:string='';
 isuserlogged:boolean= false;
  constructor(private userapiservice:UserService,private router:Router) { }

  ngOnInit(): void {
    this.isuserlogged=this.userapiservice.IsUserLogged;
  }

 
  Login()
  {
    this.admin.UserName=this.Username;
    this.admin.password=this.password;
    this.userapiservice.Login(this.admin).subscribe(obj=>{this.userapiservice.objapi=obj;
      localStorage.setItem("token",this.userapiservice.objapi.token);
       this.router.navigate(['/Home']);
    alert("Welcome "+this.Username);},
    (error)=>{alert("Pleaze write valid Username And Password")});
   
      
  }
}
