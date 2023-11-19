import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GmpNumberComponent } from './gmp-number.component';

describe('GmpNumberComponent', () => {
  let component: GmpNumberComponent;
  let fixture: ComponentFixture<GmpNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GmpNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmpNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
