import { Component, OnInit } from '@angular/core';
import { InterestsService } from "./interests.service";

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.scss']
})
export class InterestsComponent implements OnInit {
  title: string = "Interests"
  interests: string[] = []

  constructor(private service: InterestsService) { }

  ngOnInit(): void {
    this.service.load().subscribe((data: string[]) => this.interests = data);
  }

}
