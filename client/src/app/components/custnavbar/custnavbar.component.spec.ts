import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustnavbarComponent } from './custnavbar.component';

describe('CustnavbarComponent', () => {
  let component: CustnavbarComponent;
  let fixture: ComponentFixture<CustnavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustnavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
