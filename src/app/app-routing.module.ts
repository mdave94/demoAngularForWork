import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'tictactoe',component:TicTacToeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
