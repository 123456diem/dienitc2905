import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigProjectComponent } from './big-project.component';

describe('BigProjectComponent', () => {
  let component: BigProjectComponent;
  let fixture: ComponentFixture<BigProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
