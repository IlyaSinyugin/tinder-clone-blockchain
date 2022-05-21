require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: "contracts/.env" });

const ALCHEMY_API_URL = process.env.ALCHEMY_API_URL;
const RINKEBY_PRIVATE_KEY = process.env.RINKEBY_PRIVATE_KEY;

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: ALCHEMY_API_URL,
      accounts: [RINKEBY_PRIVATE_KEY],
    },
  },
};
