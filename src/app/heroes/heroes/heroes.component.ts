import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Hero} from '../hero.model';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  @Input() hero: Hero;
  heroes: Hero[];
  p = 1;

  constructor(private heroService: HeroService) {
    heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit() {
  }

}
