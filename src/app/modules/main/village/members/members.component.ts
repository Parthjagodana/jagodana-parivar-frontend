import { Component } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrl: './members.component.scss'
})
export class MembersComponent {
  items = [
    {
      name: 'અજય જગોદણા', //name of main person "ઘરના મોભીનું નામ"
      location: 'પીપળી', //village name "મૂળ વતન"
      age: '૨૫ વર્ષ',
      image: 'IMG.png',
    },
    {
      name: 'સની જગોદણા',
      location: 'Ahmedabad',
      age: '૨૫ વર્ષ',
      image: 'IMG (1).png',
    }
  ];
}
