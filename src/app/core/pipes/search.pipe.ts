import { Pipe, PipeTransform } from '@angular/core';
import { Meal } from '../models/meal.model';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(meals: Meal[], searchKey: string): Meal[] {
    if(!meals || !searchKey){
      return meals;
    }
    return meals.filter(meal =>
      meal.strMeal.toLowerCase().includes(searchKey.toLowerCase())
    );
  }

}
