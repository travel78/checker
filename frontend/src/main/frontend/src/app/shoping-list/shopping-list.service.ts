import {Ingredient} from '../shared/ingredient';

import {Subject} from 'rxjs/Subject';
export class ShoppingListService {
  ingrChanged = new Subject<Ingredient[]>();
  startedEditting = new Subject<number>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomatoes', 7)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(id: number) {
    return this.ingredients[id];
  }

  addIngredient(ingr: Ingredient) {
    this.ingredients.push(ingr);
    this.ingrChanged.next(this.ingredients.slice());
  }

  addAll(ingr: Ingredient[]) {
    this.ingredients.push(...ingr);
    this.ingrChanged.next(this.ingredients.slice());

  }

  updateIngredient(index: number, ingr: Ingredient) {
    this.ingredients[index] = ingr;
    this.ingrChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingrChanged.next(this.ingredients.slice());
  }
}
