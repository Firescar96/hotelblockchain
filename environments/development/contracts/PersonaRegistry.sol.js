"use strict";

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory(Pudding) {
  // Inherit from Pudding. The dependency on Babel sucks, but it's
  // the easiest way to extend a Babel-based class. Note that the
  // resulting .js file does not have a dependency on Babel.

  var PersonaRegistry = (function (_Pudding) {
    _inherits(PersonaRegistry, _Pudding);

    function PersonaRegistry() {
      _classCallCheck(this, PersonaRegistry);

      _get(Object.getPrototypeOf(PersonaRegistry.prototype), "constructor", this).apply(this, arguments);
    }

    return PersonaRegistry;
  })(Pudding);

  ;

  // Set up specific data for this class.
  PersonaRegistry.abi = [{ "constant": false, "inputs": [{ "name": "token", "type": "address" }, { "name": "newAmount", "type": "uint32" }], "name": "updateToken", "outputs": [], "type": "function" }, { "constant": false, "inputs": [{ "name": "_persona", "type": "address" }], "name": "registerPersona", "outputs": [], "type": "function" }, { "inputs": [], "type": "constructor" }];
  PersonaRegistry.binary = "606060405260288060106000396000f3606060405260e060020a6000350463119e26058114602457806348d665b3146024575b005b602256";

  if ("0xd6f084ee15e38c4f7e091f8dd0fe6fe4a0e203ef" != "") {
    PersonaRegistry.address = "0xd6f084ee15e38c4f7e091f8dd0fe6fe4a0e203ef";

    // Backward compatibility; Deprecated.
    PersonaRegistry.deployed_address = "0xd6f084ee15e38c4f7e091f8dd0fe6fe4a0e203ef";
  }

  PersonaRegistry.generated_with = "1.0.3";
  PersonaRegistry.contract_name = "PersonaRegistry";

  return PersonaRegistry;
};

// Nicety for Node.
factory.load = factory;

if (typeof module != "undefined") {
  module.exports = factory;
} else {
  // There will only be one version of Pudding in the browser,
  // and we can use that.
  window.PersonaRegistry = factory;
}