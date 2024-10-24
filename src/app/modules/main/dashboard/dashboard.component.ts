import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  buttons: any[] = [
    { text: 'પરિવારની ઐતિહાસ', color: '#ffaf7a', route: '/app/history' },
    { text: 'વ્યાપાર વિશેષ', color: '#4cb4e7', route: '/app/business-history' },
    { text: 'લક્ષ વિશેષ', color: '#B877D5', route: '/app/marriage' },
    { text: 'ગામ મુખભ ની માહિતી', color: '#34d2c2', route: '/app/village' },
    { text: 'બ્લડ ગ્રુપ માહિતી', color: '#f25b5b', route: '/app/bloods-group' },
    { text: 'ચોકસાઇ', color: '#ffd54f', route: '' },
    { text: 'કાર્યક્રમ', color: '#43a0f1', route: '' },
    { text: 'આપત્તકાલીન સંપર્ક', color: '#ff6f80', route: '' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
