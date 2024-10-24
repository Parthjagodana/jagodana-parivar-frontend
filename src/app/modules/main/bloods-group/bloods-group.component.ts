import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-bloods-group',
  templateUrl: './bloods-group.component.html',
  styleUrl: './bloods-group.component.scss',
})
export class BloodsGroupComponent {
  bloods = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  constructor(private location: Location) {}

  ngOnInit(): void {}

  goBack() {
    this.location.back();
  }
}
