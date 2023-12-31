import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'first-page', pathMatch: 'full' },
  { path: 'first-page', component: FirstPageComponent},
  { path: 'second-page', component: SecondPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
