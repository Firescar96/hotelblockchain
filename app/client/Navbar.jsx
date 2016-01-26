import React from 'react'
import Modal from 'react-modal';
import ConnectBank from './ConnectBank.jsx'
import Account from './Account.jsx'
import {modalStyles} from './lib/lib.jsx'


var Navbar = React.createClass({
  getInitialState() {
    return {
      isWalletModalOpen:false,
      isAccountModalOpen:false
    }
  },
  handleChange: function (key,type) {
    return function (e) {
      var state = {};
      state[key] = e.target.value;
      this.setState(state);
    }.bind(this);
  },
  closeModals() {
    this.setState({
      isWalletModalOpen: false,
      isAccountModalOpen: false
    })
  },
  render(){
    return (
      <nav>
        <button>Buy Points</button>
        <a href="/trackexpenses"><button>Track Expenses</button></a>
        <button onClick={this.handleChange('isWalletModalOpen')} value={true}>My Wallet</button>
        <button onClick={this.handleChange('isAccountModalOpen')} value={true}>Account</button>
        <button>About</button>

        <Modal
          isOpen={this.state.isWalletModalOpen === 'true'}
          onRequestClose={this.closeModals}
          style={modalStyles}>
          <ConnectBank/>
        </Modal>
        <Modal
          isOpen={this.state.isAccountModalOpen === 'true'}
          onRequestClose={this.closeModals}
          style={modalStyles}>
          <Account/>
        </Modal>
      </nav>
    )
  }
})


export default Navbar