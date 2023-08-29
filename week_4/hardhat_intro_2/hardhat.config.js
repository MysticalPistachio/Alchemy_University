require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.4",
  networks: {
    goerli: {
      url: process.env.TEST_GOERLI_URL,
      accounts: [process.env.TEST_PRIVATE_KEY]
    }
  }
};
