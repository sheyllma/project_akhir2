// import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
export class MasukanListService {
  IngredientsChange = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  
  private ingredients:Ingredient[]=[
    new Ingredient('bangga',23),
    new Ingredient('bagus',10),
  ];
constructor(){}

getIngredients(){
  return this.ingredients.slice();
}

getIngredient(index: number){
  return this.ingredients[index];
}

addIngredient(ingredient:Ingredient){
  this.ingredients.push(ingredient);
  this.IngredientsChange.next(this.ingredients.slice());
}
addIngredients(ingredients:Ingredient[]){
  this.ingredients.push(...ingredients);
  this.IngredientsChange.next(this.ingredients.slice());
}

updateIngredient(index: number, newIngredient: Ingredient){
  this.ingredients[index] = newIngredient;
  this.IngredientsChange.next(this.ingredients.slice());
}

deleteIngredient(index: number){
  this.ingredients.splice(index, 1);
  this.IngredientsChange.next(this.ingredients.slice());
}
}
