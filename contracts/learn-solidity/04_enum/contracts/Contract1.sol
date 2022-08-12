pragma solidity ^0.4.23;

contract Contract1 {
    enum Languages {
        java,
        javascript,
        solidity,
        python
    }

    Languages languages;

    function getLanguage() public pure returns (uint256) {
        return uint256(Languages.javascript);
    }

    function getLanguage2() public pure returns (uint256) {
        Languages language = Languages.python;
        return uint256(language);
    }

    function setLanguage(uint256 lang) public {
        languages = Languages(lang);
    }

    function getLanguageStateVariable() public view returns (Languages) {
        return languages;
    }
}
