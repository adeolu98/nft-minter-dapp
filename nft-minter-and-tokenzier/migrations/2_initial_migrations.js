const NFTMINTER = artifacts.require('NFTMINTER');
const name = 'NFTMINter';
const symbol = 'NFTM';

module.exports = function (deployer) {
  deployer.deploy(NFTMINTER, name, symbol);
};
