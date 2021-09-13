import { Component, Input, OnInit } from '@angular/core';
import { IBitGroup, Network } from '../network';
import { NetworkService } from '../network.service';

@Component({
  selector: 'app-binary',
  templateUrl: './binary.component.html',
  styleUrls: ['./binary.component.scss']
})
export class BinaryComponent implements OnInit {
  @Input() type!: string;
  network: Network;
  bitGroup!: IBitGroup;
  constructor(private networkService: NetworkService) {
    this.network = networkService.network;

  }
  ngOnInit(): void {
    console.log(this.type)
    this.type === "ip" ? this.bitGroup = this.network.ip : null;
    this.type === "mask" ? this.bitGroup = this.network.mask : null;
    this.type === "subnet" ? this.bitGroup = this.network.subnet : null;
  }



}
