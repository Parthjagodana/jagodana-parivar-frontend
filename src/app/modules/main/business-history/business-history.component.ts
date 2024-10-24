import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-business-history',
  templateUrl: './business-history.component.html',
  styleUrl: './business-history.component.scss',
})
export class BusinessHistoryComponent {
  businesses = [
    {
      name: 'બહુચર ટુ વ્હીલર ગેરેજ',
      description: 'Friendly, Honest Service.',
      location: 'અમદાવાદ',
      category: 'Two Wheeler Garage',
      image: 'IMG.png',
    },
    {
      name: 'DesignGola',
      description:
        'DesignGola is a leading Digital Media Agency in Ahmedabad and Vadodara.',
      location: 'Ahmedabad',
      category: 'IT Company',
      image: 'IMG (1).png',
    },
    {
      name: 'બહુચર ટુ વ્હીલર ગેરેજ',
      description: 'Friendly, Honest Service.',
      location: 'Ahmedabad',
      category: 'Two Wheeler Garage',
      image: 'IMG.png',
    },
    {
      name: 'DesignGola',
      description:
        'DesignGola is a leading Digital Media Agency in Ahmedabad and Vadodara.',
      location: 'Ahmedabad',
      category: 'IT Company',
      image: 'IMG (1).png',
    },
  ];

  constructor(private location: Location) {}

  ngOnInit(): void {}

  goBack() {
    this.location.back(); // Navigates to the previous page
  }
}
