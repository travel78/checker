import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from "rxjs/Subscription";
import {Recipe} from '../Recipe';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  recipes: Recipe[];

  constructor(private recipeService: RecipeService,
              private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscription = this.recipeService.recipeChanged.subscribe(
      (resList: Recipe[]) => {
        this.recipes = resList;
      }
    );
    this.recipes = this.recipeService.getServices();
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
