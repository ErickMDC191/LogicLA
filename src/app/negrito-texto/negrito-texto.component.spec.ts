import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NegritoTextoComponent } from './negrito-texto.component';

describe('NegritoTextoComponent', () => {
  let component: NegritoTextoComponent;
  let fixture: ComponentFixture<NegritoTextoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NegritoTextoComponent]
    });
    fixture = TestBed.createComponent(NegritoTextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
