import {Ingredient} from '../shared/ingredient';
export class Recipe {
  public name: String;
  public description: String;
  public imagePath: String;
  public ingrediens: Ingredient[];


  constructor(name: String, desc: String, imgP: String, ingr: Ingredient[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = imgP;
    this.ingrediens = ingr;
  }
}
