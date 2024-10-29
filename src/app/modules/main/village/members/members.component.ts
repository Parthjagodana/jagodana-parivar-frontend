import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { VillageService } from '../../../../shared/services/village.service';
import { Member } from '../../../../shared/models/member.model';
import { ActivatedRoute } from '@angular/router';
import { Village } from '../../../../shared/models/village.model';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrl: './members.component.scss',
})
export class MembersComponent {
  members!: Member[];
  homeTown!: string;
  currentHomeTown!: Village;

  constructor(
    private location: Location,
    private villageService: VillageService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.currentHomeTown = JSON.parse(localStorage.getItem('current_village')!);
    this.homeTown = this.route.snapshot.paramMap.get('id')!;
    if (this.homeTown) {
      this.getMembers(this.homeTown);
    }
  }

  goBack() {
    this.location.back(); // Navigates to the previous page
  }

  getMembers(homeTown: string) {
    this.villageService.memberList({ homeTown }).subscribe((response) => {
      this.members = response.data;
    });
  }

  ngOnDestroy() {
    localStorage.removeItem('current_village');
  }
}
