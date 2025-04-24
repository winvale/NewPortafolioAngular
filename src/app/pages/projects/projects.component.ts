import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  url: string;
  github: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  imports: [CommonModule],
  standalone: true
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      id: 1,
      title: 'Mora Surco Café',
      description: 'Plataforma de comercio electrónico para la venta de café colombiano. Incluye catálogo de productos, carrito de compras y pasarela de pagos.',
      image: 'https://i.postimg.cc/vmsHMDbB/FrontEnd.webp',
      technologies: ['Angular', '.NET Core', 'SQL Server'],
      url: 'https://www.morasurcocafepuro.com/',
      github: 'https://github.com/winvale/morasurco-cafe'
    },
    {
      id: 2,
      title: 'Sistema de Inventario',
      description: 'Aplicación web para la gestión de inventarios con módulos de productos, proveedores y reportes.',
      image: 'https://i.postimg.cc/rsnKwTgH/BackEnd.webp',
      technologies: ['Angular', 'Node.js', 'MongoDB'],
      url: 'https://inventas-app.netlify.app/',
      github: 'https://github.com/winvale/inventas-app'
    },
    {
      id: 3,
      title: 'Portafolio Personal',
      description: 'Sitio web personal desarrollado con Angular, implementando las mejores prácticas de desarrollo y diseño responsivo.',
      image: 'https://i.postimg.cc/vmsHMDbB/FrontEnd.webp',
      technologies: ['Angular', 'TypeScript', 'SCSS'],
      url: 'https://edwin-valencia.web.app/',
      github: 'https://github.com/winvale/portfolio'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
