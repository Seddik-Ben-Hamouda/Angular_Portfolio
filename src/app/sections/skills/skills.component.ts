import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements OnInit {
  skills = [
    { name: 'HTML5', iconClass: 'devicon-html5-plain colored' },
    { name: 'CSS3', iconClass: 'devicon-css3-plain colored' },
    { name: 'JavaScript', iconClass: 'devicon-javascript-plain colored' },
    { name: 'Angular', iconClass: 'devicon-angularjs-plain colored' },
    { name: 'Bootstrap', iconClass: 'devicon-bootstrap-plain colored' },
    { name: 'C#', iconClass: 'devicon-csharp-plain colored' },
    { name: 'Python', iconClass: 'devicon-python-plain colored' },
    { name: '.NET', iconClass: 'devicon-dotnetcore-plain colored' },
    { name: 'Illustrator', iconClass: 'devicon-illustrator-plain colored' },
    { name: 'Photoshop', iconClass: 'devicon-photoshop-plain colored' }
  ];

  visibleSkills: any[] = [];
  currentIndex = 0;
  skillsToShow = 5;

  ngOnInit() {
    this.updateVisibleSkills();
  }

  updateVisibleSkills() {
    this.visibleSkills = this.skills.slice(this.currentIndex, this.currentIndex + this.skillsToShow);
  }

  next() {
    if (this.currentIndex + this.skillsToShow < this.skills.length) {
      this.currentIndex++;
      this.updateVisibleSkills();
    }
  }

  previous() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateVisibleSkills();
    }
  }
}
