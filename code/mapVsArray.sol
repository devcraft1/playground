pragma solidity ^0.8.0;

contract mapVsArray {
    struct Book {
        string title;
        string author;
    }

    mapping(uint256 => Book) mappingOfBook;

    Book[] arrayOfBook;

    function addBookUsingMapping(
        uint256 _id,
        string calldata _title,
        string calldata _author
    ) public {
        mappingOfBook[_id] = Book(_title, _author);
    }

    function addBookUsingMapping(
        string calldata _title,
        string calldata _author
    ) public {
        arrayOfBook.push(Book(_title, _author));
    }

    function viewBookMapping(uint256 _id) public view returns (Book memory) {
        return mappingOfBook[_id];
    }

    function viewBookArray() public view returns (Book[] memory) {
        return arrayOfBook;
    }
}
