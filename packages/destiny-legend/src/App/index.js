import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Period from '../Period';

import './index.css';

export default class App extends Component {
  static propTypes = {
    events: PropTypes.arrayOf(
      PropTypes.shape({
        period: PropTypes.string.isRequired,
        events: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.string.isRequired,
            desc: PropTypes.string.isRequired,
          })
        ),
      })
    ).isRequired,
  };

  render() {
    const { events } = this.props;

    return (
      <section className="App">
        <div className="App_header">
          <h1 className="App_header--title">Destiny Timeline</h1>
          <p className="App_header--desc">Everything we know told to you straight. No prose.</p>
        </div>
        <div className="App_timeline">
          <div className="App_timeline--line" />
          <div classNAme="App_timeline--periods">
            {events.map(event =>
              <Period
                period={event.period}
                events={event.events}
              />
            )}
          </div>
        </div>
      </section>
    );
  }
}
