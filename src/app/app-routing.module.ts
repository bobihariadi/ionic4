import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'compose', loadChildren: './compose/compose.module#ComposePageModule' },
  { path: 'detail', loadChildren: './detail/detail.module#DetailPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'inbox', loadChildren: './inbox/inbox.module#InboxPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'outbox', loadChildren: './outbox/outbox.module#OutboxPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'service', loadChildren: './service/service.module#ServicePageModule' },
  { path: 'user', loadChildren: './user/user.module#UserPageModule' },
  { path: 'psoap', loadChildren: './psoap/psoap.module#PsoapPageModule' },
 // { path: 'geolocation', loadChildren: './geolocation/geolocation.module#GeolocationPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
