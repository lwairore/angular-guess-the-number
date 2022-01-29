import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
   <div class="container">
    <h3>I am Thinking of a number Between 1-1000.</h3>
    <h3>Can you Guess it </h3>
    <input type="number" [value]="guess" (input)="guess = $event.target.value" />

    <button (click)="verifyGuess()">GUESS</button>
    <button (click)="initializeGame()">Restart</button>

    <div>
        <p *ngIf="deviation<0" class="alert alert-warning">Your guess is higher.</p>
        <p *ngIf="deviation>0" class="alert alert-warning">Your guess is lower.</p>
        <p *ngIf="deviation===0" class="alert alert-success">Yes! That's it.</p>
    </div>

    <p>No. of Guesss : {{noOfTries}}</p>
    <p>Guessed number are : none</p>
</div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  deviation: number;
  noOfTries: number;
  original: number;
  guess: number;

  constructor() {
    this.initializeGame();
  }

  initializeGame = () => {
    this.noOfTries = 0;
    this.original = Math.floor((Math.random() * 1000) + 1);
    this.guess = null;
    this.deviation = null;
  }

  verifyGuess = () => {
    this.deviation = this.original - this.guess;
    this.noOfTries = this.noOfTries + 1;
  }

}
