import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClickerDataService {
  constructor() { }

  private _clickCount: number = 0;
  public clickCount: BehaviorSubject<number> = new BehaviorSubject(this._clickCount);

  public click(): void {
    this._clickCount++;
    this.clickCount.next(this._clickCount);
  }

  public reset(): void {
    this._clickCount = 0;
    this.clickCount.next(this._clickCount);
  }

  public getClicks():number {
    return this._clickCount;
  }
}
