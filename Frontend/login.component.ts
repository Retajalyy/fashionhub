import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']  
})
export class LoginComponent {
  constructor(private _authS: AuthService, private _router: Router) {}

  login(loginForm: NgForm) {
   
    if (loginForm.invalid) {
      console.log('Form is invalid');
      return;
    }

    this._authS.login(loginForm.value).subscribe({
      next: (response) => {
        
        this._router.navigate(['/dashboard']);
        console.log('Decoded token:', this._authS.decodeAccessToken());
      },
      error: (err) => {
        
        console.log('Login failed:', err.message);
        alert('Login failed. Please check your credentials.');
      }
    });

    console.log('Login form submitted with values:', loginForm.value);
  }
}
