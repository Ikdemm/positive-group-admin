import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCodesComponent } from './credit-codes.component';

describe('CreditCodesComponent', () => {
  let component: CreditCodesComponent;
  let fixture: ComponentFixture<CreditCodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditCodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
