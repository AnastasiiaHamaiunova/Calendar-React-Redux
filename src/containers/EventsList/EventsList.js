import React from 'react';
import { EventListItem } from '../../components/EventListItem/EventListItem';

class EventsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      eventName: '',
      startTime: '',
      startEnd: '',
    };
  }

  render() {
    return (
      <EventListItem
        eventName={this.state.eventName}
        startTime={this.state.startTime}
      />
    );
  }
}
export default EventsList;

