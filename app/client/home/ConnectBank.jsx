import React from 'react';

var ConnectBank = React.createClass({
  render() {
    return (
      <div>
        <input placeholder="Card Number" />
        <input placeholder="Expiration" />
        <input placeholder="CVV" />
        <input placeholder="Billing" />
      </div>
    );
  }
})

export default ConnectBank