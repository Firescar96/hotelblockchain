contract LoyaltyTokenRegistry {

    struct RegistryEntry {
        address owner;
        uint tokenId;
        bytes32  tokenName;
        bytes32  tokenSymbol;
        bytes32 tokenContent;
        uint    tokenConversionRate;
    }

    mapping ( address => RegistryEntry ) public registryRecordsInfo;
    address[2**5] public registryRecords;
    uint public totalToken;

    function LoyaltyTokenRegistry () {
        totalToken = 0;
    }

    function registerToken (address _token) public returns (bool _success){
        //if(registryRecordsInfo[_token] == null) {
           registryRecordsInfo[_token].owner = msg.sender;
           registryRecordsInfo[_token].tokenId = totalToken;
           registryRecords[totalToken] = _token;
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
    }

    function getTokenNameSymbol (address _token) public returns (bytes32 _tokenName, bytes32 _tokenSymbol){
        _tokenName = registryRecordsInfo[_token].tokenName;
        _tokenSymbol = registryRecordsInfo[_token].tokenSymbol;
    }

    function setTokenContent (address _token, bytes32 _tokenContent) public {
        registryRecordsInfo[_token].tokenContent = _tokenContent;
    }

    function getTokenContent (address _token) public returns (bytes32 _tokenContent){
        _tokenContent = registryRecordsInfo[_token].tokenContent;
    }

    function setTokenConversionRate (address _token, uint _amount) public {
        registryRecordsInfo[_token].tokenConversionRate = _amount;
    }
}

contract PersonaRegistry {

    address owner;

    struct PersonaEntry {
        address owner;
        mapping (address => uint)  tokenAmounts;
    }

    uint totalPersonas;

    mapping ( address => PersonaEntry ) public personaInfo;
    address[2**5] public personas;

    LoyaltyTokenRegistry tokenRegistry;

    function PersonaRegistry (){
        owner = msg.sender;
        totalPersonas=0;
    }

    function setTokenRegistry(address _addr) {
        tokenRegistry = LoyaltyTokenRegistry(_addr);
    }

    function registerPersona (address _persona) {
        personaInfo[_persona].owner = msg.sender;
        personas[totalPersonas] = _persona;
    }

    function updateToken(address _persona, address _token){
        var (,,,,,_amount) = tokenRegistry.registryRecordsInfo(_token);
        uint amount = _amount * msg.value;
        personaInfo[_persona].tokenAmounts[_token] = amount;

    }

}