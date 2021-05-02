import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { StartComponent } from './component/start/start.component';
import { PointComponent } from './component/point/point.component';
import { GameComponent } from './component/game/game.component';
import { ResultComponent } from './component/result/result.component';
import { RankingComponent } from './component/ranking/ranking.component';
import { TrashInfoBackComponent} from './component/trash-info-back/trash-info-back.component';
import { TrashInfoHeadComponent} from './component/trash-info-head/trash-info-head.component';
import { TrashInfoPageComponent} from './component/trash-info-page/trash-info-page.component';
import {TrashInfoSlideComponent} from './component/trash-info-slide/trash-info-slide.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StartComponent,
    PointComponent,
    GameComponent,
    ResultComponent,
    RankingComponent,
    TrashInfoBackComponent,
    TrashInfoHeadComponent,
    TrashInfoPageComponent,
    TrashInfoSlideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
