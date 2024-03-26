import { Component } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SigninComponent } from '../signin/signin.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private modalService: NgbModal) { }

  openSignInModal() {
    this.modalService.open(SigninComponent);
  }

}
