import { Component, Input, OnInit } from '@angular/core';
import { Network } from '../network';

@Component({
  selector: 'app-binary',
  templateUrl: './binary.component.html',
  styleUrls: ['./binary.component.scss']
})
export class BinaryComponent implements OnInit {
  @Input() ip!: Network;

  constructor() { }

  ngOnInit(): void {
  }

}
