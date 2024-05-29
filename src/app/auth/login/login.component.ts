import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private authService:AuthService,private router:Router){}
  onSubmit(form:NgForm){
    console.log(form.value);
    this.router.navigate(['/home']);
    form.resetForm();
   
  
  }

}
