const HDWalletProvider = require('@truffle/hdwallet-provider');
const infuraKey = '8e42740b2a994ab18c0abafe26b10054';
const mnemonic = 'baby brisk whisper opinion protect grape apple forest grain lady detail faith';

module.exports = {
  networks: {
    polygon: {
      provider: () => new HDWalletProvider(mnemonic, `https://polygon-amoy.infura.io/v3/${infuraKey}`),
      network_id: 80002,  // Polygon Testnet ID
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
  },
  compilers: {
    solc: {
      version: "^0.8.0"
    }
  }
};
