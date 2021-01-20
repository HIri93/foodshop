import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RecepieServices } from 'src/app/shared/services/recepie.services';
import { Recepie } from '../../shared/Models/recepie.model';

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css']
})
export class RecepieListComponent implements OnInit , OnDestroy{
  recepies: Recepie[];
  subscription: Subscription;
  constructor(private recepieServices: RecepieServices,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscription = this.recepieServices.recepieEvent.subscribe(
      (recepies: Recepie[]) => {
        this.recepies = recepies;
      }
    );
    this.recepies = this.recepieServices.getRecepie();
  }
  onNewRecepie(): void{
    this.router.navigate(['new'] , {relativeTo: this.route});
  }
  ngOnDestroy(): void{
    this.subscription.unsubscribe();
  }
}
