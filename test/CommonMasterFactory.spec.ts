import { expect } from 'chai'
import { BigNumber } from 'ethers'

const { ethers, network } = require('hardhat')

import { CommonMasterFactory, CommonMasterFactory__factory} from '../typechain'

const BAKE: { [name: string]: string } = {
  bsct: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  bsc: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
}

const commonMasterFactoryAddress: { [name: string]: string } = {
  bsct: '0xD4D92f7d984A2492c17723736125536325bE4f48',
  bsc: '0xD4D92f7d984A2492c17723736125536325bE4f48', // TODO
}

const earnBakeMasterAddress: { [name: string]: string } = {
  bsct: '0x61d777dC41Bb391c491a644974C18fC069Ad3e62',
  bsc: '0x61d777dC41Bb391c491a644974C18fC069Ad3e62', // TODO
}

let commonMasterFactory: CommonMasterFactory

describe('CommonMasterFactory', () => {
  beforeEach(async () => {
    const commonMasterFactoryFactory: CommonMasterFactory__factory = await ethers.getContractFactory(
      'CommonMasterFactory'
    )
    commonMasterFactory = commonMasterFactoryFactory.attach(commonMasterFactoryAddress[network.name])
  })

  it('createEarnBake2.0CommonMaster', async () => {
    const createCommonMasterTx = await commonMasterFactory.createCommonMaster(
        BAKE[network.name],
      BigNumber.from(10953612),
      BigNumber.from(10).mul(BigNumber.from(10).pow(18)).div(28800),
      BigNumber.from(10).mul(BigNumber.from(10).pow(18)).div(28800),
      BigNumber.from(1000).mul(50).mul(BigNumber.from(10).pow(18)),
    )
    console.log(`createEarnBake2.0CommonMaster ${createCommonMasterTx.hash}`)
    await createCommonMasterTx.wait()
    console.log(`createEarnBake2.0CommonMaster done`)
    /**
     // bsct 0x61d777dC41Bb391c491a644974C18fC069Ad3e62
     createEarnBake2.0CommonMaster 0x44056a68ebcf72b4b7da5e8eb2a8cb7e3435d3cd1cd76640f2ce137f50fa8c03
     createEarnBake2.0CommonMaster done
     */
  })

})
