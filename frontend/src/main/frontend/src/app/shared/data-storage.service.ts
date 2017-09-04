import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {RecipeService} from "../recipes/recipe.service";
import {Recipe} from "../recipes/Recipe";


@Injectable()
export class DataStorageService {
  constructor(private http: Http, private rService: RecipeService) {

  }

  storeRecipe() {
    return this.http.put('/store', this.rService.getServices());
  }

  getRecipes() {
    this.http.get('/recieve')
      .subscribe(
        (resp: Response) => {
          const respData: Recipe[] = resp.json();
          this.rService.setRecipes(respData);
        }
      );
  }

  gettRecipes() {
    this.http.get('/recieve')
      .subscribe(
        (resp: Response) => {
          const respData: String[] = resp.json();
          console.log(respData);
        }
      );
  }
}
