const StableCoin = artifacts.require("StableCoin");

module.exports = function(deployer, network, accounts) {
  const initialOwner = accounts[0];  // Use the first account as the initial owner
  deployer.deploy(StableCoin, initialOwner, {
    gas: 3000000,
    gasPrice: 100000000000  // 100 Gwei
  });
};
