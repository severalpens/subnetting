import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FlsmComponent } from './flsm/flsm.component';
import { MainComponent } from './main/main.component';
import { PlaygroundComponent } from './playground/playground.component';
import { PreComponent } from './pre/pre.component';
import { VlsmComponent } from './vlsm/vlsm.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'playground', component: PlaygroundComponent },
  { path: 'pre', component: PreComponent},
  { path: 'about', component: AboutComponent},
  { path: 'flsm', component: FlsmComponent},
  { path: 'vlsm', component: VlsmComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
