import { Component, ElementRef, Input, ViewChild, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdminService } from '../../../services/admin.service';
import { Params, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-adminpreviewbouquet',
  templateUrl: './adminpreviewbouquet.component.html',
  styleUrl: './adminpreviewbouquet.component.css'
})
export class AdminpreviewbouquetComponent {

  @ViewChild('image')
  image!: ElementRef
  
  isSpinning = false;
  imageForm: FormGroup;
  listOfCategories: any = [];
  selectedFile: File | null;
  imagePreview: string | ArrayBuffer | null;
  imageFile = ""

  @Input() bouquet: any;
  adminSvc = inject(AdminService)

  modalService = inject(NgbModal)
  router = inject(Router)

  selectedSize: string = 'small';
  finalPrice!: number;

  ngOnInit(): void {
    this.finalPrice = this.bouquet.basePrice
    console.log(this.finalPrice)
    console.log(this.bouquet.basePrice)

  }
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    this.previewImage();
  }
  previewImage() {
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    };
    reader.readAsDataURL(this.selectedFile);
  }

  saveImage() {
    const file = this.image.nativeElement.files[0] as File
    this.imageFile = file.name

    this.adminSvc.saveImage(file)
      .then(result => {
        // { id: 1234 }
        const id = result['id']
        const queryParams: Params = {
          name: file.name
        }
        this.router.navigate(["/admin/manage-products", id ], { queryParams })
      })

  }

  
}
