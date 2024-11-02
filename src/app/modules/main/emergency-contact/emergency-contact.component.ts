import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-emergency-contact',
  templateUrl: './emergency-contact.component.html',
  styleUrl: './emergency-contact.component.scss'
})
export class EmergencyContactComponent {

  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }

}
