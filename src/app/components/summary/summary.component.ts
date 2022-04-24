import { Component, OnInit } from '@angular/core';
import { SummaryService } from "./summary.service";
import { Summary } from "./summary.model";

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  summary: Summary = {description: ""};

  constructor(private service: SummaryService) { }

  ngOnInit(): void {
    this.service.load().subscribe((data: Summary) => this.summary = data)
  }

}
