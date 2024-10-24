import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-marriage',
  templateUrl: './marriage.component.html',
  styleUrl: './marriage.component.scss',
})
export class MarriageComponent {
  items = [
    {
      name: 'સાવન જગોદણા',
      location: 'Ahmedabad',
      age: '૨૫ વર્ષ',
      image: '',
    },
    {
      name: 'સની જગોદણા',
      location: 'Ahmedabad',
      age: '૨૫ વર્ષ',
      image: '',
    },
    {
      name: 'અજય જગોદણા',
      location: 'Ahmedabad',
      age: '૨૫ વર્ષ',
      image: 'IMG.png',
    },
    {
      name: 'સની જગોદણા',
      location: 'Ahmedabad',
      age: '૨૫ વર્ષ',
      image: 'IMG (1).png',
    },
    {
      name: 'અજય જગોદણા',
      location: 'Ahmedabad',
      age: '૨૫ વર્ષ',
      image: '',
    },
    {
      name: 'સની જગોદણા',
      location: 'Ahmedabad',
      age: '૨૫ વર્ષ',
      image: '',
    },
    {
      name: 'અજય જગોદણા',
      location: 'Ahmedabad',
      age: '૨૫ વર્ષ',
      image: 'IMG.png',
    },
    {
      name: 'સની જગોદણા',
      location: 'Ahmedabad',
      age: '૨૫ વર્ષ',
      image: '',
    },
  ];

  constructor(private location: Location) {}

  ngOnInit(): void {}

  goBack() {
    this.location.back(); // Navigates to the previous page
  }
}
