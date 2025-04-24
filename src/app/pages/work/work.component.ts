import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface WorkExperience {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string;
  technologies: string[];
}

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
  imports: [CommonModule],
  standalone: true
})
export class WorkComponent implements OnInit {
  workExperience: WorkExperience[] = [
    {
      id: 1,
      company: 'Banco de Bogotá',
      position: 'Desarrollador Full Stack Senior',
      period: '2021 - Presente',
      description: 'Desarrollo y mantenimiento de aplicaciones web empresariales utilizando Angular y .NET Core. Implementación de arquitecturas escalables y optimización de rendimiento.',
      technologies: ['Angular', '.NET Core', 'SQL Server', 'Azure DevOps']
    },
    {
      id: 2,
      company: 'Seguros Bolívar',
      position: 'Desarrollador Full Stack',
      period: '2019 - 2021',
      description: 'Desarrollo de soluciones web para el sector asegurador. Implementación de sistemas de gestión y plataformas de autoservicio.',
      technologies: ['Angular', '.NET Core', 'SQL Server', 'Azure']
    },
    {
      id: 3,
      company: 'Freelance',
      position: 'Desarrollador Web',
      period: '2017 - 2019',
      description: 'Desarrollo de aplicaciones web y sitios corporativos para diversos clientes. Implementación de soluciones personalizadas y consultoría técnica.',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'AWS']
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
