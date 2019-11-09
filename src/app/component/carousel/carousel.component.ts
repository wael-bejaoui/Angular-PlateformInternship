import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'
@Component({
  selector: 'app-ngbd-buttons-radio',
  templateUrl: './carousel.component.html',
  providers: [NgbCarouselConfig]
})

export class NgbdCarouselBasicComponent {
  
  user =new User(); 
  errorMsg = 'faute grave 3ale5er wael $$ !!! bara or9od 5ir !!';
  constructor(private _DataService:UserService, private _router: Router){}

  onSubmit(userform: NgForm){
    this._router.navigate(['/component/pagination']),
    this._DataService.addUser(this.user).subscribe(
      response => console.log('Success!', response),
      error => this.errorMsg = error.statusText
    )
   
  }
  public specialite=this.user.specialite;
}
