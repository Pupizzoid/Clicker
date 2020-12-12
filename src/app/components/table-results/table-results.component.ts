import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../services';
import { IGameResult } from '../../types/';


@Component({
  selector: 'app-table-results',
  templateUrl: './table-results.component.html',
  styleUrls: ['./table-results.component.scss']
})
export class TableResultsComponent implements OnInit {
  public resultsData: IGameResult[];
  public displayedColumns: string[] = ['playerName', 'gameTime', 'clicks', 'Clicks on sec'];
  constructor(private storage: LocalStorageService,) { }

  ngOnInit(): void {
    this.resultsData = this.storage.getResults().sort((a,b) => (b.clicks / b.gameTime) - (a.clicks / a.gameTime));
  }
}
