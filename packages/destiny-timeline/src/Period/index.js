import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Event from '../Event';
import EventIcon from '../EventIcon';

import './index.css';

export default class Period extends Component {
  static propTypes = {
    period: PropTypes.string.isRequired,
    events: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired,
      })
    ),
  }
  render() {
    const { period, events } = this.props;

    return <section className="Period" id={period}>
      <div className="Period_header--container">
        <h1 className="Period_header--title">{period}</h1>
      </div>
      {events.length === 0 && <div className="Period_event">
        <div className="Period_event--icon">
          <EventIcon />
        </div>
        <div className="Period_event--event">
          <p className="Period_event--no-events">No recorded events for this time period.</p>
        </div>
      </div>}
      {events.map(event =>
        <div className="Period_event">
          <div className="Period_event--icon">
            <EventIcon />
          </div>
          <div className="Period_event--event">
            <Event
              id={event.id}
              title={event.desc}
              details={event.subtext}
            />
          </div>
        </div>
      )}
    </section>
  }
}
