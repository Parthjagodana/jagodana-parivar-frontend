import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-village',
  templateUrl: './village.component.html',
  styleUrl: './village.component.scss',
})
export class VillageComponent {
  villages = [
    'પીપળી',
    'મોટા ખીજડીયા',
    'માંડવધાર',
    'ઉમિયાનગર',
    'નાના રામપર',
    'માનગઢ',
    'નાની માલવણ',
    'સીધ્ધસર',
    'પીપળી',
    'મોટા ખીજડીયા',
    'માંડવધાર',
    'ઉમિયાનગર',
    'નાના રામપર',
    'માનગઢ',
    'નાની માલવણ',
    'સીધ્ધસર',
  ];

  constructor(private location: Location) {}

  ngOnInit(): void {}

  goBack() {
    this.location.back(); // Navigates to the previous page
  }
}
