import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public defaultValue: string = 'Player';
  constructor(
    private router: Router
  ) {
    this.defaultValue
   }

  ngOnInit(): void {
  }

  public addNewPlayer() {
    this.router.navigate(['game'], { queryParams: { name: this.defaultValue } })
  }
}
