import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StartComponent } from './components/start/start.component';
import { LoginComponent } from './components/login/login.component';
import { GametopbarComponent } from './components/gametopbar/gametopbar.component';
import { RubbishBoxComponent } from './components/rubbish-box/rubbish-box.component';
import { PointComponent } from './components/point/point.component';
import { ItemComponent } from './components/item/item.component';
import { GetpointComponent } from './components/getpoint/getpoint.component';
import { LosepointComponent } from './components/losepoint/losepoint.component';
import { TrashInfoBackComponent} from './components/trash-info-back/trash-info-back.component';
import { TrashInfoHeadComponent} from './components/trash-info-head/trash-info-head.component';
import { TrashInfoPageComponent} from './components/trash-info-page/trash-info-page.component';
import {TrashInfoSlideComponent} from './components/trash-info-slide/trash-info-slide.component';
import {ResultComponent} from './components/result/result.component';
import {RankingComponent} from './components/ranking/ranking.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    LoginComponent,
    GametopbarComponent,
    RubbishBoxComponent,
    PointComponent,
    ItemComponent,
    GetpointComponent,
    LosepointComponent,
    TrashInfoBackComponent,
    TrashInfoHeadComponent,
    TrashInfoPageComponent,
    TrashInfoSlideComponent,
      ResultComponent,
      RankingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
