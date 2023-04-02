pragma solidity ^0.8.0;

contract mappingArrays {
    // Book struct
    struct Book {
        string title;
        string author;
    }

    // using mapping
    mapping(uint256 => Book) mappingOfBook;

    // using array
    Book[] arrayOfBook;

    // adding book
    function addBookUsingMapping(
        uint256 _id,
        string calldata _title,
        string calldata _author
    ) public {
        mappingOfBook[_id] = Book(_title, _author);
    }

    // adding book
    function addBookUsingMapping(
        string calldata _title,
        string calldata _author
    ) public {
        arrayOfBook.push(Book(_title, _author));
    }

    // view book
    function viewBookMapping(uint256 _id) public view returns (Book memory) {
        return mappingOfBook[_id];
    }

    // view book(specific)
    function viewBook(uint256 _id) public view returns (Book memory) {
        return arrayOfBook[_id];
    }

    // view book(all)
    function viewBookArray() public view returns (Book[] memory) {
        return arrayOfBook;
    }

    function lengthOfArray() public view returns (uint256) {
        return (arrayOfBook.length);
    }

    function removeFromArray(uint256 _id) public {
        delete arrayOfBook[_id];
    }
}
