import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-function',
  templateUrl: './function.component.html',
  styleUrl: './function.component.scss'
})
export class FunctionComponent {

  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }

}
