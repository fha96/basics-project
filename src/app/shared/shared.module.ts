import { NgModule } from '@angular/core';
import { AlertComponent } from './alert/alert.component';
import { LoadingSpinner } from './loading-spinner/loading-spinner.component';
import { PlaceHolderDirective } from './palceholder/placeholder.directive';
import { DropDownDirective } from './dropdown.directive';
import { CommonModule } from '@angular/common';

@NgModule({ 
    declarations:  [
        AlertComponent,
        LoadingSpinner,
        PlaceHolderDirective,
        DropDownDirective 
    ],
    imports:[
        CommonModule
    ],
    exports:[
        AlertComponent,
        LoadingSpinner,
        PlaceHolderDirective,
        DropDownDirective,
        CommonModule
    ]
 })
export class SharedModule {}
