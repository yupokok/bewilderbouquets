import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../services/auth.service';
import { UserStorage } from '../../user.storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  constructor(
    private modalService: NgbModal,
    private router: Router,
    private builder: FormBuilder,
    private authSvc: AuthService
  ) { }

  signInForm!: FormGroup

  isSpinning: boolean = false;


  ngOnInit(): void {
    this.signInForm = this.createSignInForm()
  }

  closeRegisterModal() {
    this.modalService.dismissAll(); // Dismiss all open modals
  }

  // Function to navigate to the register page
  goToRegister() {
    this.closeRegisterModal()
    this.router.navigate(['/register']);
  }

  createSignInForm(): FormGroup {
    return this.builder.group({
      email: this.builder.control<string>('', [Validators.required, Validators.email]),
      password: this.builder.control<string>('', [Validators.required]),
    })
  }

  signIn(): void {
    const username = this.signInForm.get('email')!.value;
    const password = this.signInForm.get('password')!.value;

    this.authSvc.signIn(username, password).subscribe(
      (res) => {


        if(UserStorage.isAdminLoggedIn()){
          this.router.navigateByUrl("/");
        }else if(UserStorage.isCustomerLoggedIn){
          this.router.navigateByUrl("/");
        }
        alert('Success.')
        this.modalService.dismissAll()
      },
      (error) => {
        alert('Bad Credentials.');
      }
)
}
}