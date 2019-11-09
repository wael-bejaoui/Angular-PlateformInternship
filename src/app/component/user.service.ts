import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse} from '@angular/common/http';
import { User } from './user.model';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _apiUrl:string='http://localhost:3000/api/users';
  constructor(private http:HttpClient) { }
  getUsers()
  {
    return this.http.get<any[]>(this._apiUrl);

  }
  addUser(user:User)
  {
    return this.http.post<any>(this._apiUrl,user)
    .pipe(catchError(this.errorHandler))
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error)
  }
}
