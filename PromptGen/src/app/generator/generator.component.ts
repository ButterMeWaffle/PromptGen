import { Component, OnInit } from '@angular/core';
import { Result } from '../shared/classes/result';
import { OptionsService } from '../shared/services/options.service';
import { ResultsService } from '../shared/services/results.service';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent implements OnInit {
  public results: Result[] = [];

  constructor(private optionsService: OptionsService, private resultsService: ResultsService) { }

  ngOnInit() {
    this.results = this.resultsService.LoadResults();
    console.log(this.results);
  }
  

}
