import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  imports: [CommonModule],
  standalone: true
})
export class ProfileComponent implements OnInit {
  isButtonEnabled = true;
  skills = [
    { name: 'HTML5', level: 90 },
    { name: 'CSS3/SCSS', level: 85 },
    { name: 'JavaScript', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Angular', level: 85 },
    { name: 'React', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'Express', level: 75 },
    { name: 'MongoDB', level: 70 },
    { name: 'SQL', level: 75 }
  ];

  constructor() { }

  ngOnInit(): void {
    // Inicializar animaciones de barras de progreso
    setTimeout(() => {
      this.isButtonEnabled = true;
    }, 1000);
  }

  downloadCV(): void {
    // Lógica para descargar CV
    const link = document.createElement('a');
    link.href = 'assets/docs/edwin_valencia_cv.pdf';
    link.download = 'edwin_valencia_cv.pdf';
    link.click();
  }
}
