import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../Auth/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private authService: AuthenticationService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      email: ['renatobg@teste.com.br'],
      password: ['1234']
    });
  }

  get field() { return this.loginForm.controls; }

  login() {

    this.authService.login(
      {
        email: this.field['email'].value,
        password: this.field['password'].value        
      }
    )
    .subscribe(success => {
      if (success) {
        this.router.navigate(['/dashboard']);
      }
    });
  }
}
