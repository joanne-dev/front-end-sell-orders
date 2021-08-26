import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellOrderCreationComponent } from './sell-order-creation.component';

describe('SellOrderCreationComponent', () => {
  let component: SellOrderCreationComponent;
  let fixture: ComponentFixture<SellOrderCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellOrderCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellOrderCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
