import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellOrderDetailsComponent } from './sell-order-details.component';

describe('SellOrderDetailsComponent', () => {
  let component: SellOrderDetailsComponent;
  let fixture: ComponentFixture<SellOrderDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellOrderDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellOrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
