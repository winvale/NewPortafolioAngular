import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToolsLanguagesComponent } from '../../components/tools-languages/tools-languages.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [CommonModule, ToolsLanguagesComponent],
  standalone: true
})
export class HomeComponent implements OnInit {
  
  constructor(private router: Router) { }

  ngOnInit(): void {
    // Inicializar animaciones si es necesario
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
