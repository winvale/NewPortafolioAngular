import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface WorkExperience {
  id: number;
  company: string;
  position: string;
  period: string;
  proyectos: string;
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
      company: 'MORASURCO SAS',
      position: 'Auxiliar de sistemas y contabilidad',
      period: '2018-2020',
      description: 'Varios oficios contables y sistematicos, Lider de producion de sistemas.',
      proyectos: 'https://www.morasurcocafepuro.com/',
      technologies: ['Angular', '.NET Core', 'SQL Server', 'Azure DevOps']
    },
    {
      id: 2,
      company: 'Startups INVENTAS-APP',
      position: 'Cofundador,Desarrollador, Product Owner ',
      period: '2020-2022',
      description: 'Logica del negocio, Desarrollador, Comunicación continua con el cliente.',
      proyectos: 'https://inventas-app.netlify.app/',
      technologies: ['vue.js', 'Node.Js', 'Firebase', 'Netlify']
    },
    {
      id: 3,
      company: 'SONDA DE COLOMBIA',
      position: 'Full Stack - Bases de datos Oracle',
      period: '2022 - 2023',
      description: 'Desarrollar nuevos requerimientos contables, salud.',
      proyectos: 'No autorarizado para compartir',
      technologies: ['Oracle', '.Net', 'VisualBasic', 'AWS']
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
