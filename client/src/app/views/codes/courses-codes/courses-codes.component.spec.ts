import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesCodesComponent } from './courses-codes.component';

describe('CoursesCodesComponent', () => {
  let component: CoursesCodesComponent;
  let fixture: ComponentFixture<CoursesCodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesCodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
