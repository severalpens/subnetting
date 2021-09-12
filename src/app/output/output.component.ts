import { Component, Input, OnInit } from '@angular/core';
import { Ip } from '../ip';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {
@Input() ip!: Ip;
  constructor() { }

  ngOnInit(): void {
  }

}
