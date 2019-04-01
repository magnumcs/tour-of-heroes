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
  }

  addHero(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(() => this.router.navigate(['pesca/lista']));
  }

}
