import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { EventWindow } from '../../components/EventWindow/EventWindow';
import { addEventData } from '../../actions/events.action';

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
  addEventData = () => {
    this.props.addEventData(this.state);
  }

  render() {
    return (
      <EventWindow setEventData={this.setEventData} addEventData={this.addEventData} />
    );
  }
}
const mapStateToProps = (store) => {
  return {
    events: store.events,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addEventData: data => dispatch(addEventData(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddEventWindow);

AddEventWindow.propTypes = {
  addEventData: PropTypes.func.isRequired,
};
