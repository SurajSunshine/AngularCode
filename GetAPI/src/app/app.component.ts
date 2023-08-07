import { Component } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,Validators}from '@angular/forms';
import { UserServiceService } from './user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GetAPI';
  loginForm:FormGroup ;
  username :string="";
  email :string="";
  password:string="";
  data:any=[];

constructor (private formBuilder:FormBuilder,private user : UserServiceService){
  this.loginForm=this.formBuilder.group({
    username:[''],
    email :['',[Validators.required,Validators.email]],
    password :['',[Validators.required,Validators.minLength(6)]]
  })
  this.user.getData().subscribe(data=>{
    console.warn(data);
    this.data=data;
  })
}
ngOnInit (){


}
postData (){
  console.log(this.loginForm.value);
}
}
