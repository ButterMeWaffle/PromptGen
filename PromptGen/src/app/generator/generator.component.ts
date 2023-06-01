import { Component, OnInit } from '@angular/core';
import { Result } from '../shared/classes/result';
import { OptionsService } from '../shared/services/options.service';
import { ResultsService } from '../shared/services/results.service';
import { Options } from '../shared/classes/options';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent implements OnInit {
  public results: Result[] = [];
  public panelOpenState = false;
  public OptionsList: Options[] = []

  constructor(private optionsService: OptionsService, private resultsService: ResultsService) { }

  ngOnInit() {
    this.OptionsList = this.optionsService.LoadOptions();
    this.results = this.resultsService.LoadResults();
    console.log(this.results);
  }

  public generatePrompt = () => {
    console.log("Generate the prompt !!!!!")
    let generatedPrompt = "";
    this.OptionsList.forEach(option => {
      if (option.Options.length !== 0) {

        let numToUse = option.NumOptionsToUse
        if (option.Extras.UseAll) {
          numToUse = option.Options.length - 1;
        }
        else if (option.Extras.RandomAmount) {
          numToUse = this.randomUniqueIntFromInterval(0, option.Options.length - 1, []);
        }
        
        for (let index = 0; index < numToUse; index++) {
          let usedIDs: number[] = [];
          let randID = this.randomUniqueIntFromInterval(0, option.Options.length - 1, usedIDs);
          usedIDs.push(randID);
          if (option.Title === "Negative" && index === 0) {
            generatedPrompt += "### "
          }
          generatedPrompt += option.Options[randID] + ", ";
        }
      }
    });
    
    this.results = this.resultsService.AddResult(generatedPrompt);
  }

  public deleteResult = (i: number) => {
    this.results = this.resultsService.DeleteResult(i);
  }
  
  public randomUniqueIntFromInterval(min: number, max: number, usedIDs: number[]): number { // min and max included 
    let val = Math.floor(Math.random() * (max - min + 1) + min)

    if (usedIDs[val]) {
      return this.randomUniqueIntFromInterval(min, max, usedIDs);
    }

    return val;
  }



  public saveOptions = () => {
    this.optionsService.SaveOptionsList();
  }

}
