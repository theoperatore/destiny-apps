#!/usr/bin/env node

'use strict';
require('dotenv').config();

const debug = require('debug')('destiny-soul');
const createClient = require('alorg-destiny-client');
const express = require('express');
const cors = require('cors');
const compression = require('compression');
const json = require('body-parser').json;

const port = process.env.PORT || 9966;
const client = createClient(process.env.DESTINY_API_KEY);
const app = express();

app.use(cors());
app.use(compression());
app.use(json());

app.listen(port, () => {
  debug('listening on port', port);
});

client.searchDestinyPlayerFetch({
  displayName: 'Abersoto',
  membershipType: 2,
})
.then(response => response.ok && response.json())
.then(response => {
  console.log(response);
  process.exit(0);
})
.catch(error => {
  console.error(error);
  process.exit(1);
});
