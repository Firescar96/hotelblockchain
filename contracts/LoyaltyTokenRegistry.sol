contract LoyaltyTokenRegistry {

    struct RegistryEntry {
        address owner;
        uint tokenId;
        string  tokenName;
        string  tokenSymbol;
        bytes32 tokenContent;
    }

    uint totalToken;

    mapping ( address => RegistryEntry ) public registryRecordsInfo;
    RegistryEntry[2**5] public registryRecords;

    function LoyaltyTokenRegistry () {
        totalToken = 0;
    }

    function registerToken (address _token) public returns (bool _success){
        //if(registryRecordsInfo[_token] == null) {
           registryRecordsInfo[_token].owner = msg.sender;
           registryRecordsInfo[_token].tokenId = totalToken + 1;
           registryRecords[totalToken] = registryRecordsInfo[_token];
           totalToken = totalToken + 1;
           _success = true;
        //}
        //else
           //_success = false;
    }

    function setTokenNameSymbol (address _token, string _tokenName, string _tokenSymbol) public {
        registryRecordsInfo[_token].tokenName = _tokenName;
        registryRecordsInfo[_token].tokenSymbol = _tokenSymbol;
    }

    function getTokenNameSymbol (address _token) public returns (string _tokenName, string _tokenSymbol){
        _tokenName = registryRecordsInfo[_token].tokenName;
        _tokenSymbol = registryRecordsInfo[_token].tokenSymbol;
    }

    function setTokenContent (address _token, bytes32 _tokenContent) public {
        registryRecordsInfo[_token].tokenContent = _tokenContent;
    }

    function getTokenContent (address _token) public returns (bytes32 _tokenContent){
        _tokenContent = registryRecordsInfo[_token].tokenContent;
    }

    function getTokens() public returns (address[2**5] _tokenList) {
        return registryRecords;
    }
}