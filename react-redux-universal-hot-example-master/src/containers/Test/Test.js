import React, { Component } from 'react';
import {TestComponent} from 'components';

const details = {
  dateofjoin: '04-06-2016',
  desig: 'Engineer'
};

export default class Test extends Component {
  date() {
    return Date();
  }
  render() {
    const names = ['Jake', 'Jon', 'Thruster'];
    return (
      <div>
        <h1> This is a test page </h1>
        <TestComponent Name="QBurst"
                       Contact={4712541370}
                       Location="Technopark"
                       PIN={695025}
                       User={names}
                       datadetails={details}
                       date={this.date}
                       flag/>
      </div>
    );
  }
}
