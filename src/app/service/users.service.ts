import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
 
  constructor(public http:HttpClient) { 
    
  }

  getUsers(page:number)
  {
    let url = 'https://reqres.in/api/users?page=' + page.toString();
    
   /* let s = this.http.get(url).pipe(map( (resp: any)=>{
      resp.sort(resp.id,resp.id)
    }));*/
    return this.http.get(url);
  }
}
