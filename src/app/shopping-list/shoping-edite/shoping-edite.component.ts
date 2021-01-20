import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Ingredient } from 'src/app/shared/Models/ingredient.model';
import { ShpinListServices } from 'src/app/shared/services/shopingList.services';

@Component({
  selector: 'app-shoping-edite',
  templateUrl: './shoping-edite.component.html',
  styleUrls: ['./shoping-edite.component.css']
})
export class ShopingEditeComponent implements OnInit {

  ingridientForm: FormGroup;
  editMod = false;
  indexIngridient: number;
  editItem: Ingredient;

  constructor(private shpinListServices: ShpinListServices) { }

  ngOnInit(): void {
    this.ingridientForm = new FormGroup({
      name: new FormControl(null , Validators.required),
      amount: new FormControl(null , [Validators.required , Validators.pattern('^[1-9]+[0-9]*$')]),
    });
    this.shpinListServices.startedEditIngridient.subscribe(
      (index: number) => {
        this.indexIngridient = index;
        this.editMod = true;
        this.editItem = this.shpinListServices.getIngridientIndex(index);
        this.ingridientForm.setValue({
          name: this.editItem.name,
          amount: this.editItem.amount
        });
      }
    );
  }
  // tslint:disable-next-line: typedef
  addIngeridient(){
    const name = this.ingridientForm.get('name').value;
    const amount = this.ingridientForm.get('amount').value;
    const ingridient = new Ingredient(name , amount);
    if (this.editMod){
      this.shpinListServices.updateIngridient(this.indexIngridient , ingridient);
    } else {
      this.shpinListServices.addIngredient(name , amount);
    }
    this.editMod = false;
    this.ingridientForm.reset();
  }
  onclear(): void{
    this.editMod = false;
    this.ingridientForm.reset();
  }
  ondelete(): void{
    this.shpinListServices.deleteItem(this.indexIngridient);
    this.onclear();
  }
}
