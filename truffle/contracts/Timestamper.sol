// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

// import "@openzeppelin/contracts/access/Ownable.sol";

import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";

contract Timestamper is Ownable {
  struct ProofOfOwnership {
    uint timestamp;
    uint blockNumber;
    string hash;
  }

  mapping ( address => ProofOfOwnership[]) proofs;

  function timestamp(address _ownerAddress, string memory hash) public onlyOwner {

    ProofOfOwnership memory currentProofOfOwnership;
    currentProofOfOwnership.timestamp = block.timestamp;
    currentProofOfOwnership.hash = hash;
    currentProofOfOwnership.blockNumber = block.number;

    proofs[_ownerAddress].push(currentProofOfOwnership);
  }

  function getProofOfOwnership(address _ownerAddress) public view returns (ProofOfOwnership[] memory) {
    return proofs[_ownerAddress];
  }

}
