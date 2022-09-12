import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AthleticsDataService } from '../athletes-data.service';
import { Athlete } from '../athletes.model';

@Component({
  selector: 'app-athlete-list',
  templateUrl: './athlete-list.component.html',
  styleUrls: ['./athlete-list.component.css']
})
export class AthleteListComponent implements OnInit,AfterViewInit {
  athletes!: Athlete[];
  @ViewChild("highlight") marker!: ElementRef;
  constructor(private athleteService: AthleticsDataService) { }

  ngOnInit(): void {
    this.athletes = this.athleteService.getWinnerLists();
  }

  ngAfterViewInit(): void {
    this.marker.nativeElement.style.backgroundColor="yellow";
  }

  delete(id: number) {
    for (let i = 0; i < this.athletes.length; i++){
      if (this.athletes[i].id === id) {
        this.athletes.splice(i, 1);
      }
    }
  }

  update(newScore:number, id: number) {
    for (let i = 0; i < this.athletes.length; i++){
      if (this.athletes[i].id === id) {
        this.athletes[i].score = newScore;
        break;
      }
    }
    this.athleteService.getMedalWinners();
  }
}
