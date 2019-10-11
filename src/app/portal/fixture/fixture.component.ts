import { Component, OnInit } from '@angular/core';

import { FixtureService } from '../../_service/fixture.service';

@Component({
  selector: 'app-fixture',
  templateUrl: './fixture.component.html',
  styleUrls: ['./fixture.component.css']
})
export class FixtureComponent implements OnInit {

  fixtures = [];
  
  constructor(
  	private fixtureService : FixtureService
  ) { }

  ngOnInit() {
  	this.getList();
  }

  getList(){
  	this.fixtureService.readAll().subscribe(data=>{
      let temp:any;
      temp = data;

      this.fixtures = temp;
    })
  }

}
