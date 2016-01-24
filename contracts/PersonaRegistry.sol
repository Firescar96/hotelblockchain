contract PersonaRegistry {

    struct PersonaEntry {
        address owner;
        mapping (address => uint32)  tokenAmounts;
    }


    mapping ( address => PersonaEntry ) personaRecords;

    function PersonaRegistry (){
        //TODO: implement
    }

    function registerPersona (address _persona) {
        //TODO: implement
    }

    function updateToken(address token, uint32 newAmount){
        //TODO: implement
    }

}