import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  buttons: any[] = [
    { text: 'પરિવારનો ઐતિહાસ', color: '#ffa467', route: '/app/history' },
    { text: 'વ્યાપાર વિશેષજ્ઞ', color: '#6C9DFC', route: '/app/business-history' },
    { text: 'લગ્ન વિશેષજ્ઞ', color: '#B877D5', route: '/app/marriage' },
    { text: 'ગામ મુજબની માહિતી', color: '#0BD3AF', route: '/app/village' },
    { text: 'બ્લડ ગ્રુપ માહિતી', color: '#FF6C6C', route: '/app/bloods-group' },
    { text: 'યોજનાઓ', color: '#f9b700', route: '' },
    { text: 'કાર્યક્રમ', color: '#3EC0FF', route: '' },
    { text: 'આપત્તકાલીન સંપર્ક', color: '#FF6CA2', route: '' },
  ];

  constructor() {}

  ngOnInit(): void {}

  logout() {
    localStorage.clear();
    window.location.reload();
  }
}
