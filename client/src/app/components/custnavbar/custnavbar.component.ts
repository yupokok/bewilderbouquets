import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserStorage } from '../../user.storage';

@Component({
  selector: 'app-custnavbar',
  templateUrl: './custnavbar.component.html',
  styleUrl: './custnavbar.component.css'
})
export class CustnavbarComponent {
  
  constructor(private router:Router){}
  
  logout() {
    UserStorage.signOut();
    this.router.navigateByUrl('login');
  }

}
