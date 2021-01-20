import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecepieServices } from 'src/app/shared/services/recepie.services';

@Component({
  selector: 'app-recepie-edit',
  templateUrl: './recepie-edit.component.html',
  styleUrls: ['./recepie-edit.component.css']
})
export class RecepieEditComponent implements OnInit {
  id: number;
  editMod: boolean;
  editForm: FormGroup;
  constructor(private routs: ActivatedRoute , private recepieService: RecepieServices , private ruoter: Router) { }

  ngOnInit(): void {
    this.routs.params.subscribe(
      (params: Params) => {
        // tslint:disable-next-line: no-string-literal
        this.id = +params['id'];
        // tslint:disable-next-line: no-string-literal
        this.editMod = params['id'] != null;
        // console.log(this.editMod);
      }
    );
    this.initForm();
  }
  private initForm(): void{
    let recepieName = '';
    let recepieImagPath = '';
    let recepieDiscription = '';
    const recepieIngridients = new FormArray([]);
    if (this.editMod){
      const recepie = this.recepieService.getRecepieDetail(this.id);
      recepieName = recepie.name;
      recepieImagPath = recepie.imagePath;
      recepieDiscription = recepie.description;
      // tslint:disable-next-line: no-string-literal
      if (recepie['ingeridient']){
        // tslint:disable-next-line: no-string-literal
        for (const ingrid of recepie['ingeridient']){
          recepieIngridients.push(
            new FormGroup({
              name: new FormControl(ingrid.name , Validators.required),
              amount: new FormControl(ingrid.amount , [ Validators.required , Validators.pattern('^[1-9]+[0-9]*$')]),
            })
          );
        }
      }
    }
    this.editForm = new FormGroup({
      name: new FormControl(recepieName , Validators.required),
      imagePath: new FormControl(recepieImagPath , Validators.required),
      description: new FormControl(recepieDiscription , Validators.required),
      ingridients: recepieIngridients
    });
    console.log(this.editForm);
  }
  onsubmit(): void{
    if (this.editMod){
      this.recepieService.updateRecepie(this.id , this.editForm.value);
    }else {
      this.recepieService.addrecepie(this.editForm.value);
    }
    this.onCancil();
  }
  addIngridient(): void{
    (this.editForm.get('ingridients') as FormArray).push(
      new FormGroup({
        name: new FormControl(null ,  Validators.required),
        amount: new FormControl(null , [ Validators.required , Validators.pattern('^[1-9]+[0-9]*$')]),
      })
    );
  }
  onCancil(): void {
    this.ruoter.navigate(['/recepies']);
  }
  onDeleteIngridient(index: number): void{
    (this.editForm.get('ingridients') as FormArray).removeAt(index);
  }
}
