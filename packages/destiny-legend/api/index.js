'use strict';

require('dotenv').config();

const fs = require('fs');
const path = require('path');
const https = require('https');
const express= require('express');
const helmet = require('helmet');
const compression = require('compression');
const cors = require('cors');
const createClient = require('alorg-destiny-client');

const v0LegendHandler = require('./v0LegendHandler');
const client = createClient(process.env.DESTINY_API_KEY);

const PORT = process.env.PORT || 9966;
const app = express();

app.use(helmet());
app.use(cors());
app.use(compression());
app.use('/v0', v0LegendHandler(client));

const credentials = {
  key: fs.readFileSync(path.resolve(__dirname, '../', process.env.DESTINY_SSL_KEY_REL_PATH)),
  cert: fs.readFileSync(path.resolve(__dirname, '../', process.env.DESTINY_SSL_CERT_REL_PATH)),
};

const httpsServer = https
  .createServer(credentials, app)
  .listen(PORT, () => console.log(`server running on port ${PORT}`));
