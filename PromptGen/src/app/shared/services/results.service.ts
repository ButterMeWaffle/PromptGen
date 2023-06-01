import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Result } from '../classes/result';
import * as resultsTemplate from '../../../assets/results.template.json'

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  public ResultsUrl: string = "../../assets/results.json";
  public ResultsList: Result[] = [];
  

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.ResultsList = this.LoadResults();
  }

  /**
   * LoadOptions from options.json
   */
  public LoadResults = (): any => {
    let localOptions = localStorage.getItem("promptResults");
    if (!localOptions) {
      for (let index = 0; index < 1; index++) {
        this.ResultsList.push(resultsTemplate[index]);
      }
    } else {
      this.ResultsList = JSON.parse(localOptions);
    }
    return this.ResultsList;
  }

  /**
   * AddOptions to the options list, then save the list to options.json
   * 0 = Front
   * 1 = Middle
   * 2 = End
   */
  public AddResult = (prompt: string): Result[] => {
    this.ResultsList.push(new Result(prompt));
    this.SaveResultsList();
    return this.ResultsList;
  }

  public DeleteResult = (index: number): Result[] => {
    this.ResultsList.splice(index, 1);
    this.SaveResultsList();
    return this.ResultsList
  }

  /**
   * Saves the options list, call VerifyImport for obvious reasons 
   */
  public SaveResultsList = (): boolean => {
    localStorage.setItem("promptResults", JSON.stringify(this.ResultsList));
    return true;
  }

  

}
