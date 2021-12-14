import { Component, OnInit } from '@angular/core';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  isLogged=false;
  dni='';
  constructor(private tookenService:TokenService) { }

  ngOnInit(): void {
    if(this.tookenService.getToken()){
      this.isLogged=true;
      this.dni=this.tookenService.getUserName();
    }else{
      this.isLogged=false;
      this.dni='';
    }
  }

}
