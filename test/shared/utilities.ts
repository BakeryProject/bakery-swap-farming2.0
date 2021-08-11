import {ERC20, ERC20__factory, IERC721, IERC721__factory} from '../../typechain'
import BigNumber from 'bignumber.js'

const { ethers } = require('hardhat')

export const approveErc20 = async (token: string, to: string, needAllowance = ethers.constants.MaxUint256) => {
  const erc20Factory: ERC20__factory = await ethers.getContractFactory('ERC20')
  const erc20: ERC20 = erc20Factory.attach(token)
  const allowance = await erc20.allowance(await (await ethers.getSigners())[0].getAddress(), to)
  if (allowance.lt(needAllowance)) {
    const approveTx = await erc20.approve(to, ethers.constants.MaxUint256)
    console.log(`approveErc20 ${approveTx.hash}`)
    await approveTx.wait()
  }
  console.log(`approveErc20 done`)
}

export const approveErc721 = async (token: string, to: string, tokenId: number) => {
  const erc721: IERC721 = IERC721__factory.connect(token, await (await ethers.getSigners())[0])
  const approved = await erc721.getApproved(tokenId)
  if (to != approved) {
    const approveTx = await erc721.approve(to, tokenId)
    console.log(`approveErc721 ${approveTx.hash}`)
    await approveTx.wait()
  }
  console.log(`approveErc721 done`)
}

export const erc721SetApprovalForAll = async (token: string, to: string) => {
  const erc721: IERC721 = IERC721__factory.connect(token, await (await ethers.getSigners())[0])
  const isApprovedForAll = await erc721.isApprovedForAll(await (await ethers.getSigners())[0].getAddress(), to)
  if (!isApprovedForAll) {
    const setApprovalForAllTx = await erc721.setApprovalForAll(to, true)
    console.log(`erc721SetApprovalForAll ${setApprovalForAllTx.hash}`)
    await setApprovalForAllTx.wait()
  }
  console.log(`erc721SetApprovalForAll done`)
}
