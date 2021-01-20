import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopingEditeComponent } from './shoping-edite.component';

describe('ShopingEditeComponent', () => {
  let component: ShopingEditeComponent;
  let fixture: ComponentFixture<ShopingEditeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopingEditeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopingEditeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
