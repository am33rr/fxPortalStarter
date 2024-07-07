const hre = require("hardhat");

async function main() {

  const alienContract = await hre.ethers.getContractFactory("Alien");
  const ahc=await alienContract.deploy();
  await ahc.deployed();

  console.log("Alien Ruling Humans Contract Address:", ahc.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
