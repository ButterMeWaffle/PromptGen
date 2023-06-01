import { ExtraOptions } from "./extra-options";

export class Options {
    Id: number;
    Title: string;
    NumOptionsToUse: number;
    Options: string[];
    Info: string;
    Extras: ExtraOptions;

    constructor (id: number, title: string, numOptionsToUse: number, options: string[], info: string, extras: ExtraOptions){
        this.Id = id;
        this.Title = title;
        this.NumOptionsToUse = numOptionsToUse;
        this.Options = options;
        this.Info = info;
        this.Extras = extras;
    }

}
