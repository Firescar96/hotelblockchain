import React from 'react';
import Navbar from '../Navbar.jsx'

var RoomKey = React.createClass({
  getInitialState() {
    return {
      checkin:'',
      checkout:'',
      nights:'',
      rooms:'',
      guests:'',
      location:''
    }
  },
  handleChange: function (key,type) {
    return function (e) {
      var state = {};
      if(type=='date')
      state[key] = e.value
      else
      state[key] = e.target.value;
      this.setState(state);
    }.bind(this);
  },
  submit(e) {
    e.preventDefault()
    console.log(this.state);
    window.location = "/?"+$.param(this.state)
  },
  render() {
    return (
      <div id="roomkey">
        <Navbar/>
        <form id="main" className="container form-group">
          <label htmlFor="location">
            <h4>Location</h4>
            <input id="location" className="form-control" placeholder="location" value={this.state.location} onChange={this.handleChange("location")}/>
          </label>
          <label htmlFor="checkin">
            <h4>Check In</h4>
            <input id="checkin" className="form-control" placeholder="checkin" value={this.state.checkin} onChange={this.handleChange("checkin","date")} readOnly/>
          </label>
          <label htmlFor="checkout">
            <h4>Check Out</h4>
            <input id="checkout" className="form-control" placeholder="checkout" value={this.state.checkout} onChange={this.handleChange("checkout","date")} readOnly/>
          </label>
          <label htmlFor="rooms">
            <h4>Rooms</h4>
            <input id="rooms" className="form-control" placeholder="rooms" value={this.state.rooms} onChange={this.handleChange("rooms")}></input>
          </label>
          <label htmlFor="guests">
            <h4>Guests</h4>
            <input id="guests" className="form-control" placeholder="guests" value={this.state.guests} onChange={this.handleChange("guests")}></input>
          </label>
          <button id="submit" onClick={this.submit}>Book Now</button>
        </form>
      </div>
    )
  },
  componentDidMount(){
    var self=this;
    $("#checkin").datepicker({
      stepHour: 1,
      stepMinute: 5,
      dateFormat: 'D, d M yy',
      onSelect(dateText) {
        self.handleChange('checkin','date')(this)
      }
    })
    $("#checkout").datepicker({
      stepHour: 1,
      stepMinute: 5,
      dateFormat: 'D, d M yy',
      onSelect(dateText) {
        self.handleChange('checkout','date')(this)
      }
    })
  }
})

export default RoomKey