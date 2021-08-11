// SPDX-License-Identifier: MIT

pragma solidity =0.6.6;

interface IGetStakingPower {
    function getStakingPower(address _erc721, uint256 _tokenId) external view returns (uint256);
}
