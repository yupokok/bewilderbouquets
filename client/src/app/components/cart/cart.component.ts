import { Component } from '@angular/core';
import { BouquetOrder, Package } from '../../models';
import { CartService } from '../../cart.service';
import { BouquetService } from '../../bouquet.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  packages: Package[] = [];
  orderTotal: number = 0;
  bouquetOrders$!: Observable<BouquetOrder[]>
  

  constructor(private cartService: CartService, private bouquetSvc: BouquetService) { }

  ngOnInit(): void {
    // this.packages = this.cartService.getCart(); // Assuming getCart() returns an array of Package objects
    this.calculateOrderTotal();
    this.bouquetSvc.getAllBouquetOrders();
  }
  

  calculateOrderTotal(): void {
    this.orderTotal = this.packages.reduce((total, pack) => total + pack.finalPrice, 0);
  }
} 