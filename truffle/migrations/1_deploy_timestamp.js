const Timestamper = artifacts.require("Timestamper");

module.exports = function (deployer) {
  deployer.deploy(Timestamper);
};
