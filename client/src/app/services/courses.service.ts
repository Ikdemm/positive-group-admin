import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../models/course.model';
import { Observable } from 'rxjs';

import { DEV_REQUEST_URL } from '../constants/dev';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) { }

  getCourses(): Observable<any> {
    return this.http.get(DEV_REQUEST_URL + "/api/courses")
  }

  getCourseById(courseId): Observable<any> {
    return this.http.get(DEV_REQUEST_URL + "/api/courses/" + courseId)
  }

  createCourse(course: FormData): Observable<any> {
    return this.http.post(DEV_REQUEST_URL + "/api/courses", course);
  }

  deleteCourse(id) {
    return this.http.delete(DEV_REQUEST_URL + "/api/courses/" + id)
  }

  updateCourse(id, course: FormData) {
    return this.http.put(DEV_REQUEST_URL + "/api/courses/" + id, course)
  }

}
