import Pudding from 'ether-pudding'
var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));

import LTRFactory from './LoyaltyTokenRegistry.sol.js'
var LoyaltyTokenRegistry = web3.eth.contract(contracts.AliasReg.abi).at(contracts.AliasReg.address)

export default {web3: web3, LoyaltyTokenRegistry: LoyaltyTokenRegistry}