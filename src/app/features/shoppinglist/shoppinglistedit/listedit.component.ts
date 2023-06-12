import { Component, ElementRef, EventEmitter, Output, ViewChild } from "@angular/core";
import { ShopListService } from "../shoplistservice.service";





@Component({
    selector:'list-edit',
    templateUrl:'./listedit.component.html',
    styleUrls:[]
})



export class ListEdit {

@ViewChild('amountInput', {static:true}) amount: ElementRef ;

constructor(private shoppingService: ShopListService){}
    addNewItem(eventPointer: PointerEvent,nameInput: HTMLInputElement ){
        eventPointer.preventDefault();
        this.shoppingService.updateList({
            name: nameInput.value,
            amount: this.amount.nativeElement.value
        });         
    }
}