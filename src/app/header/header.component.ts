import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  collapsed: boolean = true ;

  @Output() navigate =  new EventEmitter<{showR:boolean, showL:boolean}>();

  showShoppingList(){
    this.navigate.emit({showL: true,showR:false});
  }
  showRecipes(){
    this.navigate.emit({showL:false, showR: true});
  }
}
