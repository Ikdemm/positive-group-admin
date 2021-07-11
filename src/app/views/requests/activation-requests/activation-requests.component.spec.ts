import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivationRequestsComponent } from './activation-requests.component';

describe('ActivationRequestsComponent', () => {
  let component: ActivationRequestsComponent;
  let fixture: ComponentFixture<ActivationRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivationRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivationRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
