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
import { TrashInfoPageComponent} from './component/trash-info-page/trash-info-page.component';
import { BarComponent } from './component/bar/bar.component';
import { BlackBoxComponent } from './component/black-box/black-box.component';
import { BrownBoxComponent } from './component/brown-box/brown-box.component';
import { BlueBoxComponent } from './component/blue-box/blue-box.component';
import { GreenBoxComponent } from './component/green-box/green-box.component';
import { HomeComponent } from './component/home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StartComponent,
    PointComponent,
    GameComponent,
    ResultComponent,
    RankingComponent,
    TrashInfoPageComponent,
    BarComponent,
    BlackBoxComponent,
    BrownBoxComponent,
    BlueBoxComponent,
    GreenBoxComponent,
    HomeComponent,
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
