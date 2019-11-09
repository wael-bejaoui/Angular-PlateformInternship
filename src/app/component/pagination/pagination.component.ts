import { Component, OnInit } from '@angular/core';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { DataService } from '../data.service';
import { Stage } from '../stage.model';

@Component({
  selector: 'app-ngbd-pagination',
  templateUrl: './pagination.component.html'
})
export class NgbdpaginationBasicComponent implements OnInit{
  stages$ :Stage[];
  x:string;
  users$ :User[]; 
  constructor(private _DataService:DataService,private _service:UserService){}
  ngOnInit(){
    this._DataService.getStages().subscribe(data=>this.stages$=data);
    console.log(this.stages$)
  }
  
}