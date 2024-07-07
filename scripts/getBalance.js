// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/Alien.sol/Alien.json");

const tokenAddress = "0x7cDD1599D72391B3056146ea8805055ae44a6FD6"; 
const tokenABI = tokenContractJSON.abi;
const walletAddress = "your wallet address"; 

async function main() {

    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);

    console.log("Alien NFTs balance: " + await token.balanceOf(walletAddress) + "fxAH");
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
