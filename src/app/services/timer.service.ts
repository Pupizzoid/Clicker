import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  private _tickTimeout: any;
  public timerData: object[] = [
    {
      value: 5,
      selected: true
    },
    {
      value: 10,
      selected: false
    },
    {
      value: 15,
      selected: false
    },
  ]
  constructor() { }

  private _timer: number = 5;
  timer: BehaviorSubject<number> = new BehaviorSubject(this._timer);
  isRunning: BehaviorSubject<boolean> = new BehaviorSubject(false);
  finish: Subject<void> = new Subject();

  public setTimer(value: number): void {
    this._timer = value;
    this.timer.next(this._timer);
  }

  public startTimer(): void {
    if (this._timer <= 0) {
      return;
    }
    this.nextTick();
    this.isRunning.next(true);
  }

  public tick(): void {
    --this._timer;
    this.timer.next(this._timer);
    if (this._timer > 0) {
      this.nextTick();
    } else {
      this.isRunning.next(false);
      this.finish.next();
    }
  }

  public nextTick(): void {
    this._tickTimeout = setTimeout(() => {
      this.tick();
    }, 1000);
  }

  public reset(): void {
    this._timer = 5;
    this.timer.next(this._timer);
  }
}
