import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MealService } from '../../core/services/meal.service';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-meal-details',
  standalone: true,
  imports: [CommonModule, ButtonModule, TagModule, RouterLink],
  templateUrl: './meal-details.component.html',
  styleUrl: './meal-details.component.scss'
})
export class MealDetailsComponent {
  
  id: string = '';
  meal: any = null;
  ingredients: any[] = [];

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _mealService: MealService
  ) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((params) => {
      this.id = params.get('id') ?? '';
      if (this.id) {
        this.displayDetails();
      }
    });
  }

  displayDetails(): void {
    this._mealService.getMealById(this.id).subscribe((res: any) => {
      this.meal = res.meals[0];
      this.extractIngredients();
    });
  }

  extractIngredients(): void {
    this.ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const name = this.meal[`strIngredient${i}`];
      const measure = this.meal[`strMeasure${i}`];

      if (name && name.trim()) {
        this.ingredients.push({ name, measure });
      }
    }
  }
}
