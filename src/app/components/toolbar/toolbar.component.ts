import { Component, OnInit } from '@angular/core';
import { SearchbarComponent } from 'src/app/components';

@Component({
  standalone: true,
  imports: [SearchbarComponent],
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
