import React from 'react';

import LoginSignup from '../Account.jsx'
import Wallet from '../Wallet.jsx'
import Terms from './Terms.jsx'
import Review from './Review.jsx'

var Home = React.createClass({
  getInitialState() {
    return {
      termsAccepted:false,
      hotelInfo: this.props.params
    }
  },
  flipTermsAccepted(e) {
    this.setState({termsAccepted: e.target.checked})
  },
  render() {
    return (
      <div id="home" className="container">
        <h1>
          Hotel Blockchain
        </h1>
        <div className="panel-group" id="flow-accordion">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a data-toggle="collapse" data-parent="#flow-accordion" href="#details">Reservation Details</a>
              </h4>
            </div>
            <div id="details" className="panel-collapse collapse">
              <Review className="panel-body" hotelInfo={this.state.hotelInfo}/>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a data-toggle="collapse" data-parent="#flow-accordion" href="#terms">View Terms</a>
              </h4>
            </div>
            <div id="terms" className="panel-collapse collapse out">
              <Terms className="panel-body"/>
            </div>
          </div>
          <div>
            <label>
              Accept Terms
              <input type="checkbox" checked={this.state.termsAccepted} onChange={this.flipTermsAccepted}/>
            </label>
          </div>
        </div>
      </div>
    )
  }
})

export default Home