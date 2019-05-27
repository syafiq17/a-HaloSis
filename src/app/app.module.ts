import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, RoutingComponents} from './app-routing.module';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
// import { HomeComponent } from './home/home.component';
// import { TiketComponent } from './tiket/tiket.component';
// import { ChatComponent } from './chat/chat.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule} from './material/material.module';
// import { NotFoundComponent } from './not-found/not-found.component';
import { TiketService} from "./tiket.service";
import { ChatDetilComponent } from './chat-detil/chat-detil.component';
// import { LoginComponent } from './login/login.component';
// import { TiketDetilComponent } from './tiket-detil/tiket-detil.component';
import { HttpClientModule} from '@angular/common/http' ;
import { AuthService } from './auth.service' ;



@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    ChatDetilComponent,
    // LoginComponent,
    // NotFoundComponent,
    // TiketDetilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule
  ],
  // providers: [TiketService],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
