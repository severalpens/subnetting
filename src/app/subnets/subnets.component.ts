import { Component, OnInit, Input } from '@angular/core';
import {  Network } from '../network';

@Component({
  selector: 'app-subnets',
  templateUrl: './subnets.component.html',
  styleUrls: ['./subnets.component.scss']
})
export class SubnetsComponent implements OnInit {
  @Input() ip!: Network;

  constructor() {

  }

  ngOnInit(): void {
  }

}
