import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient, ) { }

  url="http://localhost:3000/posts";

  getData (){
   return this.http.get(this.url);
  }
  saveData (data:any){
    return this.http.post(this.url,data);
  }
}
