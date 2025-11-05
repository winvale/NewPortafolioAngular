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
  showModal = false;
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
    { name: 'SQL', level: 75 },
    {name: 'Java', level: 90}
  ];

  constructor() { }

  ngOnInit(): void {
    // Inicializar animaciones de barras de progreso
    setTimeout(() => {
      this.isButtonEnabled = true;
    }, 1000);
  }

  showContactModal(): void {
    this.showModal = true;
    // Animación de entrada
    setTimeout(() => {
      const modal = document.querySelector('.modal-card');
      if (modal) {
        modal.classList.add('animate__animated', 'animate__zoomIn');
      }
    }, 100);
  }

  closeModal(): void {
    // Animación de salida
    const modal = document.querySelector('.modal-card');
    if (modal) {
      modal.classList.remove('animate__zoomIn');
      modal.classList.add('animate__zoomOut');
      setTimeout(() => {
        this.showModal = false;
      }, 300);
    } else {
      this.showModal = false;
    }
  }
}
