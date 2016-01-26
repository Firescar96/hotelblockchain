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
          <span>Location</span>
          <input id="location" className="form-control" placeholder="location" value={this.state.location} onChange={this.handleChange("location")} readonly/>
        </label>
        <label htmlFor="checkin">
          <span>Check In</span>
          <input id="checkin" className="form-control" placeholder="checkin" value={this.state.checkin} onChange={this.handleChange("checkin")} readonly/>
        </label>
        <label htmlFor="checkout">
          <span>Check Out</span>
          <input id="checkout" className="form-control" placeholder="checkout" value={this.state.checkout} onChange={this.handleChange("checkout")} readonly/>
        </label>
        <label htmlFor="rooms">
          <span>Rooms</span>
          <input id="rooms" className="form-control" placeholder="rooms" value={this.state.rooms} onChange={this.handleChange("rooms")}></input>
        </label>
        <label htmlFor="guests">
          <span>Guests</span>
          <input className="form-control" placeholder="guests" value={this.state.guests} onChange={this.handleChange("guests")}></input>
        </label>
        <button id="submit" onClick={this.submit}>Book with HotelBlockchain</button>
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