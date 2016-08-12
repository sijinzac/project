import React from 'react';

class AwesomeTask extends React.Component {

  render() {
    var awestyle = {
      background: '#bdc3c7',
      color: 'darkblue',
      padding: '40px'
    }
    return (
      <div style={awestyle}>{this.props.txt}</div>
    );
  }

}

export default AwesomeTask;
