import { Component, OnInit } from '@angular/core';
import { ReferenceService } from "./reference.service";
import { Reference } from "./reference.model";

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.scss']
})
export class ReferenceComponent implements OnInit {

  references: Reference[] = []

  constructor(private service: ReferenceService) { }

  ngOnInit(): void {
    this.service.load().subscribe((data: Reference[]) => this.references = data);
  }

}
