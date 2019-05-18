import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TiketComponent } from './tiket/tiket.component';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
	{path: 'home', component: HomeComponent},
	{path: 'tiket', component: TiketComponent},
	{path: 'chat', component: ChatComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [HomeComponent, TiketComponent, ChatComponent]
