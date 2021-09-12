import { Component, Input, OnInit } from '@angular/core';
import { Ip } from '../ip';

@Component({
  selector: 'app-binary',
  templateUrl: './binary.component.html',
  styleUrls: ['./binary.component.scss']
})
export class BinaryComponent implements OnInit {
  @Input() ip!: Ip;

  constructor() { }

  ngOnInit(): void {
  }

}
