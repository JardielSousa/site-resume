import { Component, OnInit } from '@angular/core';
import { HeaderService } from "./header.service";
import { Header } from "./header.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  header: Header = {name: "", occupation: "", email: "", phone: "", socials: []}

  constructor(private service: HeaderService) { }

  ngOnInit(): void {
    this.service.load().subscribe((data: Header) => this.header = data);
  }

}
