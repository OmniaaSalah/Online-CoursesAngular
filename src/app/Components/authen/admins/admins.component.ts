import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { Iuser } from 'src/app/View Models/iuser';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.scss']
})
export class AdminsComponent implements OnInit {
 Admins :Iuser[]=[];
 displayedColumns: string[] = ['userName', 'Email'];
  constructor(private userapiservice:UserService,private location:Location) { }

  ngOnInit(): void {
   this.userapiservice.GetAllAdmin().subscribe(adminlist=>{this.Admins=adminlist;console.log(this.Admins);});
   
  }

  Back()
  {
       this.location.back();
  }

}
