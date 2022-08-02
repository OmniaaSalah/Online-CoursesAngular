import { Component, OnInit } from '@angular/core';
import { CatogryAPIService } from 'src/app/Services/catogry-api.service';
import { CoursesapiService } from 'src/app/Services/coursesapi.service';
import { Icatogry } from 'src/app/View Models/icatogry';
import { ICourses } from 'src/app/View Models/icourses';

@Component({
  selector: 'app-course-and-boot-camp',
  templateUrl: './course-and-boot-camp.component.html',
  styleUrls: ['./course-and-boot-camp.component.scss']
})
export class CourseAndBootCampComponent implements OnInit {
  categrylist:Icatogry[]=[];
  courseslist:ICourses[]=[];
  shownempty:number=0;

  constructor(private catogryapiservice:CatogryAPIService,private coursesapiservice:CoursesapiService) { }

  ngOnInit(): void {
    this.coursesapiservice.getAllcourses().subscribe(prolist=>{this.coursesapiservice.newcourseslist=prolist;this.courseslist=this.coursesapiservice.newcourseslist;});
    this.catogryapiservice.getAllcategories().subscribe(catlist=>{this.categrylist=catlist});
  }

  select(cat:Icatogry)
  {
    this.coursesapiservice.getCoursesByCatID(cat.id).subscribe(prolist=>{this.coursesapiservice.newcourseslist=prolist;this.courseslist=this.coursesapiservice.newcourseslist;
      if(this.courseslist.length==0)
      {
        this.shownempty=1;
        
      }
      else{this.shownempty=0;}
      if(cat.id==1)
      {
        this.coursesapiservice.getAllcourses().subscribe(prolist=>{this.coursesapiservice.newcourseslist=prolist;this.courseslist=this.coursesapiservice.newcourseslist;
          if(this.courseslist.length==0)
      {
        this.shownempty=1;
        
      }
      else{this.shownempty=0;}});
      }
    
    });
   
  }
}
