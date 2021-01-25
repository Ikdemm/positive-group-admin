import { Component, OnInit } from '@angular/core';
import { Chapter } from '../../../models/chapter.model';
import { ChaptersService } from '../../../services/chapters.service';
import { EditChapterComponent } from '../edit-chapter/edit-chapter.component';
import { MatDialog } from "@angular/material/dialog";


@Component({
  selector: 'app-chapters-list',
  templateUrl: './chapters-list.component.html',
  styleUrls: ['./chapters-list.component.css']
})
export class ChaptersListComponent implements OnInit {

  chapters: Array<Chapter>;

  constructor(
    private chaptersService: ChaptersService,
    private dialogRef: MatDialog) { }

  ngOnInit(): void {
    this.getChapters();
  }

  getChapters(): void {
    this.chaptersService.getChapters().subscribe((chapters) => {
      this.chapters = chapters;
    })
  }

  deleteChapter(id): void {
    this.chaptersService.deleteChapter(id).subscribe((res) => {
      console.log(res);
      this.getChapters();
    })
  }

  openEditChapter(chapter: Chapter): void {
    const dialogRef = this.dialogRef.open(EditChapterComponent, { width: "600px" });
    dialogRef.componentInstance.chapter = chapter;
    dialogRef.afterClosed().subscribe(() => {
      this.getChapters();
    })
  }

}
