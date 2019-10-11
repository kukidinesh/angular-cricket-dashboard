import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortalComponent } from './_layout/portal/portal.component';
import { HomeComponent } from './portal/home/home.component';
import { PlayerComponent } from './portal/player/player.component';
import { TeamComponent } from './portal/team/team.component';
import { FixtureComponent } from './portal/fixture/fixture.component';


const routes: Routes = [
  {
    path: "",
    component: PortalComponent,
    children: [
      {
        path: "",
        component: HomeComponent
      },
      {
        path: "players",
        component: PlayerComponent
      },
      {
        path: "player/:id",
        component: PlayerComponent
      },
      {
        path: "team",
        component: TeamComponent
      },
      {
        path: "fixtures",
        component: FixtureComponent
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true, onSameUrlNavigation: 'reload' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
