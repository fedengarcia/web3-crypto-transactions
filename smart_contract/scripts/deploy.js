

const main = async () => {

  const Transactiosn = await hre.ethers.getContractFactory("Transactions");
  const transactions = await Transactiosn.deploy();

  await transactions.deployed();

  console.log(
    `Transactions deployed to: ${transactions.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
const runMain = async () => {
  try {
    await main();
    process.exit(0)
  } catch (error) {
    console.log("Failed to deploy with error:", error)
    process.exit(1)
  }
}


runMain();