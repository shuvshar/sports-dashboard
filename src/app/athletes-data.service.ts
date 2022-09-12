import { Injectable } from '@angular/core';
import { Athlete} from './athletes.model';

@Injectable({
  providedIn: 'root'
})
export class AthleticsDataService {
  private GOLD = '🥇'
  private SILVER = '🥈'
  private BRONZE = '🥉';
  private athletes: Athlete[] = [];
  constructor() {
    let e1 = new Athlete(1, 'A', 9, '-');
    let e2 = new Athlete(2, 'B', 8.89, '-');
    let e3 = new Athlete(3, 'C', 7, '-');
    let e4 = new Athlete(4, 'D', 6.4, '-');
    let e5 = new Athlete(5, 'E', 5, '-');
    this.athletes.push(e1);
    this.athletes.push(e2);
    this.athletes.push(e3);
    this.athletes.push(e4);
    this.athletes.push(e5);
    this.getMedalWinners();
  }

  getWinnerLists() {
    return this.athletes;
  }

  getMedalWinners() {
    this.athletes = this.athletes.sort((obj1, obj2) => { return obj2.score - obj1.score; });
    this.athletes.forEach((element, index) => {
      this.athletes[index].medal = '-';
    });
    this.athletes[0].medal = this.GOLD;
    this.athletes[1].medal = this.SILVER;
    this.athletes[2].medal = this.BRONZE;
  }
}
