// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

contract CrowdFunding {
    address public creator;
    string public projectName;
    uint public fundingLimit;
    uint public amountRaised;
    bool public fundingLimitReached;
    bool public eventEnded;
    mapping(address => uint) public contributionsToTheFund;

    constructor(string memory _projectName, uint _fundingLimit) {
        creator = msg.sender; //setting the creator as the creator of this smart contract
        projectName = _projectName;
        fundingLimit = _fundingLimit;
    }

    function getAmountRaised() public view returns (uint256) {
        return amountRaised;
    }

    function getProjectName() public view returns (string memory) {
        return projectName;
    }

    function getCreator() public view returns (address) {
        return creator;
    }

    function getFundingLimit() public view returns (uint256) {
        return fundingLimit;
    }

    function contributeToFund() public payable {
        require(!eventEnded, "The event has been ended");
        require(!fundingLimitReached, "The funding limit is reached");

        uint _amount = msg.value;

        if (_amount < 10) {
            revert("Minimum funding amount is 10 WEI");
        }

        contributionsToTheFund[msg.sender] += _amount;
        amountRaised += _amount;

        if (amountRaised >= fundingLimit) {
            fundingLimitReached = true;
            eventEnded = true;
        }
    }
}
