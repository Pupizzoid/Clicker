import { Injectable } from '@angular/core';
import { IGameResult } from '../types';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public getResults(): IGameResult[] {
    const gameResults = localStorage.getItem('gameResults');
    if (!gameResults) return [];
    return JSON.parse(gameResults);
  }

  public updateResults(gameResults: IGameResult[]): void {
    localStorage.setItem('gameResults', JSON.stringify(gameResults));
  }

  public save(gameResult: IGameResult): void {
    const gameResults = this.getResults();
    gameResults.push(gameResult);
    this.updateResults(gameResults);
  }
}
