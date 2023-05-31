import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [
    MatCardModule,
    MatDividerModule,
    MatButtonModule
  ],
  exports: [
    MatCardModule,
    MatDividerModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
