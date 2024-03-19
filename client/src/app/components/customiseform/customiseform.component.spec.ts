import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomiseformComponent } from './customiseform.component';

describe('CustomiseformComponent', () => {
  let component: CustomiseformComponent;
  let fixture: ComponentFixture<CustomiseformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomiseformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomiseformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
