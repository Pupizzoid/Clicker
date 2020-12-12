import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { GameComponent } from './components/game/game.component';
import { TableResultsComponent } from './components/table-results/table-results.component';

const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  { path: 'game', component: GameComponent },
  {path: 'results', component: TableResultsComponent},
  {path: '**', component: RegisterComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
