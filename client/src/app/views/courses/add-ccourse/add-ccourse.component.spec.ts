import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCcourseComponent } from './add-ccourse.component';

describe('AddCcourseComponent', () => {
  let component: AddCcourseComponent;
  let fixture: ComponentFixture<AddCcourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCcourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
