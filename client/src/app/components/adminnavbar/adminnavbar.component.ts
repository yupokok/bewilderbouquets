import { Component } from '@angular/core';
import { UserStorage } from '../../user.storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminnavbar',
  templateUrl: './adminnavbar.component.html',
  styleUrl: './adminnavbar.component.css'
})
export class AdminnavbarComponent {

  constructor(private router:Router){}
  
  logout() {
    UserStorage.signOut();
    this.router.navigateByUrl('/');
  }

}
