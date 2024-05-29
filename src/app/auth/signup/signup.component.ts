import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  constructor(private router:Router){}
  onSubmit(form:NgForm){
console.log(form.value);
    this.router.navigate(['/home']);
    form.resetForm();
  }

}
