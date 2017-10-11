import React from 'react';
import PropTypes from 'prop-types';

export const EventWindow = (props) => {
  return (
    <div>
      <div>
        <h2>Event name</h2>
        <input type="text" name="eventName" placeholder="Enter Event Name" onChange={props.setEventData} />
      </div>
      <div>
        <div>
          <h2>Start</h2>
          <input name="startTime" type="time" onChange={props.setEventData} />
        </div>
        <div>
          <h2>Duration</h2>
          <input name="duration" type="number" onChange={props.setEventData} />
          <span>minutes</span>
        </div>
      </div>
      <button onClick={props.addEventData}>Add</button>
    </div>
  );
};

EventWindow.propTypes = {
  setEventData: PropTypes.func.isRequired,
  addEventData: PropTypes.func.isRequired,
};
