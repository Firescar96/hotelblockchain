import React from 'react'
import Modal from 'react-modal';
import Wallet from './Wallet.jsx'
import Account from './Account.jsx'

const modalStyles = {
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    width: '700px',
    height: '500px',
    marginRight: '-50%',
    padding: '0',
    overflow: 'hidden',
    transform: 'translate(-50%, -50%)'
  }
};

var Navbar = React.createClass({
  getInitialState() {
    return {
      isWalletModalOpen:true,
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
          <Wallet/>
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