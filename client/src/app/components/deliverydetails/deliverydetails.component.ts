import { Component, Input, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Bouquet, BouquetOrder, Package } from '../../models';
import { BouquetService } from '../../bouquet.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-deliverydetails',
  templateUrl: './deliverydetails.component.html',
  styleUrl: './deliverydetails.component.css'
})
export class DeliverydetailsComponent implements OnInit{

  detailsForm!: FormGroup

  
  constructor(private route: ActivatedRoute) {}
  builder = inject(FormBuilder)
  bouquetSvc = inject(BouquetService)
  router = inject(Router)

  bouquetOrderId: string;
  finalPrice: number;

 


  ngOnInit(): void {
    this.detailsForm = this.createDetailsForm()
    this.bouquetOrderId = this.route.snapshot.queryParams['bouquetOrderId'];
    this.finalPrice = +this.route.snapshot.queryParams['finalPrice'];
  }


  createDetailsForm(): FormGroup {
    return this.builder.group({
      senderName: this.builder.control<string>('', [Validators.required]),
      senderNumber: this.builder.control<string>('', [Validators.required]),
      recipientName: this.builder.control<string>('', [Validators.required]),
      recipientNumber: this.builder.control<string>('', [Validators.required]),
      deliveryAddress: this.builder.control<string>('', [Validators.required]),
      occasion: this.builder.control<string>('', [Validators.required]),
      message: this.builder.control<string>('', [Validators.required]),
    })
  }


  addToCart(){

    const pack: Package = {
      senderName: this.detailsForm.get('senderName')?.value,
      senderNumber: this.detailsForm.get('senderNumber')?.value,
      recipientName: this.detailsForm.get('recipientName')?.value,
      recipientNumber: this.detailsForm.get('recipientNumber')?.value,
      deliveryAddress: this.detailsForm.get('deliveryAddress')?.value,
      occasion: this.detailsForm.get('occasion')?.value,
      message: this.detailsForm.get('message')?.value,
      bouquetOrderId: this.bouquetOrderId,
      finalPrice: this.finalPrice,
    }
    console.info('ADDINGG TO CARTTTT: ', pack)
    this.bouquetSvc.addingToCart(pack).then(resp => {
      console.info('resp: ', resp)
      this.router.navigate([ '/' ])
    })
    .catch(resp => {
      this.router.navigate([ '/customer/cart' ])
      alert(`ADD ERROR: ${resp.error.message}`)
    })
  }



  // addToCart() {
  //   const pack: Package = {
  //     bouquetOrderId: this.form.value['quantity'],
  //     name: this.productName,
  //     price: this.productPrice
  //   }
  //   this.cartStore.addToCart(lineItem)
  //   // this.cartStore.getCart.subscribe(
  //   //   cart => console.log(cart)
  //   // )

  //   this.form = this.createForm()
  // }

}
