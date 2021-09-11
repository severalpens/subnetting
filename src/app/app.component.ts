import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  powers = ['Really Smart', 'Super Flexible', 'Weather Changer'];

  hero = {name: 'Dr.', alterEgo: 'Dr. What', power: this.powers[0]};

  private _title : string;

  constructor() {
    this._title = "hello";

  }

  public get title() : string {
    return this._title;
  }
  public set title(v : string) {
    this._title = v;
  }

}
