contract LoyaltyTokenRegistry {

    struct RegistryEntry {
        address owner;
        uint tokenId;
        string  tokenName;
        string  tokenSymbol;
        bytes32 tokenContent;
    }

    uint totalToken;

    mapping ( address => RegistryEntry ) registryRecords;

    function LoyaltyTokenRegistry (){
        totalToken = 0;
    }

    function registerToken (address _token) returns (bool _success){
        //if(registryRecords[_token] == null) {
           registryRecords[_token].owner = msg.sender;
           registryRecords[_token].tokenId = totalToken + 1;
           totalToken = totalToken + 1;
           _success = true;
        //}
        //else
           //_success = false;
    }

    function setTokenNameSymbol (address _token, string _tokenName, string _tokenSymbol){
        registryRecords[_token].tokenName = _tokenName;
        registryRecords[_token].tokenSymbol = _tokenSymbol;
    }

    function getTokenNameSymbol (address _token) returns (string _tokenName, string _tokenSymbol){
        _tokenName = registryRecords[_token].tokenName;
        _tokenSymbol = registryRecords[_token].tokenSymbol;
    }

    function setTokenContent (address _token, bytes32 _tokenContent){
        registryRecords[_token].tokenContent = _tokenContent;
    }

    function getTokenContent (address _token) returns (bytes32 _tokenContent){
        _tokenContent = registryRecords[_token].tokenContent;
    }

    function getTokens() returns (address[2**5] _tokenList) {
        //TODO: implement
    }
}