import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerProductUpdateComponent } from './seller-product-update.component';

describe('SellerProductUpdateComponent', () => {
  let component: SellerProductUpdateComponent;
  let fixture: ComponentFixture<SellerProductUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellerProductUpdateComponent]
    });
    fixture = TestBed.createComponent(SellerProductUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
