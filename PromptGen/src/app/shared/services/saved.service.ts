import { Injectable } from '@angular/core';
import * as savedTemplate from '../../../assets/results.template.json'
import { Saved } from '../classes/saved';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SavedService {

  public SavedUrl: string = "../../assets/Saved.json";
  public SavedList: Saved[] = [];
  

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.SavedList = this.LoadSaved();
  }

  /**
   * LoadOptions from options.json
   */
  public LoadSaved = (): any => {
    let localOptions = localStorage.getItem("promptSaved");
    if (!localOptions) {
      for (let index = 0; index < 1; index++) {
        this.SavedList.push(savedTemplate[index]);
      }
    } else {
      this.SavedList = JSON.parse(localOptions);
    }
    return this.SavedList;
  }

  /**
   * AddOptions to the options list, then save the list to options.json
   * 0 = Front
   * 1 = Middle
   * 2 = End
   */
  public AddSave = (prompt: string): Saved[] => {
    this.SavedList.push(new Saved(prompt));
    this.SavedavesList();
    return this.SavedList;
  }

  public DeleteSave = (index: number): Saved[] => {
    this.SavedList.splice(index, 1);
    this.SavedavesList();
    return this.SavedList
  }

  /**
   * Saved the options list, call VerifyImport for obvious reasons 
   */
  public SavedavesList = (): boolean => {
    localStorage.setItem("promptSaved", JSON.stringify(this.SavedList));
    return true;
  }
}
