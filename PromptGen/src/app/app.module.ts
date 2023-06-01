import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ClipboardModule} from '@angular/cdk/clipboard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OptionsManagerComponent } from './options-manager/options-manager.component';
import { GeneratorComponent } from './generator/generator.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OptionsService } from './shared/services/options.service';
import { ResultsService } from './shared/services/results.service';
import { HttpClientModule } from '@angular/common/http';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { SavedPromptsComponent } from './saved-prompts/saved-prompts.component';
import { SavedService } from './shared/services/saved.service';


@NgModule({
  declarations: [
    AppComponent,
    OptionsManagerComponent,
    GeneratorComponent,
    SavedPromptsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    ClipboardModule
  ],
  providers: [OptionsService, ResultsService, SavedService, {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}}],
  exports: [MaterialModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
