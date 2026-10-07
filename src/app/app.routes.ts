import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./features/home/home.component').then((c) => c.HomeComponent) },
  { path: 'meals', loadComponent: () => import('./features/meals/meals.component').then((c) => c.MealsComponent) },
  { path: 'meal/:id', loadComponent: () => import('./features/meal-details/meal-details.component').then((c) => c.MealDetailsComponent) },
  { path: 'categories', loadComponent: () => import('./features/categories/categories.component').then((c) => c.CategoriesComponent) },
  { path: 'favorites', loadComponent: () => import('./features/favorites/favorites.component').then((c) => c.FavoritesComponent) },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
