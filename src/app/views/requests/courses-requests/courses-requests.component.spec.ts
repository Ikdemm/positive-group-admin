import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesRequestsComponent } from './courses-requests.component';

describe('CoursesRequestsComponent', () => {
  let component: CoursesRequestsComponent;
  let fixture: ComponentFixture<CoursesRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
