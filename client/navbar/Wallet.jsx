import React from 'react';

var Wallet = React.createClass({
  getInitialState(){
    web3.eth.getAccounts((_,accounts) => {
      this.setState({accounts:accounts})
    })
    return {
      type:'ether',
      account: web3.eth.defaultAccount,
      accounts: [],
      balance: '',
      points: '',
      cost: 0,
      hotel: ''
    }
  },
  handleChange: function (key,type) {
    return function (e) {
      var state = this.state;
      if(type=='select')
      state[key]=e.target.options[e.target.selectedIndex].value
      else
      state[key] = e.target.value;

      if(key=='hotel')
      state['balance']=PersonaRegistry.getTokenAmount.call(web3.eth.defaultAccount,this.state.hotel).toNumber()

      if(key=='hotel' || key =='points') {
        state['cost']=(parseInt(state.points)|| 0)/LoyaltyTokenRegistry.getTokenConversionRate.call(state.hotel).toNumber();
      }

      this.setState(state)
    }.bind(this);
  },
  submit(){
    var gas = PersonaRegistry.increaseTokenAmount.estimateGas(web3.eth.defaultAccount,this.state.hotel)*2
    PersonaRegistry.increaseTokenAmount(web3.eth.defaultAccount,this.state.hotel,
      {
        value:(parseInt(this.state.cost)||0),
        gas:gas,
        gasPrice:web3.eth.gasPrice.toNumber(),
      })
    this.props.closeModal()
  },
  render() {
    var addressOptions = this.state.accounts.map((account) => {
      return (
        <option value={account} key={account}>{account}</option>
      )
    })
    var totalTokens = LoyaltyTokenRegistry.totalTokens()
    var hotels = []
    for (var i = 0; i < totalTokens; i++) {
      var tokenAddr = LoyaltyTokenRegistry.registryRecords(i)
      var namesym =  LoyaltyTokenRegistry.getTokenNameSymbol.call(tokenAddr)
      var sym = web3.toAscii(namesym[1]).replace('\0', '').replace(/\0/g, '')
      hotels.push((
        <label htmlFor={sym} className={this.state.hotel==tokenAddr?'checked':''}>
          <input id={sym} className="form-control" name="hotelToggle" type="radio" onClick={this.handleChange('hotel')} value={tokenAddr}/>
        </label>
      ))
    }

    return (
      <div id="wallet" className="form-group">
        <div id="walletTitle"><h1>My Wallet</h1></div>
        <div id="bankToggleGroup">
          <h2 id="pointsCost">Current Balance: {this.state.balance}</h2>
          <label htmlFor="fiat" className={this.state.type=='fiat'?'checked':''}>
            <input id="fiat" name="bankToggle" type="radio" onClick={this.handleChange('type')} value="fiat" checked={this.state.type==='fiat'}/>
            <h2>Fiat</h2>
          </label>

          <label htmlFor="ether" className={this.state.type=='ether'?'checked':''}>
            <input id="ether" name="bankToggle" type="radio" onClick={this.handleChange('type')} value="ether" checked={this.state.type==='ether'}/>
            <h2>Ether</h2>
          </label>
        </div>
        <div id="choosePoints">
          <label id="newPoints">
            <h3>How Many Points?</h3>
            <input className="form-control" onChange={this.handleChange('points')} value={this.state.points}/>
          </label>
          <div id="pointsCost">
            <h3>Total Cost</h3>
            <p>{this.state.cost}</p>
          </div>
        </div>
        <div id="chooseHotels">
          <h3>What Kind?</h3>
          {hotels}
        </div>
        <div id="fiatOption" className={this.state.type=='fiat'?'':'hidden'}>
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
          <label id="chooseAddress">
            <h3>Choose address</h3>
            <select className="form-control" value={this.state.account} onChange={this.handleChange('account','select')}>{addressOptions}</select>
          </label>
        </div>
        <button id="submit" onClick={this.submit}><h1>Buy Points</h1></button>
      </div>
    );
  }
})

export default Wallet