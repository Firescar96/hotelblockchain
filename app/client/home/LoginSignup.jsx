import React from 'react';
import Modal from 'react-modal';
import {web3} from '../lib/lib.jsx';

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
      account: '',
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

    this.closeModals()
  },
  render() {
    var addressOptions = web3.eth.accounts.map((account) => {
      var selected = account===this.state.account
      return (
        <option value={account} key={account} selected={selected}>{account}</option>
      )
    })
    var loyaltyBrands = LoyaltyTokenRegistry.getTokens().call().map((brand) => {
      return (
        <label>
          Name here {brand.name}
          <input name="loyaltyBrand" type="checkbox" value={"addresshere"+brand.account}></input>
        </label>
      )
    })
    return (
      <nav className="nav">
        <button className="btn btn-default" onClick={this.handleChange('isLoginModalOpen')} value="true">Login</button>
        <button className="btn btn-default" onClick={this.handleChange('isSignupModalOpen')} value="true">SignUp</button>

        <Modal
          isOpen={this.state.isLoginModalOpen === 'true'}
          onRequestClose={this.closeModals}
          style={modalStyles}>

          <label>
            Choose address
            <select onChange={this.handleChange('account','select')}>{addressOptions}</select>
          </label>
          <button onClick={this.login}>Finish</button>
        </Modal>

        <Modal
          isOpen={this.state.isSignupModalOpen === 'true'}
          onRequestClose={this.closeModals}
          style={modalStyles}>

          <label>
            Choose address
            <select onChange={this.handleChange('account','select')}>{addressOptions}</select>
          </label>

          <div>
            <span>Select Loyalty Brands</span>

          </div>
          <div>Save Preferences</div>
          <button onClick={this.closeModals}>Finish</button>
        </Modal>

      </nav>
    )
  }
})

export default LoginSignup