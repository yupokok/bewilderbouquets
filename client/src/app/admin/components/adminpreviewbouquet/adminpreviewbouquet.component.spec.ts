import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpreviewbouquetComponent } from './adminpreviewbouquet.component';

describe('AdminpreviewbouquetComponent', () => {
  let component: AdminpreviewbouquetComponent;
  let fixture: ComponentFixture<AdminpreviewbouquetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminpreviewbouquetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminpreviewbouquetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
