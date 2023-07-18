import { Component, EventEmitter, Output } from '@angular/core';
import { DataStorageRecipies } from '../shared/data-storage-recipies.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  collapsed: boolean = true ;

  constructor(private dataStoreService: DataStorageRecipies){}

  onSaveRecipies(){
    this.dataStoreService.createRecipe();
  }

  onFetchRecipies(){
    this.dataStoreService.fetchRecipies().subscribe();
  }
}
