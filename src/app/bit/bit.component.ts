import { Component, Input, OnInit } from '@angular/core';
import { Ip } from '../ip';

@Component({
  selector: 'app-bit',
  templateUrl: './bit.component.html',
  styleUrls: ['./bit.component.scss']
})
export class BitComponent implements OnInit {
  @Input() ip!: Ip;

  constructor() { }

  ngOnInit(): void {
  }

}
