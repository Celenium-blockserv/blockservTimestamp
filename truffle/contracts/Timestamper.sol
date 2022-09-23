// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

// import "@openzeppelin/contracts/access/Ownable.sol";

import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";

contract Timestamper is Ownable {
  event Timestamp(uint256 indexed hash);

  struct ProofOfOwnership {
    uint timestamp;
    uint256 hash;
  }

  mapping ( address => ProofOfOwnership[]) proofs;

  function timestamp(address _ownerAddress, uint256 hash) public onlyOwner {

    ProofOfOwnership memory currentProofOfOwnership;
    currentProofOfOwnership.timestamp = block.timestamp;
    currentProofOfOwnership.hash = hash;

    proofs[_ownerAddress].push(currentProofOfOwnership);
    emit Timestamp(hash);
  }

  function getProofOfOwnership(address _ownerAddress) public view returns (ProofOfOwnership[] memory) {
    return proofs[_ownerAddress];
  }

}
