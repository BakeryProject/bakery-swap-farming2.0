// SPDX-License-Identifier: MIT

pragma solidity =0.6.6;

import './IGetStakingPower.sol';

// bsc mainnet comboMaster contract 0x7145319189629AFcF31754D8AC459265FCa4cF91
interface IComboMaster {
    function dishInfoMap(uint256 _tokenId)
        external
        view
        returns (
            uint256 level,
            uint256 stakingPowerMultiple,
            uint256 bakeAmount,
            uint256 stakingPowerAmount
        );
}

contract GetComboStakingPower is IGetStakingPower {
    IComboMaster public immutable comboMaster;

    constructor(address _comboMaster) public {
        comboMaster = IComboMaster(_comboMaster);
    }

    function getStakingPower(
        address, /* _erc721 */
        uint256 _tokenId
    ) external view override returns (uint256) {
        (, , , uint256 stakingPowerAmount) = comboMaster.dishInfoMap(_tokenId);
        return stakingPowerAmount;
    }
}
