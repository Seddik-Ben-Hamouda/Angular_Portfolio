import { Component } from '@angular/core';

//custom components
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './sections/home/home.component';
import { AboutComponent } from './sections/about/about.component';
import { SkillsComponent } from './sections/skills/skills.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { EducationComponent } from './sections/education/education.component';
import { ExperienceComponent } from './sections/experience/experience.component';
import { ContactMeComponent } from './sections/contact-me/contact-me.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    EducationComponent,
    ExperienceComponent,
    ContactMeComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my_portfolio';
}
