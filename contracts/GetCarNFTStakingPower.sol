// SPDX-License-Identifier: MIT

pragma solidity =0.6.6;

import './IGetStakingPower.sol';

// bsc mainnet carNFT contract 0x1D09fC4B295a2fa6F0E2E64a345BAE419EB04699
interface ICarNFT {
    function carInfoMap(uint256 _tokenId)
        external
        view
        returns (
            uint256 stakingPower,
            uint256 style,
            uint256 size,
            uint256 lockedCAR
        );
}

contract GetCarNFTStakingPower is IGetStakingPower {
    constructor() public {}

    function getStakingPower(address _erc721, uint256 _tokenId) external view override returns (uint256) {
        (uint256 stakingPower, , , ) = ICarNFT(_erc721).carInfoMap(_tokenId);
        return stakingPower;
    }
}
