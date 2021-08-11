// SPDX-License-Identifier: MIT

pragma solidity =0.6.6;

interface ICommonStakeERC721EarnBake {
    event Harvest(address indexed user, uint256 amount);
    event Stake(address indexed user, uint256 indexed tokenId, uint256 amount);
    event Unstake(address indexed user, uint256 indexed tokenId, uint256 amount);
    event EmergencyUnstake(address indexed user, uint256 indexed tokenId, uint256 amount);
    event EmergencyUnstakeAllFromBake(address indexed user, uint256 amount);

    function getStakingPower(uint256 _tokenId) external view returns (uint256);

    function pendingBake(address _user) external view returns (uint256);

    function updateStaking() external;

    function harvest() external;

    function stake(uint256 _tokenId) external;

    function batchStake(uint256[] calldata _tokenIds) external;

    function unstake(uint256 _tokenId) external;

    function batchUnstake(uint256[] calldata _tokenIds) external;

    function unstakeAll() external;

    function emergencyUnstake(uint256 _tokenId) external;

    function emergencyUnstakeAllFromBake(uint256 _amount) external;

    function pauseStake() external;

    function unpauseStake() external;
}
