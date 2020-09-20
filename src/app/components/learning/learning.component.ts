import { Component, OnInit } from '@angular/core';
import { Learning } from 'src/app/models/learning.model';
import { LearningService } from 'src/app/services/learning.service';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.css']
})
export class LearningComponent implements OnInit {

  listaTitulos: Learning[] = []


  constructor() {
    let serviceLearning: LearningService = new LearningService();
    this.listaTitulos = serviceLearning.listaTitulos;
  }

  ngOnInit(): void {
  }

}
