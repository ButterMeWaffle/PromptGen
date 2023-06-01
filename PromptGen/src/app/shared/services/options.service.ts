import { Injectable, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { OptionsList } from '../interfaces/options-list-type';

@Injectable({
  providedIn: 'root'
})
export class OptionsService implements OnInit {

  public OptionsUrl: string = "../../assets/options.json";
  public OptionsList!: OptionsList;
  

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.OptionsList = this.LoadOptions();
    console.log(this.OptionsList);
  }

  /**
   * LoadOptions from options.json
   */
  public LoadOptions(): any {
    return this.http.get<OptionsList>(this.OptionsUrl).subscribe((result: any) => {
      console.log(result);
      return result;
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
   */
  public AddOption(option: string, position: number): boolean {

    return true
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
