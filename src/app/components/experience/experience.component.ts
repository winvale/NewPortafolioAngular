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
      company: 'Startups INVENTAS-APP',
      position: 'Cofundador, Desarrollador, Product Owner',
      period: '2023 - Presente',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'AWS', 'Docker'],
      responsibilities: [
        'Liderazgo en el desarrollo de plataforma SaaS para inventarios',
        'Arquitectura y desarrollo de soluciones cloud-native',
        'Gestión de producto y roadmap técnico',
        'Implementación de DevOps y CI/CD pipelines'
      ]
    },
    {
      company: 'Freelance',
      position: 'Desarrollador Full Stack',
      period: '2021 - 2023',
      technologies: ['React', 'Python', 'PostgreSQL', 'Azure'],
      responsibilities: [
        'Desarrollo de aplicaciones web personalizadas',
        'Consultoría en transformación digital',
        'Implementación de soluciones cloud'
      ]
    }
  ];
}
