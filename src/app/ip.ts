
export class Ip {
  decimalIP: Array<number>;
  binaryIP: Array<Array<number>>;
  mask: Array<number>;

  constructor() {
    this.decimalIP = this.newDecimalIP();
    this.mask = this.newMask();
    this.binaryIP = this.decimalIP.map(x => {
      return x.toString(2)
        .split('')
        .map(y => parseInt(y))
    });
  }

  newMask() {
    let cidr = Math.floor(Math.random() * 33);
    let mask = [];
    for (let i = 1; i <= 32; i++) {
      i <= cidr ? mask.push(1) :  mask.push(0);
    }
    return mask;
  }

  newDecimalIP() {
    let ip = [];
    ip.push(Math.floor(Math.random() * 256));
    ip.push(Math.floor(Math.random() * 256));
    ip.push(Math.floor(Math.random() * 256));
    ip.push(Math.floor(Math.random() * 256));
    return ip;
  }

}
