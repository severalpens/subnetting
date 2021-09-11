import { Component, OnInit } from '@angular/core';
import { Inputs } from './inputs';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss']
})
export class InputsComponent implements OnInit {
  inputs: Inputs;
  subnets: Array<number>;

  constructor() {
    this.inputs  = new Inputs(3,'172.168.16.22',24);
    this.subnets = [1,2,3,4];
  }

  ngOnInit(): void {

  }

}
