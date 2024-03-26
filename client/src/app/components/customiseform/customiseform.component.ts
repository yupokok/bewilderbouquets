import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  checkedFlowersCount = 0;
  maxFlowersAllowed = 3;

  checkedMushCount = 0;
  maxMushAllowed = 2;




  private builder = inject(FormBuilder)

  ngOnInit(): void {
    this.typeForm = this.createTypeForm()
      
  }

  
  
  handleFlowersCheckboxChange(event: any) {
    if (event.target.checked) {
      if (this.checkedFlowersCount >= this.maxFlowersAllowed) {
        event.target.checked = false; // Prevent checking more than maxAllowed
      } else {
        this.checkedFlowersCount++;
      }
    } else {
      this.checkedFlowersCount--;
    }
  }

  handleMushCheckboxChange(event: any) {
    if (event.target.checked) {
      if (this.checkedMushCount >= this.maxMushAllowed) {
        event.target.checked = false; // Prevent checking more than maxAllowed
      } else {
        this.checkedMushCount++;
      }
    } else {
      this.checkedMushCount--;
    }
  }

  selectType(event: any) {
    const selectedValue = this.typeForm.get('type')?.value;
    console.log('Selected value:', selectedValue)

    if (selectedValue == "dried"){
      this.type = selectedValue
      this.isDried = true
      this.driedMushForm = this.createDriedMushForm()
      console.log("type", this.type)
      
    } else { 
      this.type == "edible"
      this.isDried = false
      this.edibleMushForm = this.createEdibleMushForm()
    }
  }

  



  createTypeForm(): FormGroup{
    return this.builder.group({
      type: this.builder.control<string>('', [ Validators.required ])
    })
  }

  createDriedMushForm(): FormGroup{
    return this.builder.group({
      mushrooms: this.builder.control<string[]>([''], [ Validators.required]),
      flowers: this.builder.control<string[]>([''],[Validators.required]),
      wrap: this.builder.control<string>('', [Validators.required])
    })
  }

  createEdibleMushForm(): FormGroup{
    return this.builder.group({
      mushrooms: this.builder.control<string[]>([''], [ Validators.required]),
      wrap: this.builder.control<string>('', [Validators.required])
    })
  }

  
}
