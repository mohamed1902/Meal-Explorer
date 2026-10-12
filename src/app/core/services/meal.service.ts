import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from './baseUrl';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  private _http = inject(HttpClient);

  searchMeal(name: string): Observable<any> {
    return this._http.get(`${baseUrl}/search.php?s=${name}`);
  }

  getMealById(id: string): Observable<any>{
    return this._http.get(`${baseUrl}/lookup.php?i=${id}`);
  }

}
