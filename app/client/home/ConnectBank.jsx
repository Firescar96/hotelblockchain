import React from 'react';
import {web3} from '../lib/lib.jsx';

var ConnectBank = React.createClass({
  getInitialState(){
    web3.eth.getAccounts((_,accounts) => {
      this.setState({accounts:accounts})
    })
    return {
      type:'fiat',
      account: web3.eth.defaultAccount,
      accounts: []
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
  render() {
    var addressOptions = this.state.accounts.map((account) => {
      return (
        <option value={account} key={account}>{account}</option>
      )
    })
    return (
      <div  className="form-group">

        <div id="bankToggleGroup">
          <label htmlFor="fiat" className={this.state.type=='fiat'?'checked':''}>
            <input id="fiat" name="bankToggle" type="radio" onClick={this.handleChange('type')} value="fiat"/>
            <span>Fiat</span>
          </label>

          <label htmlFor="ether" className={this.state.type=='ether'?'checked':''}>
            <input id="ether" name="bankToggle" type="radio" onClick={this.handleChange('type')} value="ether"/>
            <span>Ether</span>
          </label>
        </div>

        <div className={this.state.type=='fiat'?'':'hidden'}>
          <input className="form-control" placeholder="Card Number" />
          <input className="form-control" placeholder="Expiration" />
          <input className="form-control" placeholder="CVV" />
          <input className="form-control" placeholder="Billing" />
        </div>

        <div className={this.state.type=='ether'?'':'hidden'}>
          <label>
          Choose address
          <select value={this.state.account} onChange={this.handleChange('account','select')}>{addressOptions}</select>
        </label>
      </div>
      </div>
    );
  }
})

export default ConnectBank