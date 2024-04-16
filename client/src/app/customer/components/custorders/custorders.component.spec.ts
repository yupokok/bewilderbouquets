import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustordersComponent } from './custorders.component';

describe('CustordersComponent', () => {
  let component: CustordersComponent;
  let fixture: ComponentFixture<CustordersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustordersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
