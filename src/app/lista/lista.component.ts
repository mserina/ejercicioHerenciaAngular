import { NgFor } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [NgFor],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {

  /*Array de cosas */
  cosas =[{name:'silla', precio: '23'}, {name:'mesa', precio: '23'}, {name:'cama', precio: '23'}];

  /*
    * @Output: Decorador que indica que la propiedad itemSelected pueda ser emitir un evento hacia el componente padre 
    * new EventEmitter<tipoValor>(): Se crea una instancia de la clase EventEmitter,
      que se encarga de manejar eventos,
  */
  @Output() itemSelected = new EventEmitter<object>();
  
  onSelect(item:object) {
    this.itemSelected.emit(item);
  }

}
