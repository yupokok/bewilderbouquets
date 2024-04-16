import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Bouquet } from '../../models';
import { PreviewbouquetComponent } from '../previewbouquet/previewbouquet.component';
import { BouquetService } from '../../bouquet.service';

@Component({
  selector: 'app-customiseform',
  templateUrl: './customiseform.component.html',
  styleUrl: './customiseform.component.css'
})
export class CustomiseformComponent implements OnInit {

  type: string = ""
  isDried?: boolean

  typeForm!: FormGroup
  driedMushForm!: FormGroup
  edibleMushForm!: FormGroup

  selectedValue = " "
  selectedDriedMushrooms: string[] = [];
  selectedEdible: string[] = [];

  selectedFlowers: string[] =[ ]

  checkedFlowersCount = 0;
  maxFlowersAllowed = 3;

  checkedMushCount = 0;
  maxDriedMushAllowed = 2;
  maxEdibleMushAllowed = 3;





  private builder = inject(FormBuilder)
  private modalService = inject(NgbModal)
  private bouquetSvc = inject(BouquetService)

  ngOnInit(): void {
    this.typeForm = this.createTypeForm()
    

  }

  handleFlowersCheckboxChange(event: any) {
    const isChecked = event.target.checked;
    const flowersValue = event.target.value;

    if (isChecked && this.selectedFlowers.length < this.maxFlowersAllowed) {
        // Add the selected mushroom if it's checked and not exceeding the limit
        this.selectedFlowers.push(flowersValue);
    } else if (!isChecked) {
        // Remove the selected mushroom if it's unchecked
        const index = this.selectedFlowers.indexOf(flowersValue);
        if (index !== -1) {
            this.selectedFlowers.splice(index, 1);
        }
    } else {
        // Uncheck the checkbox if the limit is reached
        event.target.checked = false;
    }

    console.log("Selected flowers:", this.selectedFlowers);
}

  

handleMushCheckboxChange(event: any) {
    const isChecked = event.target.checked;
    const mushroomValue = event.target.value;

    if (isChecked && this.selectedDriedMushrooms.length < this.maxDriedMushAllowed) {
        // Add the selected mushroom if it's checked and not exceeding the limit
        this.selectedDriedMushrooms.push(mushroomValue);
    } else if (!isChecked) {
        // Remove the selected mushroom if it's unchecked
        const index = this.selectedDriedMushrooms.indexOf(mushroomValue);
        if (index !== -1) {
            this.selectedDriedMushrooms.splice(index, 1);
        }
    } else {
        // Uncheck the checkbox if the limit is reached
        event.target.checked = false;
    }

    console.log("Selected mushrooms:", this.selectedDriedMushrooms);
}

handleEdibleMushCheckboxChange(event: any) {
  const isChecked = event.target.checked;
  const mushroomValue = event.target.value;

  if (isChecked && this.selectedEdible.length < this.maxEdibleMushAllowed) {
      // Add the selected mushroom if it's checked and not exceeding the limit
      this.selectedEdible.push(mushroomValue);
  } else if (!isChecked) {
      // Remove the selected mushroom if it's unchecked
      const index = this.selectedEdible.indexOf(mushroomValue);
      if (index !== -1) {
          this.selectedEdible.splice(index, 1);
      }
  } else {
      // Uncheck the checkbox if the limit is reached
      event.target.checked = false;
  }

  console.log("Selected mushrooms:", this.selectedEdible);
}
  

  selectType(event: any) : String {
    const selectedValue = this.typeForm.get('type')?.value;
    console.log('Selected value:', selectedValue)

    if (selectedValue == "dried") {
      this.type = selectedValue
      this.isDried = true
      this.driedMushForm = this.createDriedMushForm()
      console.log("type", this.type)

      return selectedValue

    } else {
      this.type == "edible"
      this.isDried = false
      this.edibleMushForm = this.createEdibleMushForm()
      console.log("type", this.type)
      return selectedValue
    }
  }





  createTypeForm(): FormGroup {
    return this.builder.group({
      type: this.builder.control<string>('', [Validators.required])
    })
  }

  createDriedMushForm(): FormGroup {
    return this.builder.group({
      name: this.builder.control<string>('Custom Bouquet', [Validators.required]),
      wrap: this.builder.control<string>('8878', [Validators.required])
    })
  }

  createEdibleMushForm(): FormGroup {
    return this.builder.group({
      name: this.builder.control<string>('Custom Bouquet', [Validators.required]),
      wrap: this.builder.control<string>('', [Validators.required])
    })
  }

  createCustomBouquet(): Bouquet {
    if (this.selectedValue = 'dried') {

      const customBouquet: Bouquet = {
        bouquetId: 'custom', 
        name: this.driedMushForm.get('name')?.value,
        description: 'Custom Bouquet', 
        basePrice: 300, 
        type: 'dried', 
        mushrooms: this.selectedDriedMushrooms,
        flowers: this.selectedFlowers,
        wrap: this.driedMushForm.get('wrap')?.value,
        image: '/assets/bouquetpics/custom.jpg'
      }
      return customBouquet
      
    } else {

      const customBouquet: Bouquet = {
        bouquetId: 'custom', 
        name: this.edibleMushForm.get('name')?.value,
        description: 'Custom Bouquet', 
        basePrice: 300, 
        type: 'edible', 
        mushrooms: this.selectedEdible,
        flowers:[],
        wrap: this.edibleMushForm.get('wrap')?.value,
        image: '/assets/bouquetpics/custom.jpg'
      }
      return customBouquet
    }
  }

  processCustomBouquet(){
    const customBouquet = this.createCustomBouquet();
    console.log("Creating custom bouquet:", customBouquet)
    this.bouquetSvc.addCustomBouquet(customBouquet)
    .then(resp => {
      console.info('resp: ', resp)
      this.openModal(customBouquet)
    })
    .catch(resp => {
      alert(`ADD ERROR: ${resp.error.message}`)
    })
  }
    
  

  openModal(bouquet: any) {
    const modalRef = this.modalService.open(PreviewbouquetComponent);
    modalRef.componentInstance.bouquet = bouquet;
  }
  


}
