import { CommonStakeERC721EarnBake, CommonStakeERC721EarnBake__factory } from '../../typechain'
import { BigNumber } from 'ethers'
import { approveErc20, erc721SetApprovalForAll } from '../shared/utilities'
const { ethers, network, upgrades } = require('hardhat')
const bakeMuskMixerAddress: { [name: string]: string } = {
  bsct: '0xd1B12D0DbeF4e725A59381F68ceA83014CdEf80b',
  bsc: '0x6EFdD0380C9DdE9c50ae99669d8FFd9439EFCDBd',
}

const bakeMuskMixerCommonStakeERC721EarnBakeAddress: { [name: string]: string } = {
  bsct: '0xC581a6e2Bc2066ab88093833e25552e224966548',
  bsc: '0xC581a6e2Bc2066ab88093833e25552e224966548', // TODO
}

let commonStakeERC721EarnBake: CommonStakeERC721EarnBake
describe('BakeMuskMixerCommonStakeERC721EarnBake', () => {
  beforeEach(async () => {
    const factory: CommonStakeERC721EarnBake__factory = await ethers.getContractFactory('CommonStakeERC721EarnBake')
    commonStakeERC721EarnBake = factory.attach(bakeMuskMixerCommonStakeERC721EarnBakeAddress[network.name])
  })

  it('stake', async () => {
    await erc721SetApprovalForAll(bakeMuskMixerAddress[network.name], commonStakeERC721EarnBake.address)
    const stakeTx = await commonStakeERC721EarnBake.stake(1)
    console.log(`stake ${stakeTx.hash}`)
    await stakeTx.wait()
    console.log(`stake done`)
    /**
     */
  })

  it('harvest', async () => {
    const harvestTx = await commonStakeERC721EarnBake.harvest()
    console.log(`harvest ${harvestTx.hash}`)
    await harvestTx.wait()
    console.log(`harvest done`)
    /**
     */
  })

  it('unstake', async () => {
    const unstakeTx = await commonStakeERC721EarnBake.unstake(1)
    console.log(`unstake ${unstakeTx.hash}`)
    await unstakeTx.wait()
    console.log(`unstake done`)
    /**
     */
  })
})
