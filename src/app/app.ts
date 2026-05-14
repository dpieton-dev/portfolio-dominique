import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { TechStack } from './components/tech-stack/tech-stack';
import { Projects } from './components/projects/projects';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, About, TechStack, Projects, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
