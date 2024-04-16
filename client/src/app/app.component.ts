import { Component, OnInit } from '@angular/core';
import { UserStorage } from './user.storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'client';

  isCustomerLoggedIn: boolean = UserStorage.isCustomerLoggedIn()
  isAdminLoggedIn: boolean = UserStorage.isAdminLoggedIn()

  constructor(private router:Router){}

  
ngOnInit(): void {
    this.router.events.subscribe(event => {
      this.isCustomerLoggedIn = UserStorage.isCustomerLoggedIn();
      this.isAdminLoggedIn = UserStorage.isAdminLoggedIn();
    })
}

signOut(){
  UserStorage.signOut();
  this.router.navigateByUrl("");
}
}
