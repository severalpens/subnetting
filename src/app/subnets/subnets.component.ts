import { Component, OnInit, Input } from '@angular/core';
import { Ip } from '../ip';

@Component({
  selector: 'app-subnets',
  templateUrl: './subnets.component.html',
  styleUrls: ['./subnets.component.scss']
})
export class SubnetsComponent implements OnInit {
  @Input() ip!: Ip;

  constructor() {

  }

  ngOnInit(): void {
  }

}
