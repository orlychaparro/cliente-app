import { Component } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',

})
export class DirectivaComponent {

  listaCurso:String[] = ['Typescript','Javascript','Java SE','C#','PHP'];

  habilitar:boolean = true;

  constructor(){ }

  setHAbilitar(): void {
    this.habilitar = !(this.habilitar);
  }

}
