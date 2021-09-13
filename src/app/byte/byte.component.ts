import { Component, Input, OnInit } from '@angular/core';
import { Network } from '../network';

@Component({
  selector: 'app-byte',
  templateUrl: './byte.component.html',
  styleUrls: ['./byte.component.scss']
})
export class ByteComponent implements OnInit {
@Input() ip!: Network;
  constructor() { }

  ngOnInit(): void {
  }

}
