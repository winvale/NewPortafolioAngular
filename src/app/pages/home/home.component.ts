import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ToolsLanguagesComponent } from '../../components/tools-languages/tools-languages.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, ToolsLanguagesComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'Edwin Valencia - Ingeniero de Sistemas';
  description = 'Experto en soluciones cloud, desarrollo web y transformación digital';
}
