import React from 'react';

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
  handleChange: function (key) {
    return function (e) {
      var state = {};
      state[key] = e.target.value;
      $.datepicker.parseDate('D, d M yy', value, options )

      this.setState(state);

    }.bind(this);
  },
  submit(e) {
    e.preventDefault()
    window.location = "/?"+$.param(this.state)
  },
  render() {
    return (
      <form id="main" className="container form-group">
        <label htmlFor="location">
          <h4>Location</h4>
          <input id="location" className="form-control" placeholder="location" value={this.state.location} onChange={this.handleChange("location")} readonly/>
        </label>
        <label htmlFor="checkin">
          <h4>Check In</h4>
          <input id="checkin" className="form-control" placeholder="checkin" value={this.state.checkin} onChange={this.handleChange("checkin")} readonly/>
        </label>
        <label htmlFor="checkout">
          <h4>Check Out</h4>
          <input id="checkout" className="form-control" placeholder="checkout" value={this.state.checkout} onChange={this.handleChange("checkout")} readonly/>
        </label>
        <label htmlFor="rooms">
          <h4>Rooms</h4>
          <input id="rooms" className="form-control" placeholder="rooms" value={this.state.rooms} onChange={this.handleChange("rooms")}></input>
        </label>
        <label htmlFor="guests">
          <h4>Guests</h4>
          <input className="form-control" placeholder="guests" value={this.state.guests} onChange={this.handleChange("guests")}></input>
        </label>
        <button id="submit" onClick={this.submit}>Book Now</button>
      </form>
    )
  },
  componentDidMount(){
    $("#checkin").datepicker({
      stepHour: 1,
      stepMinute: 5,
      dateFormat: 'D, d M yy'
    })
    $("#checkout").datepicker({
      stepHour: 1,
      stepMinute: 5,
      dateFormat: 'D, d M yy'
    })
  }
})

export default RoomKey