import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OptionsManagerComponent } from './options-manager/options-manager.component';
import { GeneratorComponent } from './generator/generator.component';

const routes: Routes = [
  { path: 'manager', component: OptionsManagerComponent },
  { path: 'generator', component: GeneratorComponent },
  { path: '', component: GeneratorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
