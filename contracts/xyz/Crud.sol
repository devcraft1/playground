pragma solidity ^0.8.3;

contract Crud {
    struct User {
        string username;
        uint256 userId;
    }

    enum State {
        create,
        read,
        update,
        remove
    }

    User[] user;
    State state;
    uint256 id;

    // create user
    function createUser(string calldata _username) public {
        user.push(User({username: _username, userId: id}));
        id++;
    }

    // find user
    function getUser(uint256 _id) public view returns (string memory, uint256) {
        uint256 i = find(_id);
        return (user[i].username, user[i].userId);
    }

    // update user
    function updateUser(uint256 _id, string calldata _user) public {
        uint256 i = find(_id);
        user[i].username = _user;
    }

    // number of users
    function getNumberOfUsers() public view returns (uint256) {
        return user.length;
    }

    function remove(uint256 _id) public {
        uint256 i = find(_id);
        delete user[i];
    }

    function find(uint256 _id) internal view returns (uint256) {
        for (uint256 i = 0; i < user.length; i++) {
            if (user[i].userId == _id) {
                return i;
            }
        }
    }
}
