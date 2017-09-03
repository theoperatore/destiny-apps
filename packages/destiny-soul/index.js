#!/usr/bin/env node

'use strict';
require('dotenv').config();

const debug = require('debug')('destiny-soul');
const createClient = require('alorg-destiny-client');
const express = require('express');
const cors = require('cors');
const compression = require('compression');
const json = require('body-parser').json;
const createSoulService = require('./soulService');

const port = process.env.PORT || 9966;
const client = createClient(process.env.DESTINY_API_KEY);
const soulService = createSoulService(client);
const app = express();

app.use(cors());
app.use(compression());
app.use(json());

app.get('/v0/soul/:membershipType/:displayName', (req, res) => {
  soulService.getSoul({
    displayName: req.params.displayName,
    membershipType: req.params.membershipType,
  })
  .then(response => {
    res.json({
      status: 'OK',
      response,
    });
  })
  .catch(error => {
    console.error(error);
    res.json({
      status: 'ERROR',
      error: error.message,
    });
});

app.listen(port, () => {
  debug('listening on port', port);
});
