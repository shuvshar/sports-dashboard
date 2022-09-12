import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';
import { MedalTally } from '../medal-tally.model';

@Component({
  selector: 'app-medal-tally',
  templateUrl: './medal-tally.component.html',
  styleUrls: ['./medal-tally.component.css']
})
export class MedalTallyComponent implements OnInit {
  medalList!: MedalTally[];
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getMedalTally().subscribe((data: MedalTally[]) => {
      this.medalList = data;
    });
    for (let i = 1; i < 5; i++) {
      setTimeout(() => this.updateMedalTallyAuto(), i*5000);
    }
  }

  updateMedalTallyAuto() {
    const obj = this.medalList.find(x => x.country.toUpperCase() === 'INDIA')!;
    obj.medals+=2;
    this.apiService.updateMedalTally(obj);
  }

}
