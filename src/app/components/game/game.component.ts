import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ClickerDataService, TimerService, LocalStorageService } from '../../services';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  public playerName: string;
  public isTimerRunning: boolean = false;
  private _gameTime: number = 5;
  public countClicks: number;
  constructor(
    public clickerData: ClickerDataService,
    public timerData: TimerService,
    private storage: LocalStorageService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.timerData.isRunning.subscribe((val: boolean) => {
      this.isTimerRunning = val;
    });
    this.timerData.finish.subscribe(() => {
      this.storage.save({
        playerName: this.playerName,
        gameTime: this._gameTime,
        clicks: this.clickerData.getClicks()
      });
      this.countClicks = this.clickerData.getClicks();
    });
    this.route.queryParams.subscribe(params => {
      this.playerName = params.name;
    });

    this.route.queryParams.subscribe(params => {
      this.playerName = params.name;
    });
  }

  public onSelectChange(e):void {
    this._gameTime = e.value;
    this.timerData.setTimer(this._gameTime);
  }

  public startClick():void {
    if (this.isTimerRunning) {
      this.clickerData.click();
      return;
    }
    this.timerData.startTimer();
  }

  public changeName():void {
    this.router.navigate(['register']);
  }

  public seeResults():void  {
    this.router.navigate(['results']);
  }

  public reset():void  {
    this.clickerData.reset();
    this.timerData.reset();
  }
}
