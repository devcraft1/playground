pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract ChildContract is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    receive() external payable {}

    constructor(string memory _name, string memory _symbol)
        ERC721(_name, _symbol)
    {}

    function awardItem(address player, string memory tokenURI)
        public
        returns (uint256)
    {
        uint256 newItemId = _tokenIds.current();
        _mint(player, newItemId);
        _setTokenURI(newItemId, tokenURI);

        _tokenIds.increment();
        return newItemId;
    }
}

contract MainContract {
    uint256 private ids;

    struct ContractDetails {
        string name;
        string symbol;
        address owner;
        ChildContract contractAddress;
    }

    mapping(address => ContractDetails) newContractDetails;

    function createContract(string calldata _curator, string calldata _symbol)
        public
    {
        ChildContract newContract = new ChildContract(_curator, _symbol);
        newContractDetails[msg.sender] = ContractDetails(
            _curator,
            _symbol,
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

    function getContractSymbol(address _owner)
        public
        view
        returns (string memory)
    {
        require(
            _owner == newContractDetails[_owner].owner,
            "not contract owner"
        );
        return newContractDetails[_owner].symbol;
    }

    function isContractOwner(address _owner)
        public
        view
        returns (bool, address)
    {
        address ownerContract = newContractDetails[_owner].owner;
        require(
            msg.sender == newContractDetails[_owner].owner,
            "not contract owner"
        );
        return (true, ownerContract);
    }

    function getContractDetails()
        public
        view
        returns (ChildContract, string memory)
    {
        require(
            msg.sender == newContractDetails[msg.sender].owner,
            "not contract owner"
        );
        ChildContract contractValue = newContractDetails[msg.sender]
            .contractAddress;
        string memory stringValue = newContractDetails[msg.sender].name;
        return (contractValue, stringValue);
    }
}

// problems
// 1. new contract overrides old contract; => contract can be tracked using ids
