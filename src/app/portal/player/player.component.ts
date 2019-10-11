import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { UserService } from '../../_service/user.service';
@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  players = [];
  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {

      this.route.params.subscribe(params => {
        //console.log(params);
        if(Object.entries(params).length === 0){
            this.loadAllPlayers();
        }else{
          this.loadData(params['id']);
        }
      });
   }

  ngOnInit() {
    
  }

  loadData(id){
    this.userService.readAll(id).subscribe(data=>{
      let temp:any;
      temp = data;
      this.players = temp;
    })
  }

  loadAllPlayers(){
    this.userService.getAllPlayers().subscribe(data=>{
      let temp:any;
      temp = data;
      this.players = temp;
    })
  }


}
