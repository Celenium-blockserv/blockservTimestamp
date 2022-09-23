const Timestamper = artifacts.require("Timestamper");

contract('Timestamper', (accounts) => {
  it('should read newly written timestamp', async() => {
    const timestampInstance = await Timestamper.deployed();

    await timestampInstance.timestamp(accounts[0], 12345, {from: accounts[0]})

    let result = await timestampInstance.getProofOfOwnership(accounts[0], {from: accounts[0]})

    console.log(result[0].timestamp)
    assert.equal(result[0].hash, 12345, "Could not get hash");
    console.log(new Date(result[0].timestamp * 1000).toLocaleString())
  });

});
