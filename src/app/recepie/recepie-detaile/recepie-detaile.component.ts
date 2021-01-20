import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recepie } from 'src/app/shared/Models/recepie.model';
import { RecepieServices } from 'src/app/shared/services/recepie.services';

@Component({
  selector: 'app-recepie-detaile',
  templateUrl: './recepie-detaile.component.html',
  styleUrls: ['./recepie-detaile.component.css']
})
export class RecepieDetaileComponent implements OnInit {
  recepieCrt: Recepie;
  id: number;
  constructor( private recepieServices: RecepieServices,
               private rout: ActivatedRoute,
               private router: Router,
               private ruoter: Router) { }

  ngOnInit(): void {
    this.rout.params.subscribe(
      (params: Params) => {
        // tslint:disable-next-line: no-string-literal
        this.id = +params['id'];
        this.recepieCrt = this.recepieServices.getRecepieDetail(this.id);
      }
    );
  }
  addToShopingList(): void{
    this.recepieServices.addRecepieToShopingList(this.recepieCrt.ingeridient);
  }
  onEditeRecepie(): void{
    this.router.navigate(['edit'] , {relativeTo: this.rout});
  }
  onCancil(): void {
    this.recepieServices.deleteRecepie(this.id);
    this.router.navigate(['/recepies']);
  }
}
