import { Component, Input, OnInit } from '@angular/core';
import { Network } from '../network';

@Component({
  selector: 'app-subnet',
  templateUrl: './subnet.component.html',
  styleUrls: ['./subnet.component.scss']
})
export class SubnetComponent implements OnInit {
  @Input() ip!: Network;

  constructor() {

   }

  ngOnInit(): void {
  }

}
