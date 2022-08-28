import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hero } from '../Entidades/Hero';

@Component({
  selector: 'app-dashboard-hero-view',
  templateUrl: './dashboard-hero-view.component.html',
  styleUrls: ['./dashboard-hero-view.component.css']
})
export class DashboardHeroViewComponent implements OnInit {

  @Input() Heroes: ReadonlyArray<Hero> | null = [];
  @Output() add = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

}
