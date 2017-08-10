import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {RecipeService} from '../recipe.service';


@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute, private rService: RecipeService, private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    )
  }

  onSubmit() {
    // const newRecipe = new Recipe(
    //   this.recipeForm.value['name'],
    //   this.recipeForm.value['description'],
    //   this.recipeForm.value['imagePath'],
    //   this.recipeForm.value['ingrediens']
    // );
    if (this.editMode) {
      this.rService.upDateRecipe(this.id, this.recipeForm.value);
    } else {
      this.rService.addRecipe(this.recipeForm.value);
    }
    this.onCancel();
  }
  onDeleteIngredient(index:number){
    (<FormArray>this.recipeForm.get('ingrediens')).removeAt(index);
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingrediens')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    )
  }

  onCancel() {

    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let recipeName: String = '';
    let recipeImagePath: String = '';
    let recipeDescriptiom: String = '';
    let recipeIngrediens = new FormArray([]);
    if (this.editMode) {
      const recipe = this.rService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescriptiom = recipe.description;
      if (recipe['ingrediens']) {
        for (let ingr of recipe.ingrediens) {
          recipeIngrediens.push(new FormGroup({
            'name': new FormControl(ingr.name, Validators.required),
            'amount': new FormControl(ingr.amount, [
              Validators.required,
              Validators.pattern(/^[1-9]+[0-9]*$/)
            ])
          }));
        }
      }
    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeImagePath, Validators.required),
      'description': new FormControl(recipeDescriptiom, Validators.required),
      'ingrediens': recipeIngrediens
    });
  }

}
