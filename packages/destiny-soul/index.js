#!/usr/bin/env node

'use strict';
const express = require('express');
const cors = require('cors');
const compression = require('compression');
const json = require('body-parser').json;
const createClient = require('alorg-destiny-client');

const app = express();
const client = createClient('d45839607db54a84a5bd3df8e1307cf4');

client.searchDestinyPlayer({
  displayName: 'Abersoto',
  membershipType: 2,
})
.then(response => {
  console.log(response);
  process.exit(0);
})
.catch(error => {
  console.error(error);
  process.exit(1);
});
