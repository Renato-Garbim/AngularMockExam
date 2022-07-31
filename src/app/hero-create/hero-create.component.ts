import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HeroFormService } from '../services/hero-form-service.service';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-hero-create',
  templateUrl: './hero-create.component.html',
  styleUrls: ['./hero-create.component.css']
})
export class HeroCreateComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    public heroFormService: HeroFormService,
    private heroService: HeroService,
    private location: Location) { }

  ngOnInit() {
    this.formReset();
  }

  goBack(): void {
    this.location.back();
  }

  formReset(form?: NgForm) {

    if (form != null) {
      form.resetForm();
    }

    this.heroFormService.formData = {
      Id: 0,
      Name: '',
      Power: '',
      Sidekick: '',
      Idade: 0,
      TipoSanguineo: ''
    };
  }

  onSubmit(form: NgForm) {
    this.insertRecord(form);
  }

  insertRecord(form: NgForm) {
    this.heroService.addHero(form.value).subscribe(resp => {
      this.formReset(form);
    });
  }


}
