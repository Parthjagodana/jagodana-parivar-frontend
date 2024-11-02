import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {

  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }

}
