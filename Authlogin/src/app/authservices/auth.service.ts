import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
// import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }

  setToken (token:any){
    localStorage.setItem('token',token)
  }

  getToken (): string | null{
    return localStorage.getItem('token')
  }

  isLoggedIn (){
alert("token"+localStorage.getItem('token'))
    if(localStorage.getItem('token')!='' &&   localStorage.getItem('token')!=null &&   localStorage.getItem('token')!=undefined)
    {
      alert("isLoggedIn works")
      return true;
    }
    else{
      alert("isLoggedIn dont works")
      return false;
    }
  }

  logout (){
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  login({ email, password }: any): Observable<any> {
    if (email === 'admin@gmail.com' && password === 'admin123') {
      this.setToken('abcdefghijklmnopqrstuvwxyz');
      return of({ name: 'Suraj Hirve', email: 'sunshine@gmail.com' });
    }
    return throwError(() => new Error('Failed to login'));
  }


}
