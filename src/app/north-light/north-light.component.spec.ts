import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NorthLightComponent } from './north-light.component';

describe('NorthLightComponent', () => {
  let component: NorthLightComponent;
  let fixture: ComponentFixture<NorthLightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NorthLightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NorthLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
