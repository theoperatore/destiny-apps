import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import createDestinyClient from 'alorg-destiny-client';

const client = createDestinyClient(process.env.REACT_APP_DESTINY_API_KEY);

client.searchDestinyPlayer({
  displayName: 'Abersoto',
  membershipType: 2,
})
.then(response => response.ok && response.json())
.then(response => {
  console.log(response);
})
.catch(error => {
  console.error(error);
});

ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
