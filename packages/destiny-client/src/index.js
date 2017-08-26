'use strict';

const debug = require('debug')('destiny-client');
const request = require('request');

const base = 'https://bungie.net/Platform';

module.exports = function createClient(apiKey) {
  if (!apiKey) throw new Error("API key required for all destiny endpoints!");

  return {

    // find a membershipId of a user through searching for gamertag/psn
    searchDestinyPlayer({ displayName, membershipType }) {
      return new Promise((resolve, reject) => {
        const req = {
          'X-API-Key': apiKey,
          url: `${base}/Destiny2/SearchDestinyPlayer/${membershipType}/${displayName}/`,
        };

        request(req, (error, response, body) => {
          if (error) return reject(error);
          if (!response) return reject(new Error("Response not received"));

          return resolve(body);
        });
      });
    },

    // get a user's profile with component support
    getProfile({ membershipType, destinyMembershipId, components = [] }) {
      return new Promise((resolve, reject) => {
        const req = {
          'X-API-Key': apiKey,
          url: `${base}/Destiny2/${membershipType}/Profile/${destinyMembershipId}/?components=${components.join()}`,
        };

        request(req, (error, response, body) => {
          if (error) return reject(error);
          if (!response) return reject(new Error("Response not received"));

          return resolve(body);
        });
    },
  };
}
