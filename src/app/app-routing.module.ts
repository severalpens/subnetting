import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { PlaygroundComponent } from './playground/playground.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'playground', component: PlaygroundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
