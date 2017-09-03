'use strict';

require('es6-promise').polyfill();
require('isomorphic-fetch');

const base = 'https://www.bungie.net/Platform';

module.exports = function createClient(apiKey) {
  if (!apiKey || typeof apiKey !== 'string') throw new Error("String apiKey required for all destiny endpoints!");

  return {
    // find a membershipId of a user through searching for gamertag/psn
    searchDestinyPlayer: ({ displayName, membershipType }) =>
      fetch(
        `${base}/Destiny2/SearchDestinyPlayer/${membershipType}/${displayName}/`,
        {
          headers: new Headers({
            'X-API-Key': apiKey,
          }),
        }
      ).then(response => response.json()),

    // get a user's profile with component support
    getProfile: ({ membershipType, destinyMembershipId, components = [] }) =>
      fetch(
        `${base}/Destiny2/${membershipType}/Profile/${destinyMembershipId}/${ components.length > 0 && `?components=${components.join()}`}`,
        {
          headers: new Headers({
            'X-API-Key': apiKey,
          }),
        }
      ).then(response => response.json()),

    getActivityHistory: ({ membershipType, destinyMembershipId, characterId }) =>
      fetch(
        `/Destiny2/${membershipType}/Account/${destinyMembershipId}/Character/${characterId}/Stats/Activities/`,
        {
          headers: new Headers({
            'X-API-Key': apiKey,
          }),
        }
      ).then(response => response.json()),
  };
}
