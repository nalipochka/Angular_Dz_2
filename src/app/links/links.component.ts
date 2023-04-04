import { Component } from '@angular/core';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent {
links:[string, string][] =[
  ["GitHub","https://github.com/nalipochka"]
]
}
