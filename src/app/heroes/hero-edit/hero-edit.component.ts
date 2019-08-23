import {Component, Input, OnInit, Output} from '@angular/core';
import {Hero} from '../hero.model';
import {ActivatedRoute, Router} from '@angular/router';
import {HeroService} from '../hero.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-hero-edit',
  templateUrl: './hero-edit.component.html',
  styleUrls: ['./hero-edit.component.css']
})
export class HeroEditComponent implements OnInit {

  @Input() hero: Hero;

  heroForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('')
  });

  constructor(private route: ActivatedRoute, private heroService: HeroService, private router: Router) { }

  ngOnInit() {
    this.getHero();
  }
  onSubmit() {
    this.editHero(this.heroForm.value);
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => {
          this.hero = hero;
          this.heroForm.setValue({
            id: hero.id,
            name: hero.name
          });
        }
      );
  }

  editHero(hero: any): void {
    this.heroService.editHero(hero)
      .subscribe(() => this.router.navigate(['/heroes']));
  }

}
