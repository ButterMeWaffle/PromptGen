import { Component, OnInit } from '@angular/core';
import { Saved } from '../shared/classes/saved';
import { OptionsService } from '../shared/services/options.service';
import { SavedService } from '../shared/services/saved.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-saved-prompts',
  templateUrl: './saved-prompts.component.html',
  styleUrls: ['./saved-prompts.component.scss']
})
export class SavedPromptsComponent implements OnInit {
  public savedList: Saved[] = [];

  constructor(
    private optionsService: OptionsService, 
    private savedService: SavedService, 
    private _snackBar: MatSnackBar
    ) { }

  ngOnInit() {
    this.savedList = this.savedService.GetSaved();
  }

  public deleteSaved = (i: number) => {
    this.savedList = this.savedService.DeleteSaved(i);
    this._snackBar.open("Bye Bye");
  }

  public updateSaved = (i: number) => {
    this.savedList = this.savedService.UpdateSaved(this.savedList[i]);
    this._snackBar.open("The save worked! Wohooo");
  }

  public copied (): void {
    this._snackBar.open("Copied to clipboard");
  }
}
