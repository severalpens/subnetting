import { IAddress } from "./interfaces";


export class Mask implements IAddress{
  arrIntBinaryOctets: Array<Array<number>>;
  ipBinaryArray: Array<number>;
  ipIntegersArray: Array<number>;
  ipBinaryString: string;
  strBinaryDisplay: string;
  strBinaryOctets: Array<string>;

  constructor(cidr: number) {
    let bits = "1111111111111111111111111111111100000000000000000000000000000000".slice(32-cidr,64-cidr);
    this.arrIntBinaryOctets = new Array<Array<number>>();
    this.ipBinaryArray = new Array<number>();
    this.ipIntegersArray = new Array<number>();
    this.ipBinaryString = "";
    this.strBinaryOctets = new Array<string>();

    this.strBinaryOctets.push(bits.slice(0,8));
    this.strBinaryOctets.push(bits.slice(8,16));
    this.strBinaryOctets.push(bits.slice(16,24));
    this.strBinaryOctets.push(bits.slice(24,33));

    this.ipIntegersArray.push(parseInt(this.strBinaryOctets[0],2));
    this.ipIntegersArray.push(parseInt(this.strBinaryOctets[1],2));
    this.ipIntegersArray.push(parseInt(this.strBinaryOctets[2],2));
    this.ipIntegersArray.push(parseInt(this.strBinaryOctets[3],2));

    this.ipBinaryArray = bits.split('').map(x => parseInt(x));
    this.arrIntBinaryOctets.push(this.ipBinaryArray.slice(0,8));
    this.arrIntBinaryOctets.push(this.ipBinaryArray.slice(8,16));
    this.arrIntBinaryOctets.push(this.ipBinaryArray.slice(16,24));
    this.arrIntBinaryOctets.push(this.ipBinaryArray.slice(24,32));

    this.strBinaryDisplay = this.strBinaryOctets[0] + '.';
    this.strBinaryDisplay += this.strBinaryOctets[1] + '.';
    this.strBinaryDisplay += this.strBinaryOctets[2] + '.';
    this.strBinaryDisplay += this.strBinaryOctets[3];

  }

}
