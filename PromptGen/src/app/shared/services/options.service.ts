import { Injectable, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { OptionsList } from '../interfaces/options-list.interface';

@Injectable({
  providedIn: 'root'
})
export class OptionsService implements OnInit {

  public OptionsUrl: string = "./../../assets/options.json";
  public OptionsList: OptionsList = {
    Front: [],
    Middle: [],
    End: [],
    Negative: []
  };
  

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
    this.http.get<OptionsList>(this.OptionsUrl).subscribe((result: any) => {
      console.log(result);
      return this.OptionsList = result;
      }
    );
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
  public AddOption = (option: string, position: number): OptionsList => {
    switch (position) {
      case 0:

        this.OptionsList.Front.push(option);
        break;

      case 1:
        this.OptionsList.Middle.push(option);
        break;

      case 2:
        this.OptionsList.End.push(option);
        break;

      case 3:
        this.OptionsList.Negative.push(option);
        break;
    
      default:
        break;
    }
    
    return this.OptionsList
  }

  public DeleteOption = (option: string, position: number): OptionsList => {
    let index: number = 0;
    switch (position) {
      case 0:
        index = this.OptionsList.Front.indexOf(option);
        this.OptionsList.Front.splice(index, 1);
        break;

      case 1:
        index = this.OptionsList.Front.indexOf(option);
        this.OptionsList.Front.splice(index, 1);
        break;

      case 2:
        index = this.OptionsList.Front.indexOf(option);
        this.OptionsList.Front.splice(index, 1);
        break;

      case 3:
        index = this.OptionsList.Front.indexOf(option);
        this.OptionsList.Front.splice(index, 1);
        break;
    
      default:
        break;
    }
    
    return this.OptionsList
  }

  /**
   * Saves the options list, call VerifyImport for obvious reasons 
   */
  public SaveOptionsList(): boolean {
    if (!this.VerifyImport(this.OptionsList)) return false;

    return true;
  }

  /**
   * Verify the import data is valid before overwriting options.json
   */
  private VerifyImport(fileOrSomething: any): boolean {
    return true;
  }
}
