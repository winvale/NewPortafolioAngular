import { Component, OnInit, ViewChild, ElementRef, HostListener, OnDestroy } from '@angular/core';
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
export class ProjectsComponent implements OnInit, OnDestroy {
  @ViewChild('gameCanvas', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;

  // Game properties
  private ctx!: CanvasRenderingContext2D;
  private spaceship = { x: 50, y: 200, width: 30, height: 20 };
  private obstacles: any[] = [];
  score = 0;
  gameRunning = false;
  gamePaused = false;
  private animationId: number = 0;
  private keys: { [key: string]: boolean } = {};

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
    this.initializeGame();
  }

  ngOnDestroy(): void {
    this.stopGame();
  }

  private initializeGame(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d')!;
    this.startGame();
  }

  private startGame(): void {
    this.gameRunning = true;
    this.score = 0;
    this.spaceship.y = 200;
    this.obstacles = [];
    this.updateScore();
    this.gameLoop();
  }

  private stopGame(): void {
    this.gameRunning = false;
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  }

  private gameLoop(): void {
    if (!this.gameRunning || this.gamePaused) return;

    this.update();
    this.draw();
    this.animationId = requestAnimationFrame(() => this.gameLoop());
  }

  private update(): void {
    // Move spaceship
    if (this.keys['ArrowUp'] || this.keys[' '] || this.keys['Space']) {
      this.spaceship.y = Math.max(0, this.spaceship.y - 5);
    }
    if (this.keys['ArrowDown']) {
      this.spaceship.y = Math.min(400 - this.spaceship.height, this.spaceship.y + 5);
    }

    // Generate obstacles
    if (Math.random() < 0.02) {
      this.obstacles.push({
        x: 800,
        y: Math.random() * (400 - 40),
        width: 20,
        height: 40
      });
    }

    // Move obstacles
    this.obstacles.forEach(obstacle => {
      obstacle.x -= 3;
    });

    // Remove off-screen obstacles
    this.obstacles = this.obstacles.filter(obstacle => obstacle.x > -obstacle.width);

    // Check collisions
    this.checkCollisions();

    // Update score
    this.score++;
    this.updateScore();
  }

  private draw(): void {
    const canvas = this.canvas.nativeElement;
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw spaceship
    this.ctx.fillStyle = '#00ff00';
    this.ctx.fillRect(this.spaceship.x, this.spaceship.y, this.spaceship.width, this.spaceship.height);

    // Draw obstacles
    this.ctx.fillStyle = '#ff0000';
    this.obstacles.forEach(obstacle => {
      this.ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
    });
  }

  private checkCollisions(): void {
    for (const obstacle of this.obstacles) {
      if (this.spaceship.x < obstacle.x + obstacle.width &&
          this.spaceship.x + this.spaceship.width > obstacle.x &&
          this.spaceship.y < obstacle.y + obstacle.height &&
          this.spaceship.y + this.spaceship.height > obstacle.y) {
        this.gameOver();
        break;
      }
    }
  }

  private gameOver(): void {
    this.stopGame();
  }

  restartGame(): void {
    this.startGame();
  }

  togglePause(): void {
    this.gamePaused = !this.gamePaused;
    if (!this.gamePaused && this.gameRunning) {
      this.gameLoop();
    }
  }

  private updateScore(): void {
    const scoreElement = document.getElementById('score');
    if (scoreElement) {
      scoreElement.textContent = this.score.toString();
    }
  }

  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    this.keys[event.key] = true;
    if (event.key === ' ' || event.key === 'Space' || event.key === 'ArrowUp' || event.key === 'ArrowDown') {
      event.preventDefault();
    }
  }

  @HostListener('window:keyup', ['$event'])
  onKeyUp(event: KeyboardEvent): void {
    this.keys[event.key] = false;
  }
}
