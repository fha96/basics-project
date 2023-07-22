import { Component, EventEmitter, ViewContainerRef } from "@angular/core";


@Component({
    selector: 'app-alert-cmp',
    templateUrl:'./alert.component.html'
})
export class AlertComponent {
message: string ;
close =new EventEmitter<void>();


onClose(){
    this.close.emit();
}
}