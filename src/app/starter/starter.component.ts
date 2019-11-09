import { Component, OnInit } from '@angular/core';
import { Stage } from '../stage.model';
import { DataService } from '../data.service';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { UserService } from '../component/user.service';
import { User } from '../component/user.model';

@Component({
  selector: 'app-starter',
  templateUrl: './starter.component.html'
})
export class StarterComponent implements OnInit {
  stages$ :Stage[];
  users : any[];
  constructor(private _DataService:DataService, private _User: UserService){}
  ngOnInit(){
    this._DataService.getStages().subscribe(data=>this.stages$=data);
    this._User.getUsers().subscribe((data)=>{this.users=data ;console.log(this.users);});
    
  }
}
