// SPDX-License-Identifier: MIT

pragma solidity =0.6.6;

import './IGetStakingPower.sol';

// bsc mainnet pokerCard contract 0xaDb0Ae1cb9cD289271D8D1f7a9757A2997CF940d
interface IPokerCard {
    function pokerCardInfoMap(uint256 _tokenId) external view returns (uint256 stakingPower, string memory name);
}

contract GetPokerCardStakingPower is IGetStakingPower {
    constructor() public {}

    function getStakingPower(address _erc721, uint256 _tokenId) external view override returns (uint256) {
        (uint256 stakingPower, ) = IPokerCard(_erc721).pokerCardInfoMap(_tokenId);
        return stakingPower;
    }
}
