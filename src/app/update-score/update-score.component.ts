import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-update-score',
  templateUrl: './update-score.component.html',
  styleUrls: ['./update-score.component.css']
})
export class UpdateScoreComponent implements OnInit {
  @Input() score!: number;
  @Output() updatedScore = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  updateScore() {
    this.updatedScore.emit(this.score);
  }

}
