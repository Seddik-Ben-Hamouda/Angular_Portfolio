import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  education = [
    {
      degree: 'License en Informatique Multimédia',
      institution: 'ISAMM - Institut Supérieur des Arts Multimédia de la Manouba',
      period: '2024-2025',
      description: 'Formation complète en informatique multimédia couvrant le développement web, la conception graphique, et les technologies multimédias. Programme axé sur les compétences pratiques et créatives dans le domaine du numérique.'
    },
    {
      degree: 'Baccalauréat',
      institution: 'Lycée Borj Cédria',
      period: '2021-2022',
      description: 'Baccalauréat en sciences informatiques obtenu avec la mention Bien.'
    }
  ];
}
