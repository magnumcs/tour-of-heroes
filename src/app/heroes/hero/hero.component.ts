import {Component, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Hero} from '../hero.model';
import {HeroService} from '../hero.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  @Output() hero: Hero;

  heroForm = new FormGroup({
    name: new FormControl('')
  });

  constructor(private heroService: HeroService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.addHero(this.heroForm.value);
  }

  addHero(hero: any): void {
    this.heroService.addHero(hero)
      .subscribe(() => this.router.navigate(['/heroes']));
  }

}
