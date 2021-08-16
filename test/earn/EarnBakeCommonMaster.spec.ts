import { expect } from 'chai'
import {
  ERC20,
  ERC20__factory,
  CommonMaster,
  CommonMaster__factory,
} from '../../typechain'
import { BigNumber } from 'ethers'
import { approveErc20 } from '../shared/utilities'

const { ethers, network } = require('hardhat')

const bakeAddress: { [name: string]: string } = {
  bsct: '0xe02df9e3e622debdd69fb838bb799e3f168902c5',
  bsc: '0xe02df9e3e622debdd69fb838bb799e3f168902c5',
}
const gatBnbBlpAddress: { [name: string]: string } = {
  bsct: '0x33e27Cd0b77EF9a8943400e40141cAA1a117925d',
  bsc: '0xAD19E7D581b6f252AFA5aAE3c6C8dC3680A475c3',
}
const tokauBnbBlpAddress: { [name: string]: string } = {
  bsct: '0xD9cA785D9db4719a773a83D1e4dd4e2de2065014',
  bsc: '0xa9F65a288aB4c4FaE59192D3867B5C27136A12a4',
}
const barkDoggyBlpAddress: { [name: string]: string } = {
  bsct: '0x27Cb9353FE2E990Ad3d2211dDe677dc9D199A6B4',
  bsc: '0x39D0Af32f4f5A4A0E462f5f2c91414859cB933F9',
}
const doggyBnbBlpAddress: { [name: string]: string } = {
  bsct: '0xF583DcEb3F38760440F218369449DF7b9A3C1898',
  bsc: '0x15301fD2e1D234fdfc7f5E28a6546F0668ea0f9b',
}
const carBnbBlpAddress: { [name: string]: string } = {
  bsct: '0x930896E4a144A6a0dB7A0046666b84079E52510e',
  bsc: '0xcB34F5F3fFBA8c550c7324d4fa3272E3922CaB4e',
}
const carAddress: { [name: string]: string } = {
  bsct: '0xA942C0A2D901C74ea2382cdD6B82acD771494130',
  bsc: '0x176a25637e5078519230A4d80A7A47350940264a',
}
const pokerBnbBlpAddress: { [name: string]: string } = {
  bsct: '0x21fCEB6B694949F8abfAc84BE855daF641931e00',
  bsc: '0x5a8e5f77a2922395ADCdf54ce8c0593882bD0Cfc',
}
const pokerAddress: { [name: string]: string } = {
  bsct: '0x4d4e595d643dc61EA7FCbF12e4b1AAA39f9975B8',
  bsc: '0x82caA54eC9aAF213FF611aF63d4B650ACcFF53ae',
}
const soccerBnbBlpAddress: { [name: string]: string } = {
  bsct: '0x7aded9622DED9E2CA77E2058Ba23d003A771BB8a',
  bsc: '0xb487351823F3e8f88b10ADbF96d4a4E39Daf0da5',
}
const soccerAddress: { [name: string]: string } = {
  bsct: '0x338d44d19c8d45ed9771b8D2B95D988F0e42187F',
  bsc: '0x338d44d19c8d45ed9771b8D2B95D988F0e42187F',
}
const bakeBnbBlpAddress: { [name: string]: string } = {
  bsct: '0x47d34Fd4f095767E718F110AfEf030bb18E8C48F',
  bsc: '0xc2Eed0F5a0dc28cfa895084bC0a9B8B8279aE492',
}
const busdBnbBlpAddress: { [name: string]: string } = {
  bsct: '0xAf5e8AA68dd1b61376aC4F6fa4D06A5A4AB6cafD',
  bsc: '0x559e3D9611E9cB8a77c11335Bdac49621382188B',
}
const ethBnbBlpAddress: { [name: string]: string } = {
  bsct: '0x6f469DAE7F333EdfC98c6057F12E2A7521a9861c',
  bsc: '0xa50b9c5DB61C855D5939aa1a66B26Df77745809b',
}
const btcBnbBlpAddress: { [name: string]: string } = {
  bsct: '0xf6fD8961F129955A51ba3B392B40594B499dEF3a',
  bsc: '0x58521373474810915b02FE968D1BCBe35Fc61E09',
}
const usdtBnbBlpAddress: { [name: string]: string } = {
  bsct: '0xa38661A1Aa00ab39ACD6f276Ed6a21C90A83Ae6b',
  bsc: '0x9Ec271C041a18aA7beF070A1F196eea1D06Ab7cb',
}

const bakeMuskMixerCommonStakeERC721EarnBakeAddress: { [name: string]: string } = {
  bsct: '0xB3561Dd2eeBc78E4C82B701aeE78400F5a9dcBa6',
  bsc: '0xB3561Dd2eeBc78E4C82B701aeE78400F5a9dcBa6', // TODO
}

const doggyEquipmentCommonStakeERC721EarnBakeAddress: { [name: string]: string } = {
  bsct: '0x2a39264488095Aa2c8196fA5d753C5b52AAB8544',
  bsc: '0x2a39264488095Aa2c8196fA5d753C5b52AAB8544', // TODO
}

const barkingNFTCommonStakeERC721EarnBakeAddress: { [name: string]: string } = {
  bsct: '0x6aea9F4dFd1e5e96d8AC914EdE09ED50f4F2aFd1',
  bsc: '0x6aea9F4dFd1e5e96d8AC914EdE09ED50f4F2aFd1', // TODO
}

const doggyNFTCommonStakeERC721EarnBakeAddress: { [name: string]: string } = {
  bsct: '0xB6E2b1ea5b095e126B9fb19ea104763dca3111Cc',
  bsc: '0xB6E2b1ea5b095e126B9fb19ea104763dca3111Cc', // TODO
}

const bakerySoccerCommonStakeERC721EarnBakeAddress: { [name: string]: string } = {
  bsct: '0xdce54e2AA153699968553b1f856c029a74EC4Ac6',
  bsc: '0xdce54e2AA153699968553b1f856c029a74EC4Ac6', // TODO
}

const carNFTCommonStakeERC721EarnBakeAddress: { [name: string]: string } = {
  bsct: '0x95Ee9f566A40FC2419B9cC2caFD89c9c9EFDA503',
  bsc: '0x95Ee9f566A40FC2419B9cC2caFD89c9c9EFDA503', // TODO
}

const comboNFTCommonStakeERC721EarnBake: { [name: string]: string } = {
  bsct: '0x4D4fbF44F8db31A277D16430B7601dA5911948e2',
  bsc: '0x4D4fbF44F8db31A277D16430B7601dA5911948e2', // TODO
}

const pokerCardCommonStakeERC721EarnBakeAddress: { [name: string]: string } = {
  bsct: '0xE7dDC412F226FDAF379F119334ce1f31C4AFD609',
  bsc: '0xE7dDC412F226FDAF379F119334ce1f31C4AFD609', // TODO
}

const earnBakeMasterAddress: { [name: string]: string } = {
  bsct: '0x61d777dC41Bb391c491a644974C18fC069Ad3e62',
  bsc: '0x61d777dC41Bb391c491a644974C18fC069Ad3e62', // TODO
}

let commonMaster: CommonMaster
let erc20Factory: ERC20__factory
let token: ERC20

describe('EarnBakeCommonMaster', () => {
  beforeEach(async () => {
    const commonMasterFactory: CommonMaster__factory = await ethers.getContractFactory('CommonMaster')
    commonMaster = commonMasterFactory.attach(earnBakeMasterAddress[network.name])
    erc20Factory = await ethers.getContractFactory('ERC20')
    token = erc20Factory.attach(bakeAddress[network.name])
  })

  it('transferTokenToMaster', async () => {
    const totalToBeMintAmount = await commonMaster.totalToBeMintAmount()
    const transferTx = await token.transfer(commonMaster.address, totalToBeMintAmount)
    console.log(`transferTokenToMaster ${totalToBeMintAmount} ${transferTx.hash}`)
    await transferTx.wait()
    console.log(`transferTokenToMaster done`)
    /**
     transferTokenToMaster 50000000000000000000000 0xeac948348673d1bf6e585d44416240a361ccef07c2d944a1e6c8c464ff8565ba
     transferTokenToMaster done
     */
  })

  it('setStartBlock', async () => {
    const setStartBlockTx = await commonMaster.setStartBlock(9288340)
    console.log(`setStartBlock ${setStartBlockTx.hash}`)
    /**
     */
  })

  it('setTokenPerBlock', async () => {
    const setTokenPerBlockTx = await commonMaster.setTokenPerBlock(
      BigNumber.from(30000).mul(BigNumber.from(10).pow(18)).div(28800)
    )
    console.log(`setTokenPerBlockTx ${setTokenPerBlockTx.hash}`)
    /**
     */
  })

  it('setTotalToBeMintAmount', async () => {
    const totalToBeMintAmount = await commonMaster.totalToBeMintAmount()
    const setTotalToBeMintAmountTx = await commonMaster.setTotalToBeMintAmount(totalToBeMintAmount.add(totalToBeMintAmount))
    console.log(`setTotalToBeMintAmount ${setTotalToBeMintAmountTx.hash}`)
    /**
     */
  })

  it('updateCommonMasterInfo', async () => {
    const setTokenPerBlockTx = await commonMaster.setTokenPerBlock(
      BigNumber.from(85500000000).mul(3).mul(BigNumber.from(10).pow(18)).div(28800)
    )
    console.log(`setTokenPerBlockTx ${setTokenPerBlockTx.hash}`)
    const setTotalToBeMintAmountTx = await commonMaster.setTotalToBeMintAmount(
      BigNumber.from(85500000000).mul(3).mul(50).mul(BigNumber.from(10).pow(18))
    )
    console.log(`setTotalToBeMintAmountTx ${setTotalToBeMintAmountTx.hash}`)
    /**
     */
  })

  it('addNftPools', async () => {
    // let tx = await commonMaster.add(10, bakeMuskMixerCommonStakeERC721EarnBakeAddress[network.name], false)
    // console.log(`add ${tx.hash}`)
    // await tx.wait()
    // tx = await commonMaster.add(10, doggyEquipmentCommonStakeERC721EarnBakeAddress[network.name], false)
    // console.log(`add ${tx.hash}`)
    // // await tx.wait()
    // console.log(`add done`)
    // tx = await commonMaster.add(10, barkingNFTCommonStakeERC721EarnBakeAddress[network.name], false)
    // console.log(`add ${tx.hash}`)
    // // await tx.wait()
    // console.log(`add done`)
    // tx = await commonMaster.add(10, doggyNFTCommonStakeERC721EarnBakeAddress[network.name], false)
    // console.log(`add ${tx.hash}`)
    // // await tx.wait()
    // console.log(`add done`)
    // tx = await commonMaster.add(10, bakerySoccerCommonStakeERC721EarnBakeAddress[network.name], false)
    // console.log(`add ${tx.hash}`)
    // // await tx.wait()
    // console.log(`add done`)

    let tx = await commonMaster.add(10, carNFTCommonStakeERC721EarnBakeAddress[network.name], false)
    console.log(`add ${tx.hash}`)
    tx = await commonMaster.add(200, comboNFTCommonStakeERC721EarnBake[network.name], false)
    console.log(`add ${tx.hash}`)
    tx = await commonMaster.add(10, pokerCardCommonStakeERC721EarnBakeAddress[network.name], false)
    console.log(`add ${tx.hash}`)
    // await tx.wait()
    /**
     */
  })

  it('add', async () => {
    let tx = await commonMaster.add(200, bakeBnbBlpAddress[network.name], false)
    console.log(`add ${tx.hash}`)
    await tx.wait()
    console.log(`add done`)
    tx = await commonMaster.add(30, busdBnbBlpAddress[network.name], false)
    console.log(`add ${tx.hash}`)
    await tx.wait()
    tx = await commonMaster.add(10, ethBnbBlpAddress[network.name], false)
    console.log(`add ${tx.hash}`)
    await tx.wait()
    console.log(`add done`)
    tx = await commonMaster.add(10, btcBnbBlpAddress[network.name], false)
    console.log(`add ${tx.hash}`)
    await tx.wait()
    console.log(`add done`)
    tx = await commonMaster.add(200, bakeAddress[network.name], false)
    console.log(`add ${tx.hash}`)
    await tx.wait()
    console.log(`add done`)
    tx = await commonMaster.add(200, comboNFTCommonStakeERC721EarnBake[network.name], false)
    console.log(`add ${tx.hash}`)
    await tx.wait()
    console.log(`add done`)
    tx = await commonMaster.add(10, soccerAddress[network.name], false)
    console.log(`add ${tx.hash}`)
    await tx.wait()
    console.log(`add done`)
    tx = await commonMaster.add(10, bakerySoccerCommonStakeERC721EarnBakeAddress[network.name], false)
    console.log(`add ${tx.hash}`)
    await tx.wait()
    console.log(`add done`)
    tx = await commonMaster.add(10, pokerBnbBlpAddress[network.name], false)
    console.log(`add ${tx.hash}`)
    await tx.wait()
    console.log(`add done`)
    tx = await commonMaster.add(10, pokerAddress[network.name], false)
    console.log(`add ${tx.hash}`)
    await tx.wait()
    console.log(`add done`)
    tx = await commonMaster.add(10, carBnbBlpAddress[network.name], false)
    console.log(`add ${tx.hash}`)
    await tx.wait()
    console.log(`add done`)
    tx = await commonMaster.add(10, carAddress[network.name], false)
    console.log(`add ${tx.hash}`)
    await tx.wait()
    console.log(`add done`)
    tx = await commonMaster.add(10, carNFTCommonStakeERC721EarnBakeAddress[network.name], false)
    console.log(`add ${tx.hash}`)
    await tx.wait()
    console.log(`add done`)
    tx = await commonMaster.add(30, doggyBnbBlpAddress[network.name], false)
    console.log(`add ${tx.hash}`)
    await tx.wait()
    console.log(`add done`)
    tx = await commonMaster.add(10, doggyNFTCommonStakeERC721EarnBakeAddress[network.name], false)
    console.log(`add ${tx.hash}`)
    await tx.wait()
    console.log(`add done`)
    tx = await commonMaster.add(10, barkDoggyBlpAddress[network.name], false)
    console.log(`add ${tx.hash}`)
    await tx.wait()
    console.log(`add done`)
    tx = await commonMaster.add(10, barkingNFTCommonStakeERC721EarnBakeAddress[network.name], false)
    console.log(`add ${tx.hash}`)
    await tx.wait()
    console.log(`add done`)
    tx = await commonMaster.add(10, tokauBnbBlpAddress[network.name], false)
    console.log(`add ${tx.hash}`)
    await tx.wait()
    console.log(`add done`)
    tx = await commonMaster.add(10, pokerCardCommonStakeERC721EarnBakeAddress[network.name], false)
    console.log(`add ${tx.hash}`)
    await tx.wait()
    console.log(`add done`)
    tx = await commonMaster.add(10, doggyEquipmentCommonStakeERC721EarnBakeAddress[network.name], false)
    console.log(`add ${tx.hash}`)
    await tx.wait()
    console.log(`add done`)
    tx = await commonMaster.add(10, gatBnbBlpAddress[network.name], false)
    console.log(`add ${tx.hash}`)
    await tx.wait()
    console.log(`add done`)
    tx = await commonMaster.add(10, bakeMuskMixerCommonStakeERC721EarnBakeAddress[network.name], false)
    console.log(`add ${tx.hash}`)
    await tx.wait()
    console.log(`add done`)
    tx = await commonMaster.add(10, usdtBnbBlpAddress[network.name], false)
    console.log(`add ${tx.hash}`)
    await tx.wait()
    console.log(`add done`)
    tx = await commonMaster.add(10, soccerBnbBlpAddress[network.name], false)
    console.log(`add ${tx.hash}`)
    await tx.wait()
    console.log(`add done`)
    /**
     */
  })

  it('set', async () => {
    let tx = await commonMaster.set(bakeAddress[network.name], 21, false)
    console.log(`set ${tx.hash}`)
    await tx.wait()
    console.log(`set done`)
    /**
     */
  })

  it('updatePool', async () => {
    let tx = await commonMaster.updatePool(bakeAddress[network.name])
    console.log(`updatePool ${tx.hash}`)
    await tx.wait()
    console.log(`updatePool done`)
    /**
     */
  })
  it('setLastRewardBlock', async () => {
    let tx = await commonMaster.setLastRewardBlock(bakeAddress[network.name], 9289235)
    console.log(`updatePool ${tx.hash}`)
    await tx.wait()
    console.log(`updatePool done`)
    /**
     */
  })

  it('pendingToken', async () => {
    let pendingToken = await commonMaster.pendingToken(bakeAddress[network.name], '0x05c8c6392380f9613b234b5e3edaacb54a483ec5')
    console.log(`pendingToken ${pendingToken}`)
    /**
     */
  })

  it('poolUserInfoMap', async () => {
    let {amount, rewardDebt} = await commonMaster.poolUserInfoMap(bakeAddress[network.name], '0x05c8c6392380f9613b234b5e3edaacb54a483ec5')
    console.log(`poolUserInfoMap ${amount} ${rewardDebt}`)
    /**
     */
  })


  it('info', async () => {
    const mintedAmount = await commonMaster.mintedAmount()
    const totalToBeMintAmount = await commonMaster.totalToBeMintAmount()
    const tokenPerBlock = await commonMaster.tokenPerBlock()
    console.log(`info ${mintedAmount} ${totalToBeMintAmount} ${tokenPerBlock}`)
    /**
     */
  })

  it('transferOwnership', async () => {
    const owner = await commonMaster.owner()
    console.log(`owner ${owner}`)
    let tx = await commonMaster.transferOwnership('0x5695E108c4F5E5C46B570593e754F0Ba4D92E2f0')
    console.log(`transferOwnership ${tx.hash}`)
    await tx.wait()
    /**
     */
  })

})
