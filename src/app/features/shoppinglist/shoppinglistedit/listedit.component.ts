import {
  Component,
  ElementRef,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { ShopListService } from '../shoplistservice.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'list-edit',
  templateUrl: './listedit.component.html',
  styleUrls: ['./listedit.component.css'],
})
export class ListEdit implements OnInit, OnDestroy {
  //   @ViewChild('amountInput', { static: true }) amount: ElementRef;
  editMode: boolean = false;
  subscription: Subscription;
  editedItemIndex: number;
  editedItem: Ingredient;
  @ViewChild('shoplist') shopListForm: NgForm;
  constructor(private shoppingService: ShopListService) {}

  ngOnInit(): void {
    this.subscription = this.shoppingService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppingService.getItemById(index);
        this.shopListForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
        });
      }
    );
  }
  //   addNewItem(eventPointer: PointerEvent, nameInput: HTMLInputElement) {
  //     eventPointer.preventDefault();
  //     this.shoppingService.updateList({
  //       name: nameInput.value,
  //       amount: this.amount.nativeElement.value,
  //     });
  //   }
  onSubmit() {
    console.log(this.shopListForm);

    if (!this.editMode) {
      this.shoppingService.updateList({
        name: this.shopListForm.value['name'],
        amount: this.shopListForm.value['amount'],
      });
    } else {
        this.editMode = false ;
      this.shoppingService.updateItem(
        this.shopListForm.value,
        this.editedItemIndex
      );
    }

    this.shopListForm.reset();
  }

  onClear() {
    this.shopListForm.reset();
    this.editMode = false ;
  }
  onDelete(){
      this.shoppingService.deleteItem(this.editedItemIndex);
      this.editMode = false ;
      this.onClear();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
