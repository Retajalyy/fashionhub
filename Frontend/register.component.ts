import { Component} from '@angular/core';
import { FormsModule,NgForm } from '@angular/forms';
import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import{Router} from '@angular/router';
@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css' 
})
export class RegisterComponent {
  constructor(private router: Router) {}
  onLogin() {
    this.router.navigate(['/register']); 
  }

  postData(form:NgForm){
    console.log(form);
    if(form.valid){
      console.log('valid')
    } else{
      console.log('invalid')
    }
    
  };

  changes(form:NgForm){
    
    form.form.patchValue({username:'retaj'})
    console.log(form.value)
  }
  }