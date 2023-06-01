import { Injectable, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { OptionsList } from '../interfaces/options-list.interface';
import { Options } from '../classes/options';
import * as OptionsTemplate from '../../../assets/options.template.json';

@Injectable({
  providedIn: 'root'
})
export class OptionsService implements OnInit {

  public OptionsUrl: string = "./../../assets/options.json";
  public OptionsList: Options[] = [];
  

  constructor(private http: HttpClient) { }

  ngOnInit() {
    console.log("=====================Options List=====================")
    
    console.log(this.OptionsList);
  }

  /**
   * LoadOptions from options.json
   */
  public LoadOptions = (): any => {
    console.log('------LoadOptions---------')
    let localOptions = localStorage.getItem("promptOptions");
    if (!localOptions) {
      for (let index = 0; index < 10; index++) {
        this.OptionsList.push(OptionsTemplate[index]);
      }
    } else {
      this.OptionsList = JSON.parse(localOptions);
    }
    console.log(this.OptionsList)
    return this.OptionsList;
  }
  
  /**
   * Import json file to overwrite options.json, call VerifyImport for obvious reasons
   */
  public ImportOptions(fileOrSomething: any) {
    if (!this.VerifyImport(fileOrSomething)) return false;

    return true;
  }
  

  /**
   * ExportOptions
   */
  public ExportOptions(): any {
    
  }

  /**
   * AddOptions to the options list, then save the list to options.json
   * 0 = Front
   * 1 = Middle
   * 2 = End
   * 3 = Negative
   */
  public AddOption = (option: string, position: number): Options[] => {
    this.OptionsList[position].Options.push(option);
    // switch (position) {
    //   case 0:

    //     this.OptionsList.Subject.push(option);
    //     break;

    //   case 1:
    //     this.OptionsList.Medium.push(option);
    //     break;

    //   case 2:
    //     this.OptionsList.Style.push(option);
    //     break;

    //   case 3:
    //     this.OptionsList.Artist.push(option);
    //     break;

    //   case 4:
    //     this.OptionsList.Website.push(option);
    //     break;

    //   case 5:
    //     this.OptionsList.Resolution.push(option);
    //     break;

    //   case 6:
    //     this.OptionsList.AdditionalDetails.push(option);
    //     break;

    //   case 7:
    //     this.OptionsList.Color.push(option);
    //     break;

    //   case 8:
    //     this.OptionsList.Lighting.push(option);
    //     break;

    //   case 9:
    //     this.OptionsList.Remarks.push(option);
    //     break;

    //   case 10:
    //     this.OptionsList.Negative.push(option);
    //     break;
    
    //   default:
    //     break;
    // }
    
    return this.OptionsList
  }

  public DeleteOption = (option: string, position: number): Options[] => {
    let index = this.OptionsList[position].Options.indexOf(option);
    this.OptionsList[position].Options.splice(index, 1);
    // switch (position) {
    //   case 0:
        
    //     this.OptionsList.Subject.splice(index, 1);
    //     break;

    //   case 1:
    //     index = this.OptionsList.Medium.indexOf(option);
    //     this.OptionsList.Medium.splice(index, 1);
    //     break;

    //   case 2:
    //     index = this.OptionsList.Style.indexOf(option);
    //     this.OptionsList.Style.splice(index, 1);
    //     break;

    //   case 3:
    //     index = this.OptionsList.Artist.indexOf(option);
    //     this.OptionsList.Artist.splice(index, 1);
    //     break;

    //   case 4:
    //     index = this.OptionsList.Website.indexOf(option);
    //     this.OptionsList.Website.splice(index, 1);
    //     break;

    //   case 5:
    //     index = this.OptionsList.Resolution.indexOf(option);
    //     this.OptionsList.Resolution.splice(index, 1);
    //     break;

    //   case 6:
    //     index = this.OptionsList.AdditionalDetails.indexOf(option);
    //     this.OptionsList.AdditionalDetails.splice(index, 1);
    //     break;

    //   case 7:
    //     index = this.OptionsList.Color.indexOf(option);
    //     this.OptionsList.Color.splice(index, 1);
    //     break;

    //   case 8:
    //     index = this.OptionsList.Lighting.indexOf(option);
    //     this.OptionsList.Lighting.splice(index, 1);
    //     break;

    //   case 9:
    //     index = this.OptionsList.Remarks.indexOf(option);
    //     this.OptionsList.Remarks.splice(index, 1);
    //     break;

    //   case 10:
    //     index = this.OptionsList.Negative.indexOf(option);
    //     this.OptionsList.Negative.splice(index, 1);
    //     break;
    
    //   default:
    //     break;
    // }
    
    return this.OptionsList
  }

  /**
   * Saves the options list, call VerifyImport for obvious reasons 
   */
  public SaveOptionsList = (): boolean => {
    if (!this.VerifyImport(this.OptionsList)) return false;
    localStorage.setItem("promptOptions", JSON.stringify(this.OptionsList));
    return true;
  }

  /**
   * Verify the import data is valid before overwriting options.json
   */
  private VerifyImport(fileOrSomething: any): boolean {
    return true;
  }
}
