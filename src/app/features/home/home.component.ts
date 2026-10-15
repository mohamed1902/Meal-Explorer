import { Component } from '@angular/core';
import { MealService } from '../../core/services/meal.service';
import { Meal } from '../../core/models/meal.model';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonModule, CardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private _MealService: MealService) { }

  meals: Meal[] = [];
  ngOnInit() {
    this._MealService.searchMeal('').subscribe({
      next: (res) => {
        this.meals = res.meals; console.log(this.meals);
      }
    });
  }
  scrollToMeals(element: HTMLElement) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
