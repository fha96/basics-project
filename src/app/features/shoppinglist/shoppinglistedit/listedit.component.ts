import { Component, ElementRef, EventEmitter, Output, ViewChild } from "@angular/core";





@Component({
    selector:'list-edit',
    templateUrl:'./listedit.component.html',
    styleUrls:[]
})



export class ListEdit {

@Output() addedItem = new EventEmitter<{name: string, amount: number}>();
@ViewChild('amountInput', {static:true}) amount: ElementRef ;

    addNewItem(eventPointer: PointerEvent,nameInput: HTMLInputElement ){
        eventPointer.preventDefault();
        this.addedItem.emit({
            name:nameInput.value,
            amount: this.amount.nativeElement.value
        }); 
    }
}