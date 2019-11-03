import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckouComponent } from './checkou.component';

describe('CheckouComponent', () => {
  let component: CheckouComponent;
  let fixture: ComponentFixture<CheckouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
