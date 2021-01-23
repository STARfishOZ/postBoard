import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {PostBoardModule} from './modules/post-board/post-board.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { PageBoardComponent } from './pages/page-board/page-board.component';
import {MatButtonModule} from '@angular/material/button';
import {AuthorizationService} from './services/authorization.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageBoardComponent,
  ],
  imports: [
    BrowserModule,
    PostBoardModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule
  ],
  providers: [AuthorizationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
