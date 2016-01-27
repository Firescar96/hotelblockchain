import React from 'react';

var Wallet = React.createClass({
  getInitialState(){
    web3.eth.getAccounts((_,accounts) => {
      this.setState({accounts:accounts})
    })
    return {
      type:'fiat',
      account: web3.eth.defaultAccount,
      accounts: [],
      points: 500
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
      <div id="wallet" className="form-group">
        <div id="walletTitle"><h1>My Wallet</h1></div>
        <div id="bankToggleGroup">
          <h2 id="bankToggleLabel">Purchase Points</h2>
          <label htmlFor="fiat" className={this.state.type=='fiat'?'checked':''}>
            <input id="fiat" name="bankToggle" type="radio" onClick={this.handleChange('type')} value="fiat"/>
            <h2>Fiat</h2>
          </label>

          <label htmlFor="ether" className={this.state.type=='ether'?'checked':''}>
            <input id="ether" name="bankToggle" type="radio" onClick={this.handleChange('type')} value="ether"/>
            <h2>Ether</h2>
          </label>
        </div>

        <div id="fiatOption" className={this.state.type=='fiat'?'':'hidden'}>
          <div id="choosePoints">
            <label id="newPoints">
              <h3>How Many Points</h3>
              <input className="form-control"></input>
            </label>
            <h3 id="currentPoints">Current Balance: {this.state.points}</h3>
          </div>
          <div id="bankInfo">
            <label htmlFor="cardholder">
              <h3>Cardholder Name</h3>
              <input id="cardholder" className="form-control" />
            </label>
            <label htmlFor="cardnumber">
              <h3>Cardnumber</h3>
              <input id="cardnumber" className="form-control" />
            </label>
            <label htmlFor="exp">
              <h3>EXP</h3>
              <input id="exp" className="form-control" />
            </label>
            <label htmlFor="cvv">
              <h3>CVV</h3>
              <input id="cvv" className="form-control" />
            </label>
          </div>
        </div>

        <div id="etherOption" className={this.state.type=='ether'?'':'hidden'}>
          <div id="choosePoints">
            <label id="newPoints">
              <h3>How Many Points</h3>
              <input className="form-control"></input>
            </label>
            <h3 id="currentPoints">Current Balance: {this.state.points}</h3>
          </div>
          <label id="chooseAddress">
            <h3>Choose address</h3>
            <select className="form-control" value={this.state.account} onChange={this.handleChange('account','select')}>{addressOptions}</select>
          </label>
        </div>
        <button id="submit"><h1>Buy Points</h1></button>
      </div>
    );
  }
})

export default Wallet