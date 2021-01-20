import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepieDetaileComponent } from './recepie-detaile.component';

describe('RecepieDetaileComponent', () => {
  let component: RecepieDetaileComponent;
  let fixture: ComponentFixture<RecepieDetaileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecepieDetaileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecepieDetaileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
