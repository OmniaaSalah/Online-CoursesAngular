import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Iuser } from '../View Models/iuser';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Loginadmin } from '../View Models/loginadmin';
import { ApiObj } from '../View Models/api-obj';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private httpoption;
  islogged:boolean=false;
  newuser:Iuser={} as Iuser;
  objapi:ApiObj={} as ApiObj;

  constructor(private httpclient:HttpClient) {  this.httpoption={
    headers:new HttpHeaders(
      {
        'Content-Type':'application/json'
      }
    )
  }
 }
 
   Adduser(newuser:Iuser) :Observable<Iuser>
  {
    return  this.httpclient.post<Iuser>(environment.APIBaseURL+'Account/RegisterAdmin',JSON.stringify(newuser),this.httpoption);
  }
  GetAllAdmin() :Observable<Iuser[]>
  {
      return this.httpclient.get<Iuser[]>(environment.APIBaseURL+'Account/Admins');
  }
  Login(user:Loginadmin) :Observable<ApiObj>
  {
      return this.httpclient.post<ApiObj>(environment.APIBaseURL+'Account/Login',JSON.stringify(user),this.httpoption);
  }

  get IsUserLogged():boolean
  {
  
      
       if (localStorage.getItem("token"))
       {return true;}
       else
       {return false;}
  }
  
}
