import {Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../Models/ingredient.model';
import { Recepie } from '../Models/recepie.model';
import { ShpinListServices } from './shopingList.services';

@Injectable()
export class RecepieServices{
    recepieEvent = new Subject<Recepie[]>();
    recepies: Recepie[] = [
        new Recepie('ماکارونی',
         'ماکارونی,یک توضیح تست برای پخت ماکارونی قرار میدهیم',
          'https://www.inspiredtaste.net/wp-content/uploads/2019/03/Spaghetti-with-Meat-Sauce-Recipe-1-1200.jpg',
         [new Ingredient('potato', 3)]),
         new Recepie('ماکارونی',
         'ماکارونی,یک توضیح تست برای پخت ماکارونی قرار میدهیم',
          'https://www.inspiredtaste.net/wp-content/uploads/2019/03/Spaghetti-with-Meat-Sauce-Recipe-1-1200.jpg',
         [new Ingredient('tomato' , 4)]),
         new Recepie('ماکارونی',
         'ماکارونی,یک توضیح تست برای پخت ماکارونی قرار میدهیم',
          'https://www.inspiredtaste.net/wp-content/uploads/2019/03/Spaghetti-with-Meat-Sauce-Recipe-1-1200.jpg',
         [new Ingredient('onion' , 2)])
      ];
      constructor( private shpinListServices: ShpinListServices){ }
      // tslint:disable-next-line: typedef
      getRecepie(){
          return this.recepies.slice();
      }
      // tslint:disable-next-line: typedef
      getRecepieDetail(index: number){
        return this.recepies[index];
      }
      addRecepieToShopingList(ingeridient: Ingredient[]): void{
        this.shpinListServices.addFromRecepieShopingList(ingeridient);
      }
      updateRecepie(index: number , newRecepie: Recepie): void{
        this.recepies[index] = newRecepie;
        this.recepieEvent.next(this.recepies.slice());
      }
      addrecepie(newRecepie: Recepie): void{
        this.recepies.push(newRecepie);
        this.recepieEvent.next(this.recepies.slice());
      }
      deleteRecepie(index: number): void{
        this.recepies.splice(index, 1);
        this.recepieEvent.next(this.recepies.slice());
      }
}
