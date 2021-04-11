pragma solidity ^0.7.0;
import "./ERC721.sol";

contract NFTMINTER is ERC721 {


    constructor(string memory __name, string memory __symbol)
        ERC721(__name, __symbol)
        
    {

    }

    function setTokenURI(string memory uri, uint256 TokenID) public {
        _setTokenURI(TokenID, uri);
    }

    function mint(address _to, uint256 TokenID) public {
        _mint(_to, TokenID);
    }

    function getNEXTtokenID() public returns (uint256) {
        uint256 totalNumberOfTokens;
        totalNumberOfTokens = totalSupply();
        uint256 nextTokenID;
        nextTokenID = totalNumberOfTokens + 1;

        return nextTokenID;
    }
}
