import Pudding from 'ether-pudding'
var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));
web3.eth.defaultAccount = web3.eth.accounts[0]

import LTRFactory from './LoyaltyTokenRegistry.sol.js'
var contractData = LTRFactory(Pudding)
var LoyaltyTokenRegistry = web3.eth.contract(contractData.abi).at(contractData.address)

import PersonaFactory from './PersonaRegistry.sol.js'
contractData = PersonaFactory(Pudding)
var PersonaRegistry = web3.eth.contract(contractData.abi).at(contractData.address)


export default {web3: web3, LoyaltyTokenRegistry: LoyaltyTokenRegistry, PersonaRegistry: PersonaRegistry}