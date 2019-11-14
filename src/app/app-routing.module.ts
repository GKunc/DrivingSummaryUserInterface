import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SummaryCreatorComponent } from './summary-creator/summary-creator.component';

const routes: Routes = [
  { path: '', component: SummaryCreatorComponent },
  { path: 'summary-creator', component: SummaryCreatorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
