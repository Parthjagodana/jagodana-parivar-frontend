import { Component } from '@angular/core';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrl: './member-details.component.scss'
})
export class MemberDetailsComponent {
  items = [
    {
      name: 'અજય જગોદણા', //name of main person "ઘરના મોભીનું નામ"
      location: 'પીપળી', //village name "મૂળ વતન"
      age: '૨૫ વર્ષ',
      image: 'IMG.png',
    }
  ];
}
