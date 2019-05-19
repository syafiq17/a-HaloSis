import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TiketComponent } from './tiket/tiket.component';
import { ChatComponent } from './chat/chat.component';
import { TiketDetilComponent } from './tiket-detil/tiket-detil.component';
import { ChatDetilComponent} from './chat-detil/chat-detil.component';


import { NotFoundComponent} from './not-found/not-found.component';


const routes: Routes = [
	{path :'', redirectTo: '/home', pathMatch:'full'},
	{path: 'home', component: HomeComponent},
	{path: 'tiket', component: TiketComponent},
	{path: 'tiket/:nomorTiket', component: TiketDetilComponent},
	{path: 'chat', component: ChatComponent},
	{path: 'chat/:nomorChat', component: ChatDetilComponent},
	{path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [HomeComponent, TiketComponent, ChatComponent, TiketDetilComponent, ChatDetilComponent ,NotFoundComponent]
