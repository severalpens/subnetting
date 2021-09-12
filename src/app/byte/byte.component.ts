import { Component, Input, OnInit } from '@angular/core';
import { Ip } from '../ip';

@Component({
  selector: 'app-byte',
  templateUrl: './byte.component.html',
  styleUrls: ['./byte.component.scss']
})
export class ByteComponent implements OnInit {
@Input() ip!: Ip;
  constructor() { }

  ngOnInit(): void {
  }

}
