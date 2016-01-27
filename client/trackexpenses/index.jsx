import React from 'react';
import Navbar from '../Navbar.jsx'

var TrackExpenses = React.createClass({
  render() {
    return (
      <div id="trackexpenses">
        <Navbar/>
      </div>
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

export default TrackExpenses