import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Stage } from './stage.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _apiUrl:string='http://localhost:3000/api/stages';
  constructor(private http:HttpClient) { }
  getStages()
  {
    return this.http.get<Stage[]>(this._apiUrl);
  }
}
