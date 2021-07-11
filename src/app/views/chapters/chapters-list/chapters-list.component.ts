import { Component, OnInit } from '@angular/core';
import { Chapter } from '../../../models/chapter.model';
import { ChaptersService } from '../../../services/chapters.service';
import { EditChapterComponent } from '../edit-chapter/edit-chapter.component';
import { MatDialog } from "@angular/material/dialog";
import Swal from "sweetalert2";

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

    Swal.fire({
      title: 'Vous êtes sûr?',
      text: "Les données supprimées seront perdus",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Annuler',
      confirmButtonText: 'Oui, supprimer!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Supprimé!',
          'Suppression terminée avec succès',
          'success'
        )
        this.chaptersService.deleteChapter(id).subscribe((res) => {
          this.getChapters();
        })
      }
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
