import { Component, Input, OnInit, inject } from '@angular/core';
import { BouquetOrder } from '../../models';
import { BouquetService } from '../../bouquet.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-previewbouquet',
  templateUrl: './previewbouquet.component.html',
  styleUrl: './previewbouquet.component.css'
})
export class PreviewbouquetComponent implements OnInit {

  @Input() bouquet: any;
  bouquetSvc = inject(BouquetService)

  modalService = inject(NgbModal)

  selectedSize: string = 'small';
  finalPrice!: number;

  ngOnInit(): void {
    this.finalPrice = this.bouquet.basePrice
    console.log(this.finalPrice)
    console.log(this.bouquet.basePrice)

  }

  updateSelectedSize(event: Event) {
    const selectedOption = (event.target as HTMLSelectElement).value
    this.selectedSize = selectedOption
    this.updateFinalPrice(); // Update the final price when size changes
  }

  updateFinalPrice() {
    // Update the final price based on the selected size
    switch (this.selectedSize) {
      case 'small':
        this.finalPrice = this.bouquet.basePrice;
        console.log("small selected")
        break;
      case 'medium':
        this.finalPrice = this.bouquet.basePrice + 40;
        break;
      case 'large':
        this.finalPrice = this.bouquet.basePrice + 80;
        console.log("Big selected")
        break;
      default:
        this.finalPrice = this.bouquet.basePrice;
    }
  }


  saveBouquetOrder() {
    const bouquetOrder: BouquetOrder = {
      bouquetOrderId: "",
      bouquetId: this.bouquet.bouquetId,
      name: this.bouquet.name,
      image: this.bouquet.image,
      wrap: this.bouquet.wrap,
      size: this.selectedSize,
      finalPrice: this.finalPrice,
    }

    console.log("Bouquet order created:", bouquetOrder)
    this.modalService.dismissAll();
    this.bouquetSvc.savingBouquetOrder(bouquetOrder)
    .then(resp => {
      console.info('resp: ', resp)
    })
    .catch(resp => {
      alert(`ADD ERROR: ${resp.error.message}`)
    })
  }
}
