import { Chapter } from "./chapter.model";

export class Course {
  _id: String;
  name: String;
  category: String;
  description: String;
  duration: Number;
  createdOn: Date;
  chapters: Array<Chapter>;
}
