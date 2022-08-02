import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICourses } from '../View Models/icourses';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesapiService {
  newcourseslist:ICourses[]=[];
  private httpoption;
  constructor(private httpclient:HttpClient) {
   
    this.httpoption={
      headers:new HttpHeaders(
        {
          'Content-Type':'application/json'
        }
      )
    }
   }


  getAllcourses():Observable<ICourses[]>
{
  
  
  return this.httpclient.get<ICourses[]>(environment.APIBaseURL+'Courses/GetAll');
}

getCoursesByCatID(catID:number):Observable<ICourses[]>
{
  
  return this.httpclient.get<ICourses[]>(environment.APIBaseURL+'Courses/GetbycatId/'+catID);
 
}

}
