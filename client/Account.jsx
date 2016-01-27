import React from 'react';
import Modal from 'react-modal';
import {modalStyles} from './lib/lib.jsx';

var Account = React.createClass({
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
      type:''
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
    LoyaltyTokenRegistry.registryRecords.call((_,tokens) => {
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
      <div  className="form-group">

        <div id="accountToggleGroup">
          <label htmlFor="login" className={this.state.type=='login'?'checked':''}>
            <input id="login" name="accountToggle" type="radio" onClick={this.handleChange('type')} value="login"/>
            <span>Login</span>
          </label>

          <label htmlFor="signup" className={this.state.type=='signup'?'checked':''}>
            <input id="signup" name="accountToggle" type="radio" onClick={this.handleChange('type')} value="signup"/>
            <span>Signup</span>
          </label>
        </div>

        <div className={this.state.type=='login'?'':'hidden'}>
          <label>
            Choose address
            <select value={this.state.account} onChange={this.handleChange('account','select')}>{addressOptions}</select>
          </label>
          <button onClick={this.login}>Close</button>
        </div>

        <div className={this.state.type=='signup'?'':'hidden'}>
          <label>
            Choose address
            <select value={this.state.account} onChange={this.handleChange('account','select')}>{addressOptions}</select>
          </label>

          <div>
            <span>Select Loyalty Brands</span>
            {loyaltyBrands}
          </div>
          <button onClick={this.signup}>Close</button>
        </div>
      </div>
    )
  }
})

export default Account