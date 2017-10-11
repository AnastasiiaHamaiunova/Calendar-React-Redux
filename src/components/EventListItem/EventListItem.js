import React from 'react';
import PropTypes from 'prop-types';

export const EventListItem = (props) => {
  return (
    <div>
      <div>
        <p>{}</p>
      </div>
      <div>
        <div>
          <p>Name {props.eventName}</p>
        </div>
        <div>
          <p>Duration {props.startTime}</p>
        </div>
      </div>
    </div>
  );
};

EventListItem.propTypes = {
  eventName: PropTypes.string.isRequired,
  startTime: PropTypes.string.isRequired,
};
