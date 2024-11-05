import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaComponent } from "./lista/lista.component";
import { DetailComponent } from "./detail/detail.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListaComponent, DetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'familia';
  itemSelected : string = '';

  changeItem(item:string){
    this.itemSelected = item;
    console.log(item);
  }
}
