import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, RoutingComponents} from './app-routing.module';

import { AppComponent } from './app.component';
// import { HomeComponent } from './home/home.component';
// import { TiketComponent } from './tiket/tiket.component';
// import { ChatComponent } from './chat/chat.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule} from './material/material.module';
// import { NotFoundComponent } from './not-found/not-found.component';
import { TiketService} from "./tiket.service";
import { ChatDetilComponent } from './chat-detil/chat-detil.component';
// import { TiketDetilComponent } from './tiket-detil/tiket-detil.component';





@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    ChatDetilComponent,
    // NotFoundComponent,
    // TiketDetilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  // providers: [TiketService],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
