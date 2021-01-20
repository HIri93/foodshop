import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoutingModule } from './app-routing.module';
// import { CommonModule } from '@angular/common';
import { RecepieServices } from './shared/services/recepie.services';
import { ShpinListServices } from './shared/services/shopingList.services';
// zzzzzzzzzzzzzzz
import { DropDownDirective } from './shared/Directives/drop-down.directive';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecepieComponent } from './recepie/recepie.component';
import { RecepieListComponent } from './recepie/recepie-list/recepie-list.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecepieDetaileComponent } from './recepie/recepie-detaile/recepie-detaile.component';
import { RecepieItemComponent } from './recepie/recepie-list/recepie-item/recepie-item.component';
import { ShopingEditeComponent } from './shopping-list/shoping-edite/shoping-edite.component';
import { RecepieEditComponent } from './recepie/recepie-edit/recepie-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecepieComponent,
    RecepieListComponent,
    RecepieDetaileComponent,
    RecepieItemComponent,
    ShoppingListComponent,
    ShopingEditeComponent,
    DropDownDirective,
    RecepieEditComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // CommonModule
  ],
  providers: [ShpinListServices , RecepieServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
