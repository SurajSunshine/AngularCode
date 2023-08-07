import { Component } from '@angular/core';
import { FormBuilder,FormControl,FormGroup, Validators}from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  loginForm: FormGroup;
  email:string="";
  password:string="";

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      username:[''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    
}


ngOnInit () {

}

// *** Get Value Method ***
postData () {
  this.loginForm.get('email')?.value;
  console.log(this.email);
  console.log(this.loginForm.value);
}

// *** Reset Method ***
resetForm (){
  this.loginForm.reset ();
}

// **** Set Value Method:****

// setData (){
//   this.loginForm.setValue ({
//     "username":'Sunshine',
//     "email" : 'abc@gmail.com',
//     "password":'123456'
//   })
// }


// **** Patch Value Method: ****

setData (){
  this.loginForm.patchValue ({
   "username" :'Vasudev',
   "email" : 'xyz@yahoo.com'
  })
}
}



