import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { MainComponent } from './main/main.component';
import { PlaygroundComponent } from './playground/playground.component';
import { PreComponent } from './pre/pre.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'playground', component: PlaygroundComponent },
  { path: 'pre', component: PreComponent},
  { path: 'about', component: AboutComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
