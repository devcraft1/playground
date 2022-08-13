pragma solidity ^0.8.0;

contract ChildContract {
    uint256 public id;
    uint256 public balance;

    constructor() payable {
        // id = _id;
        // balance = msg.value;
    }
}

contract MainContract {
    struct ContractDetails {
        string name;
        address owner;
        ChildContract contractAddress;
    }

    mapping(address => ContractDetails) newContractDetails;

    function createContract(string calldata _curator) public {
        ChildContract newContract = new ChildContract();
        newContractDetails[msg.sender] = ContractDetails(
            _curator,
            msg.sender,
            newContract
        );
    }

    function getContractName(address _owner)
        public
        view
        returns (string memory)
    {
        require(
            _owner == newContractDetails[_owner].owner,
            "not contract owner"
        );
        return newContractDetails[_owner].name;
    }

    function isContractOwner(address _owner) public view returns (bool) {
        if (msg.sender == newContractDetails[_owner].owner) {
            return true;
        } else {
            return false;
        }
    }

    function getContractDetails()
        public
        view
        returns (
            ChildContract,
            string memory,
            address
        )
    {
        require(
            msg.sender == newContractDetails[msg.sender].owner,
            "not contract owner"
        );
        ChildContract contractValue = newContractDetails[msg.sender]
            .contractAddress;
        string memory stringValue = newContractDetails[msg.sender].name;
        address addressValue = newContractDetails[msg.sender].owner;
        return (contractValue, stringValue, addressValue);
    }
}

// problems
// 1. new contract overrides old contract; => contract can be tracked using ids
