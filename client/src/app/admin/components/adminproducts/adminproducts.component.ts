import { Component } from '@angular/core';
import { Bouquet } from '../../../models';
import { BouquetService } from '../../../bouquet.service';

@Component({
  selector: 'app-adminproducts',
  templateUrl: './adminproducts.component.html',
  styleUrl: './adminproducts.component.css'
})
export class AdminproductsComponent {


  bouquets: Bouquet[] = [];

  constructor(private bouquetService: BouquetService) { }

  ngOnInit(): void {
    this.getBouquets();
  }

  getBouquets(): void {
    this.bouquetService.getAllBouquets()
      .subscribe(bouquets => this.bouquets = bouquets);
  }

  deleteBouquet(bouqeutId: string): void {
    this.bouquetService.deleteBouquet(bouqeutId)
      .subscribe(() => {
        this.bouquets = this.bouquets.filter(bouquet => bouquet.bouquetId !== bouqeutId);
      });
  }


  
}
