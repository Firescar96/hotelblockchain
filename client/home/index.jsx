import React from 'react';
import Navbar from '../navbar/Navbar.jsx'

var Home = React.createClass({
  getInitialState() {
    return {
      checkIn:'',
      checkOut:'',
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
    var state = this.state
    state['checkIn'] = $.datepicker.formatDate('yy-mm-dd', $.datepicker.parseDate('D, d M yy', state.checkIn))
    state['checkOut'] = $.datepicker.formatDate('yy-mm-dd', $.datepicker.parseDate('D, d M yy', state.checkOut))
    console.log(state);
    window.location = 'http://www.roomkey.com/#geocircles/42.355343|-71.0978562|10/hotels?'+$.param(state)
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
          <label htmlFor="checkIn">
            <h4>Check In</h4>
            <input id="checkIn" className="form-control" placeholder="checkIn" value={this.state.checkIn} onChange={this.handleChange("checkIn","date")} readOnly/>
          </label>
          <label htmlFor="checkOut">
            <h4>Check Out</h4>
            <input id="checkOut" className="form-control" placeholder="checkOut" value={this.state.checkOut} onChange={this.handleChange("checkOut","date")} readOnly/>
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
    $("#checkIn").datepicker({
      stepHour: 1,
      stepMinute: 5,
      dateFormat: 'D, d M yy',
      onSelect(dateText) {
        self.handleChange('checkIn','date')(this)
      }
    })
    $("#checkOut").datepicker({
      stepHour: 1,
      stepMinute: 5,
      dateFormat: 'D, d M yy',
      onSelect(dateText) {
        self.handleChange('checkOut','date')(this)
      }
    })
  }
})

export default Home