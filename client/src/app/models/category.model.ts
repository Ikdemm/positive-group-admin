import { Chapter } from './chapter.model';

export class Category {
    _id: String;
    name: String;
    description: String;
    courses: Array<Chapter>;
}