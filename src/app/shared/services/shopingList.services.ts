import { Subject } from 'rxjs';
import { Ingredient } from '../Models/ingredient.model';

export class ShpinListServices{
    ingeridientEvent = new Subject<Ingredient[]>();
    startedEditIngridient = new Subject<number>();
    private ingredients: Ingredient[] = [
        new Ingredient('ماکارونی' , 1.5),
        new Ingredient('پیاز' , 2),
      ];
      // tslint:disable-next-line: typedef
      getIngredient(){
        return this.ingredients.slice();
      }
      getIngridientIndex(index): Ingredient{
        return this.ingredients[index];
      }
      addIngredient(name: string , amount: number): void{
        this.ingredients.push(new Ingredient(name , amount));
        this.ingeridientEvent.next(this.ingredients);
      }
      addFromRecepieShopingList(ingredients: Ingredient[]): void{
        // for (const ingeridient of ingeridients){
        //   this.ingredients.push(ingeridient);
        // }
        this.ingredients.push(...ingredients);
        this.ingeridientEvent.next(this.ingredients.slice());
      }
      updateIngridient(index: number , newIngridient: Ingredient): void{
        this.ingredients[index] = newIngridient;
        this.ingeridientEvent.next(this.ingredients.slice());
      }
      deleteItem(index): void{
        this.ingredients.splice(index , 1);
        this.ingeridientEvent.next(this.ingredients);
      }
}
