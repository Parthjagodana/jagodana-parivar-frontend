import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodsGroupComponent } from './bloods-group.component';

describe('BloodsGroupComponent', () => {
  let component: BloodsGroupComponent;
  let fixture: ComponentFixture<BloodsGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BloodsGroupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BloodsGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
