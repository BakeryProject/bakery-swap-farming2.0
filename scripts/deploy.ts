import { BigNumber } from 'ethers'

const { ethers, network } = require('hardhat')

const BAKE: { [name: string]: string } = {
  bsct: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  bsc: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
}

const commonMasterFactoryAddress: { [name: string]: string } = {
  bsct: '0xD4D92f7d984A2492c17723736125536325bE4f48',
  bsc: '0xD4D92f7d984A2492c17723736125536325bE4f48', // TODO
}

const commonStakeERC721EarnBakeFactoryAddress: { [name: string]: string } = {
  bsct: '0x5138202750fB67b4f9D9316Ee7805F0cEC2Bd1E1',
  bsc: '0x5138202750fB67b4f9D9316Ee7805F0cEC2Bd1E1', // TODO
}

const defaultGetStakingPowerAddress: { [name: string]: string } = {
  bsct: '0x7ca5A0c78d2fB3bc9eCC68860c308DCbb18bD0fd',
  bsc: '0x7ca5A0c78d2fB3bc9eCC68860c308DCbb18bD0fd', // TODO
}

const dishMasterAddress: { [name: string]: string } = {
  bsct: '0x22CbdB1Da36B35725d1D75A7784271EE3f869b30',
  bsc: '0x7145319189629AFcF31754D8AC459265FCa4cF91',
}

const getCarNFTStakingPowerAddress: { [name: string]: string } = {
  bsct: '0xC8eEDC71Cc45BC7B59b5E141374ac123cC0ba4C6',
  bsc: '0xC8eEDC71Cc45BC7B59b5E141374ac123cC0ba4C6', // TODO
}

const getComboStakingPowerAddress: { [name: string]: string } = {
  bsct: '0xEcB7877F445bC51C81F66C965B920316c984198f',
  bsc: '0xEcB7877F445bC51C81F66C965B920316c984198f', // TODO
}

const getPokerCardStakingPowerAddress: { [name: string]: string } = {
  bsct: '0xE8FDd6EFaC049c6FaA28031cCAf0F84513D6Dff9',
  bsc: '0xE8FDd6EFaC049c6FaA28031cCAf0F84513D6Dff9', // TODO
}

async function deployContract(name: string, args: any[] = []) {
  console.log(`start deployContract ${name}, ${args}`)
  // @ts-ignores
  const factory = await ethers.getContractFactory(name)

  if (args.length > 0) {
    const constructorArgumentsABIEncoded = ethers.utils.defaultAbiCoder.encode(
      factory.interface.fragments[0].inputs,
      args
    )

    console.log(`contract ${name} constructorArgumentsABIEncoded: ${constructorArgumentsABIEncoded}`)
  }

  // If we had constructor arguments, they would be passed into deploy()
  const contract = await factory.deploy(...args)

  // The address the Contract WILL have once mined
  console.log(`contract ${name} address ${contract.address}`)

  // The transaction that was sent to the network to deploy the Contract
  console.log(`contract ${name} deploy transaction hash ${contract.deployTransaction.hash}`)

  // The contract is NOT deployed yet; we must wait until it is mined
  await contract.deployed()
  console.log(`finish deployContract ${name}`)
}

async function main() {
  // await deployContract('CommonMasterFactory')
  /***
   start deployContract CommonMasterFactory,
   contract CommonMasterFactory address 0xD4D92f7d984A2492c17723736125536325bE4f48
   contract CommonMasterFactory deploy transaction hash 0x7e5497c770cb625519718dda7d70946b4ca6aeebaf3587ece1bed677ee412168
   finish deployContract CommonMasterFactory
   */
  // await deployContract('CommonStakeERC721EarnBakeFactory')
  /**
   start deployContract CommonStakeERC721EarnBakeFactory,
   contract CommonStakeERC721EarnBakeFactory address 0xbFBe1a39590e15AECb86c0EdC686f30f5737faDf
   contract CommonStakeERC721EarnBakeFactory deploy transaction hash 0x4200fd3ca0ef62197976b31897e710aa15e70d80934c3dcc11285315b5dcb802
   finish deployContract CommonStakeERC721EarnBakeFactory
   start deployContract CommonStakeERC721EarnBakeFactory,
   contract CommonStakeERC721EarnBakeFactory address 0x5138202750fB67b4f9D9316Ee7805F0cEC2Bd1E1
   contract CommonStakeERC721EarnBakeFactory deploy transaction hash 0xab080c5b13da3873fe7e21865ebf37822b708791b8160e140bafcd5e94f14a85
   finish deployContract CommonStakeERC721EarnBakeFactory
   */
  // await deployContract('DefaultGetStakingPower')
  /**
   start deployContract DefaultGetStakingPower,
   contract DefaultGetStakingPower address 0x7ca5A0c78d2fB3bc9eCC68860c308DCbb18bD0fd
   contract DefaultGetStakingPower deploy transaction hash 0xd099dd27c82c8225c090540c0d85613226d821b9cf1960e091c1099d4e09a93d
   finish deployContract DefaultGetStakingPower
   */
  // await deployContract('GetCarNFTStakingPower')
  /**
   start deployContract GetCarNFTStakingPower,
   contract GetCarNFTStakingPower address 0xC8eEDC71Cc45BC7B59b5E141374ac123cC0ba4C6
   contract GetCarNFTStakingPower deploy transaction hash 0x16e63dc068c8eb9b56a053221043ff6cf7298dd7378559848b24545086dd17b9
   finish deployContract GetCarNFTStakingPower
   */
  // await deployContract('GetComboStakingPower', [dishMasterAddress[network.name]])
  /**
   start deployContract GetComboStakingPower, 0x22CbdB1Da36B35725d1D75A7784271EE3f869b30
   contract GetComboStakingPower constructorArgumentsABIEncoded: 0x00000000000000000000000022cbdb1da36b35725d1d75a7784271ee3f869b30
   contract GetComboStakingPower address 0xEcB7877F445bC51C81F66C965B920316c984198f
   contract GetComboStakingPower deploy transaction hash 0x0be3ee3124232c7090224d0c08cc52cac6f06e3583ed8550d0b6b0c20547d186
   finish deployContract GetComboStakingPower
   */
  // await deployContract('GetPokerCardStakingPower')
  /**
   start deployContract GetPokerCardStakingPower,
   contract GetPokerCardStakingPower address 0xE8FDd6EFaC049c6FaA28031cCAf0F84513D6Dff9
   contract GetPokerCardStakingPower deploy transaction hash 0x46a476b2857805f768ca80dd4c256d3e0ae85bcc0daaeb4f65acbe40ec1d6a70
   finish deployContract GetPokerCardStakingPower
   */

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
