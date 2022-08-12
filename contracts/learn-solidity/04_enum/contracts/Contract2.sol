// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract State {
    enum Stage {
        amatuer,
        advanced
    }

    Stage internal stage;

    // Default stage for all user
    constructor() {
        // Default stage
        stage = Stage.amatuer;
    }

    // get stage after constructor call
    function getCurrentStage() public view returns (uint256) {
        return uint256(stage);
    }

    // advanced stage for users
    function setUserToAdvancedStage() public {
        // When advanced conditions are met
        stage = Stage.advanced;
    }

    // locally set stage with another variable
    function setStageLocally() public pure returns (uint256) {
        Stage Stages = Stage.amatuer;
        return uint256(Stages);
    }

    function resetStageToAmatuer() public {
        stage = Stage.amatuer;
    }

    function checkStage() public view returns (string memory) {
        require(stage == Stage.advanced, "User is still amatuer");
        return "advanced user";
    }
}
