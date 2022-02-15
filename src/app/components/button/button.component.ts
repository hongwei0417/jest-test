import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  data: any;

  constructor() { }

  ngOnInit(): void {
  }

  change(): void {
    this.data = "123";
  }

}
