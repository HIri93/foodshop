import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecepieDetaileComponent } from './recepie/recepie-detaile/recepie-detaile.component';
import { RecepieEditComponent } from './recepie/recepie-edit/recepie-edit.component';
import { RecepieComponent } from './recepie/recepie.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const appRouts: Routes = [
    {path: '', redirectTo: '/recepies', pathMatch: 'full'},
    {path: 'recepies', component: RecepieComponent , children: [
        {path: 'new' , component: RecepieEditComponent},
        {path: ':id' , component: RecepieDetaileComponent},
        {path: ':id/edit' , component: RecepieEditComponent},
    ]},
    {path: 'shopping-lists', component: ShoppingListComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(appRouts)],
    exports: [RouterModule]
})

export class RoutingModule {

}
