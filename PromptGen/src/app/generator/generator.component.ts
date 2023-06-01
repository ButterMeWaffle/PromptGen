import { Component, OnInit } from '@angular/core';
import { OptionsService } from '../shared/services/options.service';
import { Options } from '../shared/classes/options';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Saved } from '../shared/classes/saved';
import { SavedService } from '../shared/services/saved.service';
import { SavedPromptsComponent } from '../saved-prompts/saved-prompts.component';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss']
})
export class GeneratorComponent implements OnInit {
  public savedList: Saved[] = [];
  public panelOpenState = false;
  public OptionsList: Options[] = []

  constructor(
    private optionsService: OptionsService, 
    private _snackBar: MatSnackBar,
    private savedService: SavedService
    ) { }

  ngOnInit() {
    this.OptionsList = this.optionsService.GetOptions();
    this.savedList = this.savedService.GetSaved();
  }

  public generatePrompt = () => {
    let generatedPrompt = "";
    this.OptionsList.forEach(option => {
      if (option.Options.length !== 0) {

        let numToUse = option.NumOptionsToUse
         if (option.Extras.RandomAmount) {
          numToUse = this.randomUniqueIntFromInterval(1, option.Options.length - 1, []);
        }
        let usedIDs: number[] = [];
        if (option.Extras.UseAll) {
          for (let index = 0; index < option.Options.length; index++) {
            if (option.Title === "Negative" && index === 0) {
              generatedPrompt += "### "
            }
            generatedPrompt += option.Options[index] + ", ";
          }
        }
        else {
          for (let index = 0; index < numToUse; index++) {
            let randID = this.randomUniqueIntFromInterval(0, option.Options.length - 1, usedIDs);
            usedIDs.push(randID);
            if (option.Title === "Negative" && index === 0) {
              generatedPrompt += "### "
            }
            generatedPrompt += option.Options[randID] + ", ";
          }
        }
      }
    });
    
    this.savedList = this.savedService.AddSaved(generatedPrompt);
  }
  
  public randomUniqueIntFromInterval(min: number, max: number, usedIDs: number[]): number { // min and max included 
    let val = Math.floor(Math.random() * (max - min + 1) + min)
    if (usedIDs.find(x => x = val)) {
      return this.randomUniqueIntFromInterval(min, max, usedIDs);
    }
    return val;
  }

  public saveOptions = () => {
    this.optionsService.SaveOptionsList();
    this._snackBar.open("The save worked! Wohooo");
  }

}
