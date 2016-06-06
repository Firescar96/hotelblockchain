import React from 'react';
import Navbar from '../navbar/Navbar.jsx'

var TrackExpenses = React.createClass({
  render() {
    return (
      <div id="trackexpenses">
        <Navbar/>
      </div>
    )
  },
  componentDidMount(){
    $("#checkIn").datepicker({
      stepHour: 1,
      stepMinute: 5,
      dateFormat: 'D, d M yy'
    })
    $("#checkOut").datepicker({
      stepHour: 1,
      stepMinute: 5,
      dateFormat: 'D, d M yy'
    })
  }
})

export default TrackExpenses