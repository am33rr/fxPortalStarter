const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
  const privateKey = process.env.PRIVATE_KEY;
  const networkAddress = "https://ethereum-sepolia-rpc.publicnode.com";

  const provider = new ethers.providers.JsonRpcProvider(networkAddress);
  const signer = new ethers.Wallet(privateKey, provider);

  const contractAddress ="0xB83f211B77B6937d74511140DC580247aF36cAD7";

  const alienContract = await ethers.getContractFactory("Alien", signer);
  const ahc = await alienContract.attach(contractAddress);

  await ahc.mint(5);
  console.log("NFTs batch minted on sepolia");
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
