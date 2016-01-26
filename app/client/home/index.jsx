import React from 'react';

import LoginSignup from './LoginSignup.jsx'
import ConnectBank from './ConnectBank.jsx'
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
                <a data-toggle="collapse" data-parent="#flow-accordion" href="#loginsignup">Login Signup</a>
              </h4>
            </div>
            <div id="loginsignup" className="panel-collapse collapse">
              <LoginSignup className="panel-body"/>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a data-toggle="collapse" data-parent="#flow-accordion" href="#connectbank">Connect Bank</a>
              </h4>
            </div>
            <div id="connectbank" className="panel-collapse collapse out">
              <ConnectBank className="panel-body"/>
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
        <Review hotelInfo={this.state.hotelInfo} />
      </div>
    )
  }
})

export default Home