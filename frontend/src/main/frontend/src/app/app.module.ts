import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {HeaderComponent} from './header/header.component';
import {AppComponent} from './app.component';
import {ShopingListComponent} from './shoping-list/shoping-list.component';
import {ShopingEditComponent} from './shoping-list/shoping-edit/shoping-edit.component';
import {ShoppingListService} from './shoping-list/shopping-list.service';
import {AppRotingModule} from './app-routing.module';
import {RecipeService} from './recipes/recipe.service';
import {DataStorageService} from "./shared/data-storage.service";
import {SignupComponent} from './auth/signup/signup.component';
import {SigninComponent} from './auth/signin/signin.component';
import {RecipesModule} from "./recipes/recipes.module";
import {DropdownDirective} from "./shared/dropdown.directive";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShopingListComponent,
    ShopingEditComponent,
    DropdownDirective,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRotingModule,
    RecipesModule
  ],
  providers: [ShoppingListService, RecipeService, DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
