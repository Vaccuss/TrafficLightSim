import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControllerComponent } from './controller.component';

describe('RoadComponent', () => {
  let component: ControllerComponent;
  let fixture: ComponentFixture<ControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
