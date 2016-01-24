"use strict";

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory(Pudding) {
  // Inherit from Pudding. The dependency on Babel sucks, but it's
  // the easiest way to extend a Babel-based class. Note that the
  // resulting .js file does not have a dependency on Babel.

  var LoyaltyTokenRegistry = (function (_Pudding) {
    _inherits(LoyaltyTokenRegistry, _Pudding);

    function LoyaltyTokenRegistry() {
      _classCallCheck(this, LoyaltyTokenRegistry);

      _get(Object.getPrototypeOf(LoyaltyTokenRegistry.prototype), "constructor", this).apply(this, arguments);
    }

    return LoyaltyTokenRegistry;
  })(Pudding);

  ;

  // Set up specific data for this class.
  LoyaltyTokenRegistry.abi = [{ "constant": false, "inputs": [{ "name": "_token", "type": "address" }], "name": "registerToken", "outputs": [{ "name": "_success", "type": "bool" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "_token", "type": "address" }], "name": "getTokenNameSymbol", "outputs": [{ "name": "_tokenName", "type": "string" }, { "name": "_tokenSymbol", "type": "string" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "_token", "type": "address" }], "name": "getTokenContent", "outputs": [{ "name": "_tokenContent", "type": "bytes32" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "_token", "type": "address" }, { "name": "_tokenName", "type": "string" }, { "name": "_tokenSymbol", "type": "string" }], "name": "setTokenNameSymbol", "outputs": [], "type": "function" }, { "constant": false, "inputs": [{ "name": "_token", "type": "address" }, { "name": "_tokenContent", "type": "bytes32" }], "name": "setTokenContent", "outputs": [], "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "registryRecords", "outputs": [{ "name": "owner", "type": "address" }, { "name": "tokenId", "type": "uint256" }, { "name": "tokenName", "type": "string" }, { "name": "tokenSymbol", "type": "string" }, { "name": "tokenContent", "type": "bytes32" }], "type": "function" }, { "constant": false, "inputs": [], "name": "getTokens", "outputs": [{ "name": "_tokenList", "type": "address[32]" }], "type": "function" }, { "inputs": [], "type": "constructor" }];
  LoyaltyTokenRegistry.binary = "6060604052600080556106da806100166000396000f3606060405236156100615760e060020a600035046309824a8081146100635780635e6ef248146100be5780635f83ca5c1461014c5780638e73d4f7146101715780638f15c4d314610284578063959b24f1146102ad578063aa6ca808146102e9575b005b600160a060020a036004351660009081526001602081905260408220805473ffffffffffffffffffffffffffffffffffffffff1916331781558254820190820155815481019091555b60408051918252519081900360200190f35b6103146004356040805160208181018352600080835283518083018552818152600160a060020a03861682526001808452918590206002908101805487519481161561010002600019011691909104601f81018590048502840185019096528583529394909391928301828280156106265780601f106105fb57610100808354040283529160200191610626565b600160a060020a036004803591909116600090815260016020526040902001546100ac565b60408051602060248035600481810135601f81018590048502860185019096528585526100619581359591946044949293909201918190840183828082843750506040805160209735808a0135601f81018a90048a0283018a019093528282529698976064979196506024919091019450909250829150840183828082843750949650505050505050816001600050600085600160a060020a031681526020019081526020016000206000506002016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061052057805160ff19168380011785555b506105509291505b808211156105c05760008155600101610270565b600160a060020a0360048035919091166000908152600160205260409020602435910155610061565b6001602081905260048035600090815260409020805492810154918101546103e193600160a060020a0316929160028101916003919091019085565b610506610400604051908101604052806020905b60008152602001906001900390816102fd57505090565b6040518080602001806020018381038352858181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f1680156103785780820380516001836020036101000a031916815260200191505b508381038252848181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f1680156103d15780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b60408051600160a060020a0387168152602081018690526080810183905260a09181018281528554600260018216156101000260001901909116049282018390529091606083019060c08401908790801561047d5780601f106104525761010080835404028352916020019161047d565b820191906000526020600020905b81548152906001019060200180831161046057829003601f168201915b5050838103825285546002600182161561010002600019019091160480825260209190910190869080156104f25780601f106104c7576101008083540402835291602001916104f2565b820191906000526020600020905b8154815290600101906020018083116104d557829003601f168201915b505097505050505050505060405180910390f35b60405180826104008083818460006004606ff15093505050f35b82800160010185558215610268579182015b82811115610268578251826000505591602001919060010190610532565b5050600160a060020a0383166000908152600160208181526040832060030180548551828652948390209194600294821615610100026000190190911693909304601f908101839004820193928601908390106105c457805160ff19168380011785555b506105f4929150610270565b5090565b828001600101855582156105b4579182015b828111156105b45782518260005055916020019190600101906105d6565b5050505050565b820191906000526020600020905b81548152906001019060200180831161060957829003601f168201915b50505050600160a060020a03851660009081526001602081815260409283902060030180548451600294821615610100026000190190911693909304601f8101839004830284018301909452838352949650909392508301828280156106cd5780601f106106a2576101008083540402835291602001916106cd565b820191906000526020600020905b8154815290600101906020018083116106b057829003601f168201915b509394505050505091509156";

  if ("0xc305c901078781c232a2a521c2af7980f8385ee9" != "") {
    LoyaltyTokenRegistry.address = "0xc305c901078781c232a2a521c2af7980f8385ee9";

    // Backward compatibility; Deprecated.
    LoyaltyTokenRegistry.deployed_address = "0xc305c901078781c232a2a521c2af7980f8385ee9";
  }

  LoyaltyTokenRegistry.generated_with = "1.0.3";
  LoyaltyTokenRegistry.contract_name = "LoyaltyTokenRegistry";

  return LoyaltyTokenRegistry;
};

// Nicety for Node.
factory.load = factory;

if (typeof module != "undefined") {
  module.exports = factory;
} else {
  // There will only be one version of Pudding in the browser,
  // and we can use that.
  window.LoyaltyTokenRegistry = factory;
}