import { CommonStakeERC721EarnBake, CommonStakeERC721EarnBake__factory } from '../../typechain'
import { BigNumber } from 'ethers'
import { approveErc20, erc721SetApprovalForAll } from '../shared/utilities'
const { ethers, network, upgrades } = require('hardhat')

const doggyEquipmentAddress: { [name: string]: string } = {
  bsct: '0x043E2Dd8C1059637B10131c01CD294A5d2C0fbdE',
  bsc: '0x15C7160F82DEF33AF05B7348843f3Ad647b4d012',
}

const doggyEquipmentCommonStakeERC721EarnBakeAddress: { [name: string]: string } = {
  bsct: '0xbC930bA72135f10239DD99B76a3cbc1be6CE9726',
  bsc: '0xbC930bA72135f10239DD99B76a3cbc1be6CE9726', // TODO
}

let commonStakeERC721EarnBake: CommonStakeERC721EarnBake
describe('DoggyEquipmentCommonStakeERC721EarnBake', () => {
  beforeEach(async () => {
    const factory: CommonStakeERC721EarnBake__factory = await ethers.getContractFactory('CommonStakeERC721EarnBake')
    commonStakeERC721EarnBake = factory.attach(doggyEquipmentCommonStakeERC721EarnBakeAddress[network.name])
  })

  it('stake', async () => {
    await erc721SetApprovalForAll(doggyEquipmentAddress[network.name], commonStakeERC721EarnBake.address)
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
