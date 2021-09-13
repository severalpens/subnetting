import { IP, Network } from './network';

describe('Ip', () => {
  it('should create an instance', () => {
    expect(new Network()).toBeTruthy();
  });
});

describe('BitGroup', () => {
  it('should generate random 32 bit string', () => {
    let bitGroup = new IP();
    console.log(bitGroup);
    expect(bitGroup.bitsString.length).toEqual(32);
  });
});
