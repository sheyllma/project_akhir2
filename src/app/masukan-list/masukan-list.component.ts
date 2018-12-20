import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { MasukanListService } from '../masukan-list/masukan-list.service';

@Component({
  selector: 'app-masukan-list',
  templateUrl: './masukan-list.component.html',
  styleUrls: ['./masukan-list.component.css']
})
export class MasukanListComponent implements OnInit, OnDestroy {

  ingredients:Ingredient[]
  private subscription: Subscription;
  //=[
    //new Ingredient('Apples',23),
    //new Ingredient('Tomato',10),
  //];

  constructor(private slService:MasukanListService) { }

  ngOnInit() {
    this.ingredients=this.slService.getIngredients();
    this.subscription = this.slService.IngredientsChange
    .subscribe(
      (Ingredient:Ingredient[])=>{
        this.ingredients=Ingredient;
      }
    )
  }

  onEditItem(index: number){
    this.slService.startedEditing.next(index);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  //onIngredientAdded(ingredient:Ingredient)
  //{
  //this.ingredients.push(ingredient);
//}
}
