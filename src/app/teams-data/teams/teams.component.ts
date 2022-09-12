import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  country!: string;
  rank!: string;
  constructor(private route: ActivatedRoute) {
    route.params.subscribe(newParams => {
      this.country = newParams['country'];
      this.rank = newParams['rank'];
    });
  }

  ngOnInit(): void {
  }

}
