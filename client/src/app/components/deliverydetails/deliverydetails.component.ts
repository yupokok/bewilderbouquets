import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Package } from '../../models';

@Component({
  selector: 'app-deliverydetails',
  templateUrl: './deliverydetails.component.html',
  styleUrl: './deliverydetails.component.css'
})
export class DeliverydetailsComponent implements OnInit{

  detailsForm!: FormGroup

  builder = inject(FormBuilder)

  ngOnInit(): void {
    this.detailsForm = this.createDetailsForm()
  }


  createDetailsForm(): FormGroup {
    return this.builder.group({
      senderName: this.builder.control<string>('', [Validators.required]),
      senderContact: this.builder.control<string>('', [Validators.required]),
      recipientName: this.builder.control<string>('', [Validators.required]),
      recipientContact: this.builder.control<string>('', [Validators.required]),
      recipientAddress: this.builder.control<string>('', [Validators.required]),
      occasion: this.builder.control<string>('', [Validators.required]),
      message: this.builder.control<string>('', [Validators.required]),
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
