import { Component } from '@angular/core';

interface WorkExperience {
  company: string;
  position: string;
  period: string;
  technologies: string[];
  responsibilities: string[];
  projects?: string[];
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experiences: WorkExperience[] = [
    {
      company: 'Empresa Ejemplo',
      position: 'Desarrollador Full Stack',
      period: '2022 - Presente',
      technologies: ['Angular', 'Node.js', 'MongoDB'],
      responsibilities: [
        'Desarrollo de aplicaciones web',
        'Implementación de APIs REST',
        'Optimización de performance'
      ]
    }
    // Añadir más experiencias aquí
  ];
}
