import { Component, Input, OnInit } from '@angular/core';
import { Ip } from '../ip';

@Component({
  selector: 'app-outputs',
  templateUrl: './outputs.component.html',
  styleUrls: ['./outputs.component.scss']
})
export class OutputsComponent implements OnInit {
  @Input() ip!: Ip;
  
  constructor() { }

  ngOnInit(): void {
  }

}
