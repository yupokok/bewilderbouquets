import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {

  constructor(public activeModal: NgbActiveModal) { }

  signIn() {
    // Add sign-in logic here
    // For example, you can call a service to authenticate the user
    // Once authenticated, you can close the modal
    this.activeModal.close();
  }

  close() {
    this.activeModal.dismiss();
  }
}

