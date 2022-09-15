require('dotenv').config()
require ( "@nomicfoundation/hardhat-chai-matchers");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-truffle5");
require("@nomiclabs/hardhat-etherscan");
require("hardhat-deploy");
require("@nomicfoundation/hardhat-toolbox");
const ALCHEMY_API_KEY = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY
const GOERLI_PRIVATE_KEY = "0x"+"175d6b569fc1d786ab268b2d3c037d70fbd2e029030a021c48b1ace9d3e3f286"
const privateKey1 = process.env.RINKEBY_PRIVATE_KEY


// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

module.exports = {
  solidity: {
    version: '0.8.9',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  defaultNetwork: 'rinkeby',
  networks: {
    hardhat: {},
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/2x9GUeyy3j8pckxtQOYqcCYanVA6a7LC`,
      accounts: [GOERLI_PRIVATE_KEY]
      } 
  },

  paths: {
    sources: './contracts',
    tests: './test',
    cache: './cache',
    artifacts: './artifacts'
  },
  mocha: {
    timeout: 40000
  },
  etherscan: {
    apiKey: `K11WV37JFKGS2G436J1EKF1ZZAPCSY7J7R`
  }
}
