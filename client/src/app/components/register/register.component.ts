import { Component, OnInit, SimpleChanges, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{

  registerForm!: FormGroup
  passwordsMismatch: boolean = false;

  builder = inject(FormBuilder)
  authService = inject(AuthService)
  router = inject(Router)

  ngOnInit(): void {
      this.registerForm = this.createRegisterForm()
  }

  createRegisterForm(): FormGroup {
    return this.builder.group({
      name: this.builder.control<string>('', [Validators.required]),
      email: this.builder.control<string>('', [Validators.required, Validators.email]),
      password: this.builder.control<string>('', [Validators.required]),
      confirmPassword: this.builder.control<string>('', [Validators.required]),

    })
  }

  registerUser():void {
    const password = this.registerForm.get('password')?.value
    const confirmPassword = this.registerForm.get('confirmPassword')?.value

    if (password !== confirmPassword){
      this.passwordsMismatch = true;
      return alert("Passwords do not match.");
    }
    this.passwordsMismatch= false;
    this.authService.register(this.registerForm.value).subscribe(
      (response) => {
        alert("Succesfully registered. Return to login Page")
        this.router.navigate(['/signin'])
      },
      (error) => {alert("Sign up failed. Please try again.")}
    )
  }


}
