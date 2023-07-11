import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-teclado-virtual',
  templateUrl: './teclado-virtual.component.html',
  styleUrls: ['./teclado-virtual.component.scss']
})
export class TecladoVirtualComponent implements OnInit {

  @Output() tecla: EventEmitter<any> = new EventEmitter();
  @Input() numerico: boolean;
  @Input() includesPoint: boolean = false;

  blocked = ""


  fila1 = [1,2,3];
  fila2 = [4,5,6];
  fila3 = [7,8,9];
  fila4 = [0];

  constructor() { }

  ngOnInit(): void {
  }

  presionarTecla(i: any): void {
    this.tecla.emit(i);
  }

}
