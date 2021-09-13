import { Component, Input, OnInit } from '@angular/core';
import { Network } from '../network';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {
@Input() ip!: Network;
  constructor() { }

  ngOnInit(): void {
  }

}
