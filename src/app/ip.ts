export class Ip {
  decimalIP: Array<number>;
  binaryIP: Array<Array<number>>;
  
  constructor() {
    this.decimalIP = this.newDecimalIP();
    this.binaryIP = this.decimalIP.map(x => {
      return x.toString(2)
      .split('')
      .map(y => parseInt(y))
    });
  }

  newDecimalIP(){
    let ip = [];
    ip.push(Math.floor(Math.random() * 256));
    ip.push(Math.floor(Math.random() * 256));
    ip.push(Math.floor(Math.random() * 256));
    ip.push(Math.floor(Math.random() * 256));
    return ip;
  }

}
