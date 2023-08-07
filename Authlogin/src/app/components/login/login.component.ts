import { Component } from '@angular/core';
import { FormControl ,FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/authservices/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
faLock = faLock;
throwError:any;
// auth:any;
// result:any;
// error :any;


loginForm= new FormGroup ({
  email:new FormControl (''),
  password :new FormControl(''),
});

constructor (private authService:AuthService,private router:Router) {}


// When you logged in - you cant go back to login page by Url = by This Method :
ngOnInit(): void {
if (this.authService.isLoggedIn()) {
    this.router.navigate(['/admin/home']);
  }
}




onSubmit(){
  
  if (this.loginForm.valid){
    this.authService.login(this.loginForm.value).subscribe({
      next: (result) => {
        
        // Handle successful result
        console.log(result);
        alert("Sunshine")
        // Perform actions with the result
        this.router.navigate(['/admin/home']);
      },
      error: (error) => {
        // Handle error
        alert(error.message);
        console.log('An error occurred:', error);
       
      }
    });
  }
}

}
