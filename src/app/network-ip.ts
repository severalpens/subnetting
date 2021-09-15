import { IAddress } from "./interfaces";

export class NetworkIP implements IAddress{
  arrIntBinaryOctets: Array<Array<number>>;
  ipIntegersArray: Array<number>;
  ipBinaryArray: Array<number>;
  ipBinaryString: string;
  strBinaryDisplay: string;
  strBinaryOctets: Array<string>;

  private convertDecimalToBinaryString(dec: number, len: number){
    let zeros = "00000000000000000000000000000000"
    let tmp = zeros + dec.toString(2);
    return tmp.slice(tmp.length -len);
  }

  constructor(ipIntegersArray: Array<number>){
    this.arrIntBinaryOctets = new Array<Array<number>>();
    this.ipIntegersArray = ipIntegersArray;
    this.ipBinaryArray = new Array<number>();
    this.ipBinaryString = "";
    this.strBinaryOctets = new Array<string>();

    this.strBinaryOctets.push(this.convertDecimalToBinaryString(this.ipIntegersArray[0],8));
    this.strBinaryOctets.push(this.convertDecimalToBinaryString(this.ipIntegersArray[1],8));
    this.strBinaryOctets.push(this.convertDecimalToBinaryString(this.ipIntegersArray[2],8));
    this.strBinaryOctets.push(this.convertDecimalToBinaryString(this.ipIntegersArray[3],8));

    this.arrIntBinaryOctets.push(this.strBinaryOctets[0].split('').map(x => parseInt(x)));
    this.arrIntBinaryOctets.push(this.strBinaryOctets[1].split('').map(x => parseInt(x)));
    this.arrIntBinaryOctets.push(this.strBinaryOctets[2].split('').map(x => parseInt(x)));
    this.arrIntBinaryOctets.push(this.strBinaryOctets[3].split('').map(x => parseInt(x)));

    this.ipBinaryArray = this.arrIntBinaryOctets[0].concat(this.arrIntBinaryOctets[1],this.arrIntBinaryOctets[2],this.arrIntBinaryOctets[3])

    this.strBinaryDisplay = this.strBinaryOctets[0] + '.';
    this.strBinaryDisplay += this.strBinaryOctets[1] + '.';
    this.strBinaryDisplay += this.strBinaryOctets[2] + '.';
    this.strBinaryDisplay += this.strBinaryOctets[3];

  }

}
