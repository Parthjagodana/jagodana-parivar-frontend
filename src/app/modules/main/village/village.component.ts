import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { VillageService } from '../../../shared/services/village.service';
import { Village } from '../../../shared/models/village.model';
import { SnackBarService } from '../../../shared/services/snack-bar.service';

@Component({
  selector: 'app-village',
  templateUrl: './village.component.html',
  styleUrl: './village.component.scss',
})
export class VillageComponent {
  villages!: Village[];

  constructor(
    private location: Location,
    private villageService: VillageService,
    private snackService: SnackBarService
  ) {}

  ngOnInit(): void {
    this.getVillageList();
  }

  goBack() {
    this.location.back(); // Navigates to the previous page
  }

  selectedVillage(village: Village) {
    localStorage.setItem('current_village', JSON.stringify(village));
  }

  getVillageList() {
    this.villageService.villageList().subscribe((response) => {
      if (response.status !== 'success') {
        this.snackService.openSnackBar(response.message);
      } else {
        this.villages = response.data;
      }
    });
  }
}
