#!/usr/bin/env node

'use strict';
const createClient = require('destiny-client');
const client = createClient('d45839607db54a84a5bd3df8e1307cf4');

client.searchDestinyPlayer()

// const Swagger = require('swagger-client');
// const spec = require('./openapi-2.json');

// apikey: 'd45839607db54a84a5bd3df8e1307cf4'
// Swagger({
//   spec,
//   authorizations: {
//     apiKey: 'd45839607db54a84a5bd3df8e1307cf4',
//   },
// })
// .then(client => {
//   client.execute({
//     operationId: 'Destiny2_SearchDestinyPlayer',
//     parameters: {
//       membershipType: 2,
//       displayName: 'Abersoto',
//     }
//   })
//   .then(thing => {
//     console.log('resoled with:', thing);
//     process.exit(0);
//   })
//   .catch(error => {
//     console.log('got request error');
//     console.error(error)
//     process.exit(1);
//   });
//   // client.apis.Destiny2.Destiny2_SearchDestinyPlayer({
//   //   membershipType: 2,
//   //   displayName: 'Abersoto',
//   // })
//   //   .then((...args) => {
//   //     console.log('resoled with:', args);
//   //     process.exit(0);
//   //   })
//   //   .catch(error => {
//   //     console.log('got request error');
//   //     console.error(error)
//   //     process.exit(1);
//   //   });
// })
// .catch(error => {
//   console.error(error);
//   process.exit(1);
// });
