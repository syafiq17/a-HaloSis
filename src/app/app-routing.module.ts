import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TiketComponent } from './tiket/tiket.component';
import { ChatComponent } from './chat/chat.component';
import { TiketDetilComponent } from './tiket-detil/tiket-detil.component';
import { ChatDetilComponent} from './chat-detil/chat-detil.component';
import { LoginComponent} from './login/login.component' ;
import { AuthGuard} from './auth.guard';



import { NotFoundComponent} from './not-found/not-found.component';


const routes: Routes = [
	{path :'', redirectTo: '/login', pathMatch:'full'},
	{path: 'login', component: LoginComponent, },
	{path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
	{path: 'tiket', component: TiketComponent,canActivate: [AuthGuard]},
	{path: 'tiket/:nomorTiket', component: TiketDetilComponent,canActivate: [AuthGuard]},
	{path: 'chat', component: ChatComponent, canActivate:[AuthGuard]},
	{path: 'chat/:nomorChat', component: ChatDetilComponent, canActivate: [AuthGuard]},
	{path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [LoginComponent,HomeComponent, TiketComponent, ChatComponent, TiketDetilComponent, ChatDetilComponent ,NotFoundComponent]
export const RoutingProvider = [AuthGuard]