import { Course } from './course.model';

export class Category {
    _id: String;
    name: String;
    description: String;
    courses: Array<Course>;
}