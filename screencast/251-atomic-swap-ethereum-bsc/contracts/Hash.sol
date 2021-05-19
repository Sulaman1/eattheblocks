pragma solidity ^0.8.0; 

contract Hash{
    function createHash(string memory _secret) external pure returns(bytes32) {
        return keccak256(abi.encodePacked(_secret));
    }
}