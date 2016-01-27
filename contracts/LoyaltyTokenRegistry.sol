contract LoyaltyTokenRegistry {

    struct RegistryEntry {
        address owner;
        uint tokenId;
        bytes32  tokenName;
        bytes32  tokenSymbol;
        bytes32 tokenContent;
        uint    tokenConversionRate;
    }

    uint public totalToken;

    mapping ( address => RegistryEntry ) public registryRecordsInfo;
    RegistryEntry[2**5] public registryRecords;

    function LoyaltyTokenRegistry () {
        totalToken = 0;
    }

    function registerToken (address _token) public returns (bool _success){
        //if(registryRecordsInfo[_token] == null) {
           registryRecordsInfo[_token].owner = msg.sender;
           registryRecordsInfo[_token].tokenId = totalToken;
           registryRecords[totalToken] = registryRecordsInfo[_token];
           totalToken = totalToken + 1;
           _success = true;
        //}
        //else
           //_success = false;
    }

    function setTokenNameSymbol (address _token, bytes32 _tokenName, bytes32 _tokenSymbol) public {
        if(msg.sender == registryRecordsInfo[_token].owner)
        registryRecordsInfo[_token].tokenName = _tokenName;
        registryRecordsInfo[_token].tokenSymbol = _tokenSymbol;
           registryRecords[registryRecordsInfo[_token].tokenId] = registryRecordsInfo[_token];
    }

    function getTokenNameSymbol (address _token) public returns (bytes32 _tokenName, bytes32 _tokenSymbol){
        _tokenName = registryRecordsInfo[_token].tokenName;
        _tokenSymbol = registryRecordsInfo[_token].tokenSymbol;
    }

    function setTokenContent (address _token, bytes32 _tokenContent) public {
        registryRecordsInfo[_token].tokenContent = _tokenContent;
           registryRecords[registryRecordsInfo[_token].tokenId] = registryRecordsInfo[_token];
    }

    function getTokenContent (address _token) public returns (bytes32 _tokenContent){
        _tokenContent = registryRecordsInfo[_token].tokenContent;
    }

    function setTokenConversionRate (address _token, uint _amount) public {
        registryRecordsInfo[_token].tokenConversionRate = _amount;
           registryRecords[registryRecordsInfo[_token].tokenId] = registryRecordsInfo[_token];
    }
}