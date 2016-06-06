import React from 'react';
import Modal from 'react-modal';

const modalStyles = {
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    width: '500px',
    height: '300px',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}

var Account = React.createClass({
  getInitialState() {
    return {
      account: web3.eth.defaultAccount,
      accounts: [],
      type:'signup'
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
  submit() {
    if(this.state.type == 'login')
    web3.eth.defaultAccount = this.state.account
    else {
      PersonaRegistry.registerPersona(this.state.account)
      web3.eth.defaultAccount = this.state.account
    }
    this.props.closeModal()
  },
  componentWillMount() {
    web3.eth.getAccounts((err,accounts) => {
      this.setState({accounts:accounts})
    })
  },
  render() {
    var addressOptions = this.state.accounts.map((account) => {
      return (
        <option value={account} key={account}>{account}</option>
      )
    })

    return (
      <div id="account" className="form-group">
        <div id="accountToggleGroup">
          <label htmlFor="signup" className={this.state.type=='signup'?'checked':''}>
            <input id="signup" name="accountToggle" type="radio" onClick={this.handleChange('type')} value="signup" checked={this.state.type=='signup'}/>
            <h2>Signup</h2>
          </label>

          <label htmlFor="login" className={this.state.type=='login'?'checked':''}>
            <input id="login" name="accountToggle" type="radio" onClick={this.handleChange('type')} value="login" checked={this.state.type=='login'}/>
            <h2>Login</h2>
          </label>
        </div>

        <div id="signupOption" className={this.state.type=='signup'?'':'hidden'}>
          <label htmlFor="address">
            <h3>Address</h3>
            <select id="address" className="form-control" value={this.state.account} onChange={this.handleChange('account','select')}>{addressOptions}</select>
          </label>
          <label htmlFor="password">
            <h3>Password</h3>
            <input id="password" className="form-control" />
          </label>
        </div>
        <div id="loginOption" className={this.state.type=='login'?'':'hidden'}>
          <label htmlFor="address">
            <h3>Address</h3>
            <select id="address" className="form-control" value={this.state.account} onChange={this.handleChange('account','select')}>{addressOptions}</select>
          </label>
          <label htmlFor="password">
            <h3>Password</h3>
            <input id="password" className="form-control" />
          </label>
        </div>
        <button id="submit" onClick={this.submit}><h1>{this.state.type == 'signup'?'sign up': 'login'}</h1></button>
      </div>
    )
  }
})

export default Account