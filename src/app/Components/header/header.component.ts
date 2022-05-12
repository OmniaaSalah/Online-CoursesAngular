import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isuserlogged:boolean= false;
  constructor(private userservice:UserService) { 

  }

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
