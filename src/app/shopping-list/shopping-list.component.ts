import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/Models/ingredient.model';
import { ShpinListServices } from '../shared/services/shopingList.services';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit , OnDestroy {
  ingredients: Ingredient[];
  ingredientSubescription: Subscription;
  constructor( private shopingListServer: ShpinListServices ) { }

  ngOnInit(): void {
    this.ingredients = this.shopingListServer.getIngredient();
    this.ingredientSubescription = this.shopingListServer.ingeridientEvent.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  onEditIngridient(index): void{
    this.shopingListServer.startedEditIngridient.next(index);
  }
  ngOnDestroy(): void {
    this.ingredientSubescription.unsubscribe();
  }

}
