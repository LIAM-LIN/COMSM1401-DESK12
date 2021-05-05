import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { StartComponent } from './component/start/start.component';
import {GameComponent} from './component/game/game.component';
import {RankingComponent} from './component/ranking/ranking.component';
import {TrashInfoPageComponent} from './component/trash-info-page/trash-info-page.component';
import {ResultComponent} from './component/result/result.component';
import {BlackBoxComponent} from './component/black-box/black-box.component';
import {BlueBoxComponent} from './component/blue-box/blue-box.component';
import {BrownBoxComponent} from './component/brown-box/brown-box.component';
import {GreenBoxComponent} from './component/green-box/green-box.component';
import {HomeComponent} from './component/home/home.component';
const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'start', component: StartComponent
  },
  {
    path: 'game', component: GameComponent
  },
  {
    path: 'ranking', component: RankingComponent
  },
  {
    path: 'trash-info-page', component: TrashInfoPageComponent
  },
  {
    path: 'result', component: ResultComponent
  },
  {
    path: 'black', component: BlackBoxComponent
  },
  {
    path: 'blue', component: BlueBoxComponent
  },
  {
    path: 'brown', component: BrownBoxComponent
  },
  {
    path: 'green', component: GreenBoxComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: '**', redirectTo: 'login'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
