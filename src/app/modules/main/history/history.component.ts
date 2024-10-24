import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss',
})
export class HistoryComponent {
  constructor(private location: Location) {}

  ngOnInit(): void {}

  goBack() {
    this.location.back(); // Navigates to the previous page
  }
}
