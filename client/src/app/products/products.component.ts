import { Component } from '@angular/core';
import { Bouquet } from '../models';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  bouquets: Bouquet[] = [
    { bouquetId: "123",
      type: 'dried',
      name: 'Dried Lingzhi Blooms', 
      mushrooms: ['conksLinzhi', 'blackLingzhi', 'conksLingzhi'],
      flowers: ['babysBreath', 'pampas', 'caspia'],
      description: 'A beautiful bouquet of red roses.', 
      basePrice: 29.99, 
      image: 'path/to/rose-thumbnail.jpg', 
      wrap: 'pink'},

      {bouquetId: "234",
      type: 'dried',
      name: 'Dried Lingzhi Antlers', 
      mushrooms: ['antlersLingzhi', 'antlersMulti', 'conksLingzhi'],
      flowers: ['babysBreath', 'pampas', 'caspia'],
      description: 'A beautiful bouquet of red roses.', 
      basePrice: 29.99, 
      image: 'path/to/rose-thumbnail.jpg', 
      wrap: 'pink'},

    // Add more bouquets as needed
  ];

  filteredBouquets: Bouquet[] = [];

  constructor() {
    this.filteredBouquets = this.bouquets; // Initialize filteredBouquets with all bouquets
  }

  filterByType(type: string) {
    if (type === 'edible' || type === 'dried') {
      this.filteredBouquets = this.bouquets.filter(bouquet => bouquet.type === type);
    }
  }

  resetFilter() {
    this.filteredBouquets = this.bouquets; // Reset filteredBouquets to show all bouquets
  }
}

