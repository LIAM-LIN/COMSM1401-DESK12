import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { StartComponent } from './component/start/start.component';
import {GameComponent} from './component/game/game.component';
import {RankingComponent} from './component/ranking/ranking.component';
import {TrashInfoPageComponent} from './component/trash-info-page/trash-info-page.component';
import {ResultComponent} from './component/result/result.component';
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
    path: '**', redirectTo: 'start'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
