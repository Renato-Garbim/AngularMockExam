import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardHeroViewComponent } from './dashboard-hero-view.component';

describe('DashboardHeroViewComponent', () => {
  let component: DashboardHeroViewComponent;
  let fixture: ComponentFixture<DashboardHeroViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardHeroViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardHeroViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
