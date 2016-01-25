import React from 'react';
import Modal from 'react-modal';

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

var Review = React.createClass({
  getInitialState(){
    return {
      isModalOpen: false,
      hotelInfo: this.props.hotelInfo
    }
  },
  handleChange: function (key,type) {
    return function (e) {
      var state = {};
      state[key] = e.target.value;
      this.setState(state);
    }.bind(this);
  },
  closeModal() {
    this.setState({
      isModalOpen: false
    })
  },
  submit(e) {
    e.preventDefault()
    window.location = "https://www.youtube.com/watch?v=pFptt7Cargc"
  },
  render() {
    return (
      <div>
        <button className="btn btn-primary pull-right" onClick={this.handleChange('isModalOpen')} value="true">Review and Finalize</button>
        <Modal
          isOpen={this.state.isModalOpen === 'true'}
          onRequestClose={this.closeModal}
          style={modalStyles}>
          <form className="form-group">
            <input className="form-control" value={this.state.hotelInfo.checkin}></input>
            <input className="form-control" value={this.state.hotelInfo.checkout}></input>
            <input  className="form-control" value={this.state.hotelInfo.nights}></input>
            <input className="form-control" value={this.state.hotelInfo.rooms}></input>
            <input className="form-control" value={this.state.hotelInfo.guests}></input>
            <button onClick={this.submit}>Confirm and Pay</button>
          </form>
        </Modal>
      </div>
    )
  }
})

export default Review