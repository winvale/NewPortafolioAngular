import { Component, OnInit } from '@angular/core';
import { LearningService } from 'src/app/core/services/learning.service';
import { Learning } from 'src/app/models/Learning.model';


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
