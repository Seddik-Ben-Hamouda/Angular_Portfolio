import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  experience = [
    {
      role: 'Stagiaire en Développement Web',
      company: 'Vega Système Informatique',
      period: 'Stage',
      description: 'Développement d\'une application web de gestion de matériel avec gestion des incidents et stock. Utilisation des technologies Angular, .NET et SQL Server pour créer une solution complète de gestion d\'entreprise.'
    }
  ];
}
