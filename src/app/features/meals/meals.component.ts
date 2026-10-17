import { Component } from '@angular/core';
import { MealService } from '../../core/services/meal.service';
import { Meal } from '../../core/models/meal.model';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../../core/pipes/search.pipe';

@Component({
  selector: 'app-meals',
  standalone: true,
  imports: [ButtonModule, CardModule, InputIconModule, IconFieldModule, InputTextModule, FormsModule, SearchPipe],
  templateUrl: './meals.component.html',
  styleUrl: './meals.component.scss'
})
export class MealsComponent {

  constructor(private _MealService: MealService) { }

  meals: Meal[] = [];
  searchKey: string = '';

  ngOnInit() {
    this._MealService.searchMeal('').subscribe({
      next: (res) => {
        this.meals = res.meals; console.log(this.meals);
      }
    });
  }
}
