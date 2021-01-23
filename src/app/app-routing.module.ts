import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from './guards/authorization.guard';
import {LoginComponent} from './pages/login/login.component';
import {PageBoardComponent} from './pages/page-board/page-board.component';


const routes: Routes = [
  {
    path: 'post-board',
    component: PageBoardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  { path: '', redirectTo: '/post-board', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    AuthGuard
  ]
})
export class AppRoutingModule { }
