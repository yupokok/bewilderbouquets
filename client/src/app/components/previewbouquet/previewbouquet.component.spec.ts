import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewbouquetComponent } from './previewbouquet.component';

describe('PreviewbouquetComponent', () => {
  let component: PreviewbouquetComponent;
  let fixture: ComponentFixture<PreviewbouquetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PreviewbouquetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreviewbouquetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
