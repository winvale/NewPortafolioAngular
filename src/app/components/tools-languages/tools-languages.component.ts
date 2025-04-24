import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Technology {
  name: string;
  icon: string;
  color: string;
}

@Component({
  selector: 'app-tools-languages',
  templateUrl: './tools-languages.component.html',
  styleUrls: ['./tools-languages.component.scss'],
  imports: [CommonModule],
  standalone: true
})
export class ToolsLanguagesComponent implements OnInit {
  technologies: Technology[] = [
    { name: 'Angular', icon: 'fab fa-angular', color: '#dd0031' },
    { name: '.NET Core', icon: 'fas fa-code', color: '#512bd4' },
    { name: 'TypeScript', icon: 'fab fa-js', color: '#007acc' },
    { name: 'Node.js', icon: 'fab fa-node-js', color: '#339933' },
    { name: 'SQL Server', icon: 'fas fa-database', color: '#cc2927' },
    { name: 'MongoDB', icon: 'fas fa-leaf', color: '#47a248' },
    { name: 'HTML5', icon: 'fab fa-html5', color: '#e34f26' },
    { name: 'CSS3', icon: 'fab fa-css3-alt', color: '#1572b6' },
    { name: 'Git', icon: 'fab fa-git-alt', color: '#f05032' },
    { name: 'Azure', icon: 'fab fa-microsoft', color: '#0089d6' },
    { name: 'AWS', icon: 'fab fa-aws', color: '#ff9900' },
    { name: 'Docker', icon: 'fab fa-docker', color: '#2496ed' }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
