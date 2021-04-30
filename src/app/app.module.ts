import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StartComponent } from './components/start/start.component';
import { LoginComponent } from './components/login/login.component';
import { GameComponent } from './components/game/game.component';
import { GametopbarComponent } from './components/gametopbar/gametopbar.component';
import { RubbishBoxComponent } from './components/rubbish-box/rubbish-box.component';
import { PointComponent } from './components/point/point.component';
import { ItemComponent } from './components/item/item.component';
import { GetpointComponent } from './components/getpoint/getpoint.component';
import { LosepointComponent } from './components/losepoint/losepoint.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { ResultComponent } from './components/result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    LoginComponent,
    GameComponent,
    GametopbarComponent,
    RubbishBoxComponent,
    PointComponent,
    ItemComponent,
    GetpointComponent,
    LosepointComponent,
    RankingComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
