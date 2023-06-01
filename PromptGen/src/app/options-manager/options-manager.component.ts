import { Component, OnInit } from '@angular/core';
import { OptionsService } from '../shared/services/options.service';
import { OptionsList } from '../shared/interfaces/options-list.interface';
import { FormControl } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-options-manager',
  templateUrl: './options-manager.component.html',
  styleUrls: ['./options-manager.component.css']
})
export class OptionsManagerComponent implements OnInit  {
  public options: OptionsList = this.optionsService.LoadOptions();
  frontControl = new FormControl(['front']);

  constructor(private optionsService: OptionsService) { }

  ngOnInit() {
    console.log('OptionsManagerComponent');
    console.log(this.optionsService.LoadOptions())
    console.log(this.options);
  }

  public removeKeyword (option: string, position: number): void  {
    this.options = this.optionsService.DeleteOption(option, position);
  }

  public add = (event: MatChipInputEvent, position: number): void => {
    const value = (event.value || '').trim();
    console.log(value);
    console.log(this.options.Front);
    // Add our keyword
    if (value) {
      this.options = this.optionsService.AddOption(value, position);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  

}
