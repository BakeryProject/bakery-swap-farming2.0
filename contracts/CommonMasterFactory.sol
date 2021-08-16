// SPDX-License-Identifier: MIT

pragma solidity =0.6.6;

import '@openzeppelin/contracts/access/Ownable.sol';
import './CommonMaster.sol';

contract CommonMasterFactory is Ownable {
    event CommonMasterCreated(address indexed commonMaster);

    constructor() public {}

    function createCommonMaster(
        address _token,
        uint256 _startBlock,
        uint256 _tokenPerBlock,
        uint256 _maxTokenPerBlock,
        uint256 _totalToBeMintAmount
    ) external onlyOwner returns (address) {
        CommonMaster commonMaster = new CommonMaster(
            _token,
            _startBlock,
            _tokenPerBlock,
            _maxTokenPerBlock,
            _totalToBeMintAmount
        );
        Ownable(address(commonMaster)).transferOwnership(_msgSender());
        emit CommonMasterCreated(address(commonMaster));
        return address(commonMaster);
    }
}
