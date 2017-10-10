import React from 'react';
import { connect } from 'react-redux';
import { EventWindow } from '../../components/EventWindow/EventWindow';

class AddEventWindow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      eventName: '',
      startTime: '',
      duration: 0,
    };
  }

  setEventData = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <EventWindow setEventData={this.setEventData} />
    );
  }
}

export default connect()(AddEventWindow);
