
export interface IBitGroup{
  intDecimalOctets: Array<number>;
  strBinaryOctets: Array<string>;
  arrIntBinaryOctets: Array<Array<number>>;
  intBinaryCombined: Array<number>;
  strBinaryCombined: string;

}

export class Subnet implements IBitGroup{
  arrIntBinaryOctets: Array<Array<number>>;
  intBinaryCombined: Array<number>;
  intDecimalOctets: Array<number>;
  strBinaryCombined: string;
  strBinaryOctets: Array<string>;

  constructor(ip: Array<number>,mask: Array<number>){
    this.arrIntBinaryOctets = new Array<Array<number>>();
    this.intBinaryCombined = new Array<number>();
    this.intDecimalOctets = new Array<number>();
    this.strBinaryCombined = "";
    this.strBinaryOctets = new Array<string>();



    for (let i = 0; i < 32; i++) {
      this.intBinaryCombined.push(ip[i] & mask[i]);
      this.strBinaryCombined += this.intBinaryCombined[i];
    }

    this.arrIntBinaryOctets.push(this.intBinaryCombined.slice(0,8));
    this.arrIntBinaryOctets.push(this.intBinaryCombined.slice(8,16));
    this.arrIntBinaryOctets.push(this.intBinaryCombined.slice(16,24));
    this.arrIntBinaryOctets.push(this.intBinaryCombined.slice(24,32));

    this.strBinaryOctets.push(this.strBinaryCombined.slice(0,8));
    this.strBinaryOctets.push(this.strBinaryCombined.slice(8,16));
    this.strBinaryOctets.push(this.strBinaryCombined.slice(16,24));
    this.strBinaryOctets.push(this.strBinaryCombined.slice(24,32));

    this.intDecimalOctets.push(parseInt(this.strBinaryOctets[0],2));
    this.intDecimalOctets.push(parseInt(this.strBinaryOctets[1],2));
    this.intDecimalOctets.push(parseInt(this.strBinaryOctets[2],2));
    this.intDecimalOctets.push(parseInt(this.strBinaryOctets[3],2));


  }


}


export class Mask implements IBitGroup{
  arrIntBinaryOctets: Array<Array<number>>;
  intBinaryCombined: Array<number>;
  intDecimalOctets: Array<number>;
  strBinaryCombined: string;
  strBinaryOctets: Array<string>;


  constructor(cidr: number) {
    let bits = "1111111111111111111111111111111100000000000000000000000000000000".slice(32-cidr,64-cidr);
    this.arrIntBinaryOctets = new Array<Array<number>>();
    this.intBinaryCombined = new Array<number>();
    this.intDecimalOctets = new Array<number>();
    this.strBinaryCombined = "";
    this.strBinaryOctets = new Array<string>();

    this.strBinaryOctets.push(bits.slice(0,8));
    this.strBinaryOctets.push(bits.slice(8,16));
    this.strBinaryOctets.push(bits.slice(16,24));
    this.strBinaryOctets.push(bits.slice(24,33));

    this.intDecimalOctets.push(parseInt(this.strBinaryOctets[0],2));
    this.intDecimalOctets.push(parseInt(this.strBinaryOctets[1],2));
    this.intDecimalOctets.push(parseInt(this.strBinaryOctets[2],2));
    this.intDecimalOctets.push(parseInt(this.strBinaryOctets[3],2));

    this.intBinaryCombined = bits.split('').map(x => parseInt(x));
    this.arrIntBinaryOctets.push(this.intBinaryCombined.slice(0,8));
    this.arrIntBinaryOctets.push(this.intBinaryCombined.slice(8,16));
    this.arrIntBinaryOctets.push(this.intBinaryCombined.slice(16,24));
    this.arrIntBinaryOctets.push(this.intBinaryCombined.slice(24,32));
  }
}


export class IP implements IBitGroup{
  arrIntBinaryOctets: Array<Array<number>>;
  intDecimalOctets: Array<number>;
  intBinaryCombined: Array<number>;
  strBinaryCombined: string;
  strBinaryOctets: Array<string>;


  convertDecimalToBinaryString(dec: number, len: number){
    let zeros = "00000000000000000000000000000000"
    let tmp = zeros + dec.toString(2);
    return tmp.slice(tmp.length -len)

  }

  constructor(){
    this.arrIntBinaryOctets = new Array<Array<number>>();
    this.intDecimalOctets = new Array<number>();
    this.intBinaryCombined = new Array<number>();
    this.strBinaryCombined = "";
    this.strBinaryOctets = new Array<string>();

    this.intDecimalOctets.push(Math.floor(Math.random() * 256));
    this.intDecimalOctets.push(Math.floor(Math.random() * 256));
    this.intDecimalOctets.push(Math.floor(Math.random() * 256));
    this.intDecimalOctets.push(Math.floor(Math.random() * 256));

    this.strBinaryOctets.push(this.convertDecimalToBinaryString(this.intDecimalOctets[0],8));
    this.strBinaryOctets.push(this.convertDecimalToBinaryString(this.intDecimalOctets[1],8));
    this.strBinaryOctets.push(this.convertDecimalToBinaryString(this.intDecimalOctets[2],8));
    this.strBinaryOctets.push(this.convertDecimalToBinaryString(this.intDecimalOctets[3],8));

    this.arrIntBinaryOctets.push(this.strBinaryOctets[0].split('').map(x => parseInt(x)));
    this.arrIntBinaryOctets.push(this.strBinaryOctets[1].split('').map(x => parseInt(x)));
    this.arrIntBinaryOctets.push(this.strBinaryOctets[2].split('').map(x => parseInt(x)));
    this.arrIntBinaryOctets.push(this.strBinaryOctets[3].split('').map(x => parseInt(x)));

    this.intBinaryCombined = this.arrIntBinaryOctets[0].concat(this.arrIntBinaryOctets[1],this.arrIntBinaryOctets[2],this.arrIntBinaryOctets[3])

  }


}


export class Network{
  ip:IP;
  cidr: number;
  mask:Mask;
  subnet:Subnet;

  constructor(){
    this.ip = new IP()
    this.cidr = Math.floor(Math.random() * 32);
    this.mask = new Mask(this.cidr);
    this.subnet = new Subnet(this.ip.intBinaryCombined,this.mask.intBinaryCombined)

  }

}

