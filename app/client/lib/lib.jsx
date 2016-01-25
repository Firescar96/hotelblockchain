import Pudding from 'ether-pudding'
import LTRFactory from './LoyaltyTokenRegistry.sol.js'
import PersonaFactory from './PersonaRegistry.sol.js'

var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));
web3.eth.getAccounts((_,accounts) => {
  web3.eth.defaultAccount = accounts[0]
})
var ltrData = LTRFactory(Pudding)
var LoyaltyTokenRegistry = web3.eth.contract(ltrData.abi).at(ltrData.address)

var personaData = PersonaFactory(Pudding)
var PersonaRegistry = web3.eth.contract(personaData.abi).at(personaData.address)

export default {web3: web3, LoyaltyTokenRegistry: LoyaltyTokenRegistry, PersonaRegistry: PersonaRegistry}