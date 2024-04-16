import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatebouquetComponent } from './createbouquet.component';

describe('CreatebouquetComponent', () => {
  let component: CreatebouquetComponent;
  let fixture: ComponentFixture<CreatebouquetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatebouquetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatebouquetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
