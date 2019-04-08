import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Hero} from '../hero.model';
import {HeroService} from '../hero.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalComponent} from '../../modal/modal.component';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  @Output() setHero = new EventEmitter<Hero>();
  @Input() hero: Hero;
  heroes: Hero[];
  p = 1;

  constructor(private heroService: HeroService, private modalService: NgbModal) {
    heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit() {
  }

  open(hero: Hero) {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.title = 'Remover';
    modalRef.componentInstance.message = 'Tem certeza que deseja remover o herói?';
    modalRef.componentInstance.button1 = 'Sim';
    modalRef.componentInstance.button2 = 'Não';
    this.emitSetHero(hero);
  }
  emitSetHero(hero: Hero) {
    this.setHero.emit(hero);
  }

}
