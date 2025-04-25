// tools-languages.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Technology {
  name: string;
  icon: string;
  color: string;
}

@Component({
  selector: 'app-tools-languages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tools-languages.component.html',
  styleUrls: ['./tools-languages.component.scss']
})
export class ToolsLanguagesComponent implements OnInit {
  technologies: Technology[] = [
    { name: 'Angular', icon: 'fab fa-angular', color: '#dd0031' },
    { name: '.NET Core', icon: 'fas fa-code', color: '#512bd4' },
    { name: '.NET', icon: 'fas fa-window-restore', color: '#512bd4' },
    { name: 'C#', icon: 'fas fa-code', color: '#68217a' },
    { name: 'TypeScript', icon: 'fab fa-js', color: '#007acc' },
    { name: 'Python', icon: 'fab fa-python', color: '#3776ab' },
    { name: 'Node.js', icon: 'fab fa-node-js', color: '#339933' },
    { name: 'SQL Server', icon: 'fas fa-database', color: '#cc2927' },
    { name: 'Oracle SQL', icon: 'fas fa-database', color: '#f80000' },
    { name: 'MongoDB', icon: 'fas fa-leaf', color: '#47a248' },
    { name: 'HTML5', icon: 'fab fa-html5', color: '#e34f26' },
    { name: 'CSS3', icon: 'fab fa-css3-alt', color: '#1572b6' },
    { name: 'Bootstrap', icon: 'fab fa-bootstrap', color: '#7952b3' },
    { name: 'Bulma CSS', icon: 'fab fa-css3', color: '#00d1b2' },
    { name: 'Git', icon: 'fab fa-git-alt', color: '#f05032' },
    { name: 'Github', icon: 'fab fa-github', color: '#181717' },
    { name: 'Azure', icon: 'fab fa-microsoft', color: '#0089d6' },
    { name: 'AWS', icon: 'fab fa-aws', color: '#ff9900' },
    { name: 'Docker', icon: 'fab fa-docker', color: '#2496ed' },
    { name: 'Visual Studio', icon: 'fas fa-code', color: '#5c2d91' },
    { name: 'Visual Studio Code', icon: 'fas fa-code', color: '#007acc' },
    { name: 'Postman', icon: 'fas fa-paper-plane', color: '#ff6c37' },
    { name: 'Firebase', icon: 'fas fa-fire', color: '#ffca28' },
    { name: 'Kubernetes', icon: 'fas fa-dharmachakra', color: '#326ce5' }
  ];
  

  constructor() { }

  ngOnInit(): void {
  }
}