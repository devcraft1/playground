pragma solidity ^0.8.11;

contract StructWithMapping {
    struct Test {
        uint256 myUint;
        string myString;
    }

    mapping(uint256 => Test) public myMapping;

    function setMapping(
        uint256 key,
        uint256 _myUint,
        string memory _myString
    ) public {
        Test memory test;
        test.myUint = _myUint;
        test.myString = _myString;
        myMapping[key] = test;
    }

    function setOnlyUint(uint256 _key, uint256 _setValue) public {
        myMapping[_key].myUint = _setValue;
    }

    function setOnlyString(uint256 _key, string calldata _setString) public {
        myMapping[_key].myString = _setString;
    }

    function getUintValue(uint256 _key) public view returns (uint256) {
        uint256 uintValue = myMapping[_key].myUint;
        return uintValue;
    }

    function getStringValue(uint256 _str) public view returns (string memory) {
        string memory str = myMapping[_str].myString;
        return str;
    }

    function getAllValue(uint256 _key) public view returns (Test memory) {
        return myMapping[_key];
    }

    function nullifyStruct(uint256 key) public {
        Test memory test;
        myMapping[key] = test;
    }
}
