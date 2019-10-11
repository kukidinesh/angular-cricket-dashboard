import { Component, OnInit } from '@angular/core';

import { TeamService } from '../../_service/team.service';
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  teams = [];
  
  constructor(
    private teamService: TeamService
  ) { }

  ngOnInit() {
    this.loadData();
  }

  loadData(){
    this.teamService.readAll().subscribe(data=>{
      let temp:any;
      temp = data;

      this.teams = temp;
    })
  }

  


}
