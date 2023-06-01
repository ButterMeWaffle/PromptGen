import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Result } from '../classes/result';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  public ResultsUrl: string = "../../assets/results.json";
  public ResultsList!: Result;
  

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.ResultsList = this.LoadResults();
    console.log(this.ResultsList);
  }

  /**
   * LoadOptions from options.json
   */
  public LoadResults(): any {
    return this.http.get<Result>(this.ResultsUrl).subscribe((result: any) => {
      console.log(result);
      return result;
    });
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

}
