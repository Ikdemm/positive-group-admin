import { Component, OnInit } from '@angular/core';
import { Chapter } from '../../../models/chapter.model';
import { ChaptersService } from '../../../services/chapters.service';


@Component({
  selector: 'app-add-chapter',
  templateUrl: './add-chapter.component.html',
  styleUrls: ['./add-chapter.component.css']
})
export class AddChapterComponent implements OnInit {

  constructor(private chaptersService: ChaptersService) { }

  ngOnInit(): void {

  }



}
