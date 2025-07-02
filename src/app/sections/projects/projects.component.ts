import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
  projects = [
    {
      title: 'The Legend of the Hidden Gem',
      description: '🏰 A 3D medieval quest game where you join Erika to collect gems 💎, dodge a healing monster 🐉, and beat the clock ⏳ to reach the castle! Explore, survive, and uncover the legend! ⚔️ Built with Unity & C#. 🎮',
      imageUrl: 'https://placehold.co/600x400/8B4513/white?text=3D+Game',
      projectLink: 'https://github.com/Seddik-Ben-Hamouda/Legend-of-the-hidden-gem',
      sourceLink: 'https://github.com/Seddik-Ben-Hamouda/Legend-of-the-hidden-gem'
    },
    {
      title: 'Scorshed Exile',
      description: '🔥🎮 Scorched Exile In this 2D adventure, guide a brave hero through scorching deserts 🏜️ and the fiery depths of hell 🔥. With two intense levels already developed, the journey continues toward cold ❄️ and heaven ☁️—all to inspire and teach kids through play!',
      imageUrl: 'https://placehold.co/600x400/4169E1/white?text=2D+Game',
      projectLink: 'https://github.com/Seddik-Ben-Hamouda/Scorched-Exile',
      sourceLink: 'https://github.com/Seddik-Ben-Hamouda/Scorched-Exile'
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with Angular and Bootstrap. Features smooth animations, contact form, and professional design to showcase skills and projects.',
      imageUrl: 'https://placehold.co/600x400/0d6efd/white?text=Portfolio',
      projectLink: '#',
      sourceLink: '#'
    },
    {
      title: 'E-Commerce App',
      description: 'A mobile e-commerce application developed using Java for core functionality and XML for user interface design and resource management in Android Studio.. Features product catalog, shopping cart, and modern UI design. Front-end only implementation.',
      imageUrl: 'https://placehold.co/600x400/32CD32/white?text=E-Commerce+App',
      projectLink: 'https://drive.google.com/file/d/1x7_LFNLFfH6W_in8zU5nyoDWx-NOs_X4/view?usp=sharing',
      sourceLink: 'https://drive.google.com/file/d/1x7_LFNLFfH6W_in8zU5nyoDWx-NOs_X4/view?usp=sharing'
    }
  ];

  visibleProjects: any[] = [];
  currentIndex = 0;
  projectsToShow = 3;

  ngOnInit() {
    this.updateVisibleProjects();
  }

  updateVisibleProjects() {
    this.visibleProjects = this.projects.slice(this.currentIndex, this.currentIndex + this.projectsToShow);
  }

  next() {
    if (this.currentIndex + this.projectsToShow < this.projects.length) {
      this.currentIndex++;
      this.updateVisibleProjects();
    }
  }

  previous() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateVisibleProjects();
    }
  }
}
