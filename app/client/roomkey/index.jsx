import React from 'react';

var RoomKey = React.createClass({
  getInitialState() {
    return {
      checkin:"",
      checkout:"",
      nights:"",
      rooms:"",
      guests:""
    }
  },
  handleChange: function (key) {
    return function (e) {
      var state = {};
      state[key] = e.target.value;
      this.setState(state);
    }.bind(this);
  },
  submit(e) {
    e.preventDefault()
    window.location = "/?"+$.param(this.state)
  },
  render() {
    return (
      <div className="container">
        <form className="form-group">
          <input className="form-control" placeholder="checkin" value={this.state.checkin} onChange={this.handleChange("checkin")}></input>
          <input className="form-control" placeholder="checkout" value={this.state.checkout} onChange={this.handleChange("checkout")}></input>
          <input  className="form-control" placeholder="nights" value={this.state.nights} onChange={this.handleChange("nights")}></input>
          <input className="form-control" placeholder="rooms" value={this.state.rooms} onChange={this.handleChange("rooms")}></input>
          <input className="form-control" placeholder="guests" value={this.state.guests} onChange={this.handleChange("guests")}></input>
          <button onClick={this.submit}>Book with HotelBlockchain</button>
        </form>
      </div>
    )
  }
})

export default RoomKey