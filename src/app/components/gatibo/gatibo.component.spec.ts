import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GatiboComponent } from './gatibo.component';

describe('GatiboComponent', () => {
  let component: GatiboComponent;
  let fixture: ComponentFixture<GatiboComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GatiboComponent]
    });
    fixture = TestBed.createComponent(GatiboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
