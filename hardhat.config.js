require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
const { PRIVATE_KEY } = process.env;
const APP_ADDRESS = process.env.APP_ADDRESS;
module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: APP_ADDRESS,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};
