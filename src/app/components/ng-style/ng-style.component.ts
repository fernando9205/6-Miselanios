import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]="tamano">
      Hola mundo
    </p>
    <button class="btn btn-primary" (click)="tamano=tamano + 5">
      <li class="fa fa-plus"></li>
    </button>
    <button class="btn btn-primary" (click)="tamano=tamano - 5">
      <li class="fa fa-minus"></li>
  </button>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  tamano = 10;

  constructor() { }

  ngOnInit() {
  }

}
