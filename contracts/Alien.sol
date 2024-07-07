// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

import "erc721a/contracts/ERC721A.sol";

contract Alien is ERC721A{

    address public owner;
    string baseUrl="https://gateway.pinata.cloud/ipfs/QmUpnNz7dTZcfcRQdSaZ5a24KqbaW91c729AMiBH7uvDGE";
    uint256 public max;
    string public prompt_description ;

    constructor() ERC721A("Alien", "AH") {
        owner = msg.sender;
        prompt_description ="Aliens ruling humans";
        max = 5;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
      _;
    }

    function mint(uint256 mint_amt) external payable onlyOwner{
        if(totalSupply() + mint_amt > max){
         revert ("Max is 5");
        } 
        _mint(msg.sender, mint_amt);
    }


    function _baseURI() internal view override returns (string memory){
        return baseUrl;
    }

    function promptDescription() external view returns (string memory) {
        return prompt_description;
    }
}
