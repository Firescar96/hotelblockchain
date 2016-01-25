import React from 'react';
import Modal from 'react-modal';
import {web3,LoyaltyTokenRegistry,PersonaRegistry} from '../lib/lib.jsx';

const modalStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

var LoginSignup = React.createClass({
  getInitialState() {
    return {
      account: web3.eth.defaultAccount,
      accounts: [],
      loyaltyTokens: [],
      isSignupModalOpen: false,
      isLoginModalOpen: false
    }
  },
  handleChange: function (key,type) {
    return function (e) {
      var state = {};
      if(type=='select')
      state[key]=e.target.options[e.target.selectedIndex].value
      else
      state[key] = e.target.value;
      this.setState(state);
    }.bind(this);
  },
  closeModals() {
    this.setState({
      isSignupModalOpen: false,
      isLoginModalOpen: false
    })
  },
  login() {
    //TODO get info from PersonaRegistry
    this.closeModals()
  },
  signup(){
    //TODO save info to PersonaRegistry
    this.closeModals()
  },
  componentWillMount() {
    web3.eth.getAccounts((_,accounts) => {
      this.setState({accounts:accounts})
    })
    LoyaltyTokenRegistry.getTokens.call((_,tokens) => {
      this.setState({loyaltyTokens:tokens})
    })
  },
  render() {
    var addressOptions = this.state.accounts.map((account) => {
      return (
        <option value={account} key={account}>{account}</option>
      )
    })

    var loyaltyBrands = this.state.loyaltyTokens.map((brand) => {
      //TODO some stuff with getting the details of the token from it's contract
      return (
        <label key={brand.tokenSymbol}>
          Name here {brand.tokenName}
          <input name="loyaltyBrand" type="checkbox" value={"addresshere"+brand.tokenSymbol} ></input>
        </label>
      )
    })
    return (
      <div>
        <button className="btn btn-default" onClick={this.handleChange('isLoginModalOpen')} value="true">Login</button>
        <button className="btn btn-default" onClick={this.handleChange('isSignupModalOpen')} value="true">SignUp</button>

        <Modal
          isOpen={this.state.isLoginModalOpen === 'true'}
          onRequestClose={this.closeModals}
          style={modalStyles}>

          <label>
            Choose address
            <select value={this.state.account} onChange={this.handleChange('account','select')}>{addressOptions}</select>
          </label>
          <button onClick={this.login}>Close</button>
        </Modal>

        <Modal
          isOpen={this.state.isSignupModalOpen === 'true'}
          onRequestClose={this.closeModals}
          style={modalStyles}>

          <label>
            Choose address
            <select value={this.state.account} onChange={this.handleChange('account','select')}>{addressOptions}</select>
          </label>

          <div>
            <span>Select Loyalty Brands</span>
            {loyaltyBrands}
          </div>
          <button onClick={this.signup}>Close</button>
        </Modal>

      </div>
    )
  }
})

export default LoginSignup