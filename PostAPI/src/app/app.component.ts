import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { UserServiceService } from './user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'PostAPI';
  loginForm: FormGroup;
  username: string = '';
  email: string = '';
  password: string = '';
  data: any = [];

  constructor(
    private formBuilder: FormBuilder,
    private user: UserServiceService
  ) {
    // For Form :
    this.loginForm = this.formBuilder.group({
      username: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  ngOnInit() {}

  onSubmit() {
    // For Post API :
    this.user.saveData(this.loginForm.value).subscribe((result) => {
      console.log(result);
    });

    // For Get API:
    this.user.getData().subscribe((data) => {
      // console.warn(data);
      this.data = data;
    });
  }
}
