import { Component, OnInit, inject } from '@angular/core';
import { Bouquet } from '../../models';
import { BouquetService } from '../../bouquet.service';
import { Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PreviewbouquetComponent } from '../previewbouquet/previewbouquet.component';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{

  // bouquets: Bouquet[] = [
  //   { bouquetId: "123",
  //     type: 'dried',
  //     name: 'Dried Lingzhi Blooms', 
  //     mushrooms: ['conksLinzhi', 'blackLingzhi', 'conksLingzhi'],
  //     flowers: ['babysBreath', 'pampas', 'caspia'],
  //     description: 'A beautiful bouquet of red roses.', 
  //     basePrice: 29.99, 
  //     image: 'path/to/rose-thumbnail.jpg', 
  //     wrap: 'pink'},

  //     {bouquetId: "234",
  //     type: 'dried',
  //     name: 'Dried Lingzhi Antlers', 
  //     mushrooms: ['antlersLingzhi', 'antlersMulti', 'conksLingzhi'],
  //     flowers: ['babysBreath', 'pampas', 'caspia'],
  //     description: 'A beautiful bouquet of red roses.', 
  //     basePrice: 29.99, 
  //     image: 'path/to/rose-thumbnail.jpg', 
  //     wrap: 'pink'},

  //   // Add more bouquets as needed
  // ];

  private bouquetSvc = inject(BouquetService)
  filteredBouquets: Bouquet[] = [];

  bouquets$!: Observable<Bouquet[]>
  modalService = inject(NgbModal)

  ngOnInit(): void {
    this.bouquets$ = this.bouquetSvc.getAllBouquets()
    this.bouquets$.subscribe(data => this.filteredBouquets = data);
  }

  filterByType(type: string) {
    this.bouquets$.subscribe(data => {
      this.filteredBouquets = data.filter(bouquet => bouquet.type === type);
    });
  }

  reset() {
    this.bouquets$.subscribe(data => this.filteredBouquets = data);
  }

  openModal(bouquet: any) {
    const modalRef = this.modalService.open(PreviewbouquetComponent);
    modalRef.componentInstance.bouquet = bouquet;
  }

}

