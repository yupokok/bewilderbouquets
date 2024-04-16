import { Component } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private modalService: NgbModal) { }

  openSignInModal() {
    this.modalService.open(LoginComponent);
  }
  
  openRegisterModal() {
    this.modalService.open(RegisterComponent);
  }

}
