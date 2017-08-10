import {Component} from '@angular/core';
import {Response} from '@angular/http';
import {DataStorageService} from "../shared/data-storage.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(private dsService: DataStorageService) {
  }

  onSaveData() {
    this.dsService.storeRecipe().subscribe(
      (resp: Response) => {
        console.log(resp);
      }
    );
  }
  onFetchData(){
    this.dsService.getRecipes();
  }
}
