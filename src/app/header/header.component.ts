import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataStorageRecipies } from '../shared/data-storage-recipies.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  collapsed: boolean = true ;
  isAuthenticated: boolean = false ;
  constructor(private dataStoreService: DataStorageRecipies, private authService: AuthService){}

  ngOnInit(): void {
    this.authService.user.subscribe(
      user => {
        this.isAuthenticated = !user ? false : true ;
      } 
    )
  }

  onSaveRecipies(){
    this.dataStoreService.createRecipe();
  }

  onFetchRecipies(){
    this.dataStoreService.fetchRecipies().subscribe();
  }

  onSignOut(){
    this.authService.signOut();
  }
}
