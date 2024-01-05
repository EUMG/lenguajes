import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LenguajeNoviaComponent } from './lenguaje-novia.component';

describe('LenguajeNoviaComponent', () => {
  let component: LenguajeNoviaComponent;
  let fixture: ComponentFixture<LenguajeNoviaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LenguajeNoviaComponent]
    });
    fixture = TestBed.createComponent(LenguajeNoviaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
