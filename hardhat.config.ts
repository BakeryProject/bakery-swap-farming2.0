import { HardhatUserConfig } from 'hardhat/types/config'

import 'hardhat-deploy-ethers'
import '@nomiclabs/hardhat-etherscan'
import '@nomiclabs/hardhat-solhint'
import 'hardhat-abi-exporter'
import 'hardhat-contract-sizer'
import 'hardhat-deploy'
import 'hardhat-docgen'
import 'hardhat-gas-reporter'
import '@typechain/hardhat'
import 'hardhat-watcher'
import 'solidity-coverage'

const INFURA_API_KEY = 'YOUR_API_KEY'
const PRIVATE_KEY: string = process.env.PRIVATE_KEY || '0x1a'
const ETHERSCAN_API_KEY = 'YOUR_API_KEY'

const config: HardhatUserConfig = {
  paths: {
    sources: './contracts',
  },
  defaultNetwork: 'hardhat',
  solidity: {
    version: '0.6.6',
    settings: {
      optimizer: {
        enabled: true,
        runs: 999999,
      },
      evmVersion: 'istanbul',
    },
  },
  networks: {
    rinkeby: {
      chainId: 4,
      url: `https://rinkeby.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [PRIVATE_KEY],
    },
    bsct: {
      chainId: 97,
      url: 'https://data-seed-prebsc-1-s1.binance.org:8545',
      accounts: [PRIVATE_KEY],
    },
    bsc: {
      chainId: 56,
      url: 'https://bsc-dataseed.binance.org',
      accounts: [PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  typechain: {
    outDir: 'typechain',
    target: 'ethers-v5',
  },
  gasReporter: {
    currency: 'USD',
    gasPrice: 21,
    enabled: true,
  },
  contractSizer: {
    alphaSort: true,
    runOnCompile: true,
    disambiguatePaths: false,
  },
}

export default config
