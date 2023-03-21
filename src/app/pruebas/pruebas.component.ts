import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.scss']
})
export class PruebasComponent implements OnInit {

  constructor() { }

  estilosParrafo = {
  };

  ngOnInit(): void {

  }
  clickea(){
  this.reemplazarTexto()
}

  reemplazarTexto() {
    const textoOriginal = document.getElementById('mi-parrafo').innerHTML;
    const nuevoTexto = 'Nuevo texto';
    const nuevosEstilos = {
      'color': 'blue',
      'font-style': 'italic'
    };
    const resultado = textoOriginal.replace('Ejemplo de texto', `<span>${nuevoTexto}</span>`);
    this.estilosParrafo  = nuevosEstilos;
    return resultado;
  }

}
