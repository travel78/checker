import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";
import {RecipesComponent} from "./recipes.component";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";
import {RecipeStartComponent} from "./recipe-start/recipe-start.component";
import {RecipeListComponent} from "./recipe-list/recipe-list.component";
import {RecipeItemComponent} from "./recipe-list/recipe-item/recipe-item.component";
import {RecipesRoutingModule} from "./recipes-routing.module";


@NgModule({
  declarations:[
    RecipeEditComponent,
    RecipesComponent,
    RecipeDetailComponent,
    RecipeStartComponent,
    RecipeListComponent,
    RecipeItemComponent,

  ],
  imports:[
    CommonModule,
    ReactiveFormsModule,
    RecipesRoutingModule
  ]

})
export class RecipesModule{}
