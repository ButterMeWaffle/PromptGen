import { Component, OnInit } from '@angular/core';
import { OptionsService } from '../shared/services/options.service';
import { OptionsList } from '../shared/interfaces/options-list-type';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-options-manager',
  templateUrl: './options-manager.component.html',
  styleUrls: ['./options-manager.component.css']
})
export class OptionsManagerComponent implements OnInit  {
  public options: OptionsList[] = JSON.parse(this.optionsService.LoadOptions());
  frontControl = new FormControl(['front']);

  constructor(private optionsService: OptionsService) { }

  ngOnInit() {
    // this.options = JSON.parse(this.optionsService.LoadOptions());
    console.log(this.options);
  }

  removeKeyword(option: string, position: number) {
    // const index = this.options.Front.indexOf(option);
    // if (index >= 0) {
    //   this.options.splice(index, 1);
    // }
  }

  add(event: any) {
    // const index = this.options.fr.indexOf(option);
    // if (index >= 0) {
    //   this.options.splice(index, 1);
    // }
  }

  

}
