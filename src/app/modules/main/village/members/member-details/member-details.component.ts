import { Component } from '@angular/core';
import { VillageService } from '../../../../../shared/services/village.service';
import { Member } from '../../../../../shared/models/member.model';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrl: './member-details.component.scss',
})
export class MemberDetailsComponent {
  member!: Member;
  items = [
    {
      name: 'અજય જગોદણા', //name of main person "ઘરના મોભીનું નામ"
      location: 'પીપળી', //village name "મૂળ વતન"
      age: '૨૫ વર્ષ',
      image: 'IMG.png',
    },
  ];

  constructor(
    private villageService: VillageService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    const memberId = this.route.snapshot.paramMap.get('memberId');
    console.log('memberId: ' + memberId);

    if (memberId) {
      this.getMemberDetails(memberId);
    }
  }

  goBack() {
    this.location.back(); // Navigates to the previous page
  }

  getMemberDetails(memberId: string) {
    this.villageService.memberInfo({ memberId }).subscribe((response) => {
      this.member = response.data;
    });
  }
}
