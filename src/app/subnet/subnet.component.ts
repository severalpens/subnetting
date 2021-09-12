import { Component, Input, OnInit } from '@angular/core';
import { Ip } from '../ip';

@Component({
  selector: 'app-subnet',
  templateUrl: './subnet.component.html',
  styleUrls: ['./subnet.component.scss']
})
export class SubnetComponent implements OnInit {
  @Input()  binaryIP!: Array<Array<number>>;

  constructor() {

   }

  ngOnInit(): void {
  }

}
