import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  standalone: false,

  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css',
})
export class WelcomeComponent {
  formateur: string = 'Mohamed Amine MEZGHICH';
  organisme: string = 'SIP ACADEMY';
  nbreHeures: number = 60;
  stagiaires: string[] = [
    'Rania',
    'Riden',
    'Abbassi',
    'Nabil',
    'Primo',
    'Samah',
    'Imen',
    'Achref',
    'Marwen',
    'Marwa',
  ];
  display() {
    alert('Hello SIP Academy');
    console.log('Hello SIP Academy');
  }
}
