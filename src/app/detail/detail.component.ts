import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
/*
    * @Input: Decorador que indica que la propiedad item pueda recibir valores desde el componente padre 
    
  */
  @Input() item: object = {};

}
