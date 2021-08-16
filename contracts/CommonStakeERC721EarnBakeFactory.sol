// SPDX-License-Identifier: MIT

pragma solidity =0.6.6;

import '@openzeppelin/contracts/access/Ownable.sol';
import './CommonStakeERC721EarnBake.sol';

contract CommonStakeERC721EarnBakeFactory is Ownable {
    event CommonStakeERC721EarnBakeCreated(address indexed commonMaster);

    constructor() public {}

    function createCommonStakeERC721EarnBake(
        string calldata _name,
        string calldata _symbol,
        address _bakeryMaster,
        address _erc721,
        address _getStakingPower,
        bool _isMintPowerTokenEveryTimes
    ) external onlyOwner returns (address) {
        CommonStakeERC721EarnBake commonMaster = new CommonStakeERC721EarnBake(
            _name,
            _symbol,
            _bakeryMaster,
            _erc721,
            _getStakingPower,
            _isMintPowerTokenEveryTimes
        );
        Ownable(address(commonMaster)).transferOwnership(_msgSender());
        emit CommonStakeERC721EarnBakeCreated(address(commonMaster));
        return address(commonMaster);
    }
}
