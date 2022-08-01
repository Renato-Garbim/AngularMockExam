import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../Auth/authentication.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(public authService: AuthenticationService, private formBuilder: FormBuilder, private router: Router) { }

  registerForm!: FormGroup;

  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      email: [''],
      password: [''],
      confirmPassword: ['']

    });

  }

  get field() { return this.registerForm.controls; }

  register() {

    this.authService.register(
      {
        email: this.field['email'].value,
        password: this.field['password'].value,   
        confirmPassword: this.field['confirmPassword'].value     
      }
    )
    .subscribe(success => {
      if (success) {
        this.router.navigate(['/dashboard']);
      }
    });
  }


}
