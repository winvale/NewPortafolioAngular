import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitComponent } from './components/git/git.component';
import { HomeComponent } from './components/home/home.component';
import { SocialNetworkComponent } from './components/social-network/social-network.component';
import { LateralMenuComponent } from './components/lateral-menu/lateral-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    GitComponent,
    HomeComponent,
    SocialNetworkComponent,
    LateralMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: []
})
export class AppModule { }
