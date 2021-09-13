import { Component, Input, OnInit } from '@angular/core';
import { Network } from '../network';

@Component({
  selector: 'app-outputs',
  templateUrl: './outputs.component.html',
  styleUrls: ['./outputs.component.scss']
})
export class OutputsComponent implements OnInit {
  @Input() ip!: Network;

  constructor() { }

  ngOnInit(): void {
  }

}
