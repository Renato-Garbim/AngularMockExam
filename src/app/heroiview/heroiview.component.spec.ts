import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroiviewComponent } from './heroiview.component';

describe('HeroiviewComponent', () => {
  let component: HeroiviewComponent;
  let fixture: ComponentFixture<HeroiviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroiviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroiviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
