import { Component, OnInit } from '@angular/core';
import { OptionsService } from '../shared/services/options.service';
import { OptionsList } from '../shared/interfaces/options-list.interface';
import { FormControl } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Options } from '../shared/classes/options';

@Component({
  selector: 'app-options-manager',
  templateUrl: './options-manager.component.html',
  styleUrls: ['./options-manager.component.scss']
})
export class OptionsManagerComponent implements OnInit  {
  public options: Options[] = this.optionsService.LoadOptions();
  frontControl = new FormControl(['front']);

  constructor(private optionsService: OptionsService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  public removeKeyword (option: string, position: number): void  {
    this.options = this.optionsService.DeleteOption(option, position);
  }

  public add = (event: MatChipInputEvent, position: number): void => {
    const value = (event.value || '').trim();
    // Add our keyword
    if (value) {
      this.options = this.optionsService.AddOption(value, position);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  public saveAll = () => {
    if(this.optionsService.SaveOptionsList()) {
      this._snackBar.open("The save worked! Wohooo");
    } else {
      this._snackBar.open("Shit, it didnt save. That cant be good");
    }
  }

  

}
