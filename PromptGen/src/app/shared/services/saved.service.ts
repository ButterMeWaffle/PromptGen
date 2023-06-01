import { Injectable, OnInit } from '@angular/core';
import * as savedTemplate from '../../../assets/saved.template.json'
import { Saved } from '../classes/saved';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SavedService implements OnInit {

  public SavedUrl: string = "../../assets/Saved.json";
  public SavedList: Saved[] = [];
  

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    if (this.SavedList.length === 0) this.LoadSaved();
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
    this.getNextId();
    return this.SavedList;
  }

  public GetSaved = (): any => {
    if (this.SavedList.length === 0) return this.LoadSaved();
    return this.SavedList;
  }

  /**
   * AddOptions to the options list, then save the list to options.json
   * 0 = Front
   * 1 = Middle
   * 2 = End
   */
  public AddSaved = (prompt: string): Saved[] => {
    this.SavedList.push(new Saved(this.getNextId(), prompt));
    this.SaveList();
    return this.SavedList;
  }

  public DeleteSaved = (index: number): Saved[] => {
    this.SavedList.splice(index, 1);
    this.SaveList();
    return this.SavedList
  }

  public UpdateSaved = (item: Saved): Saved[] => {
    let indexToUpdate = this.SavedList.findIndex(i => i.id === item.id);
    this.SavedList[indexToUpdate] = item;

    //this.SavedList = Object.assign([], this.SavedList);
    this.SaveList();
    return this.SavedList
  }

  /**
   * Saved the options list, call VerifyImport for obvious reasons 
   */
  public SaveList = (): boolean => {
    localStorage.setItem("promptSaved", JSON.stringify(this.SavedList));
    return true;
  }

  private getNextId = (): number => {
    let savedId = localStorage.getItem("newestId");
    if (!savedId) {
      localStorage.setItem("newestId", "0");
      return 0;
    }
    let newId = parseInt(savedId) + 1;
    localStorage.setItem("newestId", newId.toString());
    return newId;
  }
}
