'use strict';

module.exports = function createSoulService(client) {
  const getSoul = async ({ membershipType, displayName }) => {
    if (!membershipType) throw new Error("Error: Missing valid membershipType");
    if (!displayName) throw new Error("Error: Missing valid displayName");

    const player = await client.searchDestinyPlayer({ displayName, membershipType });

    const destinyMembershipId = player.Response.membershipId;

    const profile = await client.getProfile({
      membershipType,
      destinyMembershipId,
      components: [
        'Characters',
      ],
    });

    // get characters into a useable state
    const characters = Object
      .keys(profile.Response.characters.data)
      .map(key => profile.Response.characters.data[key]);

    const characterIds = characters
      .map(character => character.characterId);

    // get all characters activities
    const activityHistories = await Promise.all(
      characterIds.map(id => client.getActivityHistory({
        membershipType,
        destinyMembershipId,
        characterId: id
      }))
    );

    // if one of each class type: 'is a well balanced player',
    // if more hunters: 'favors the hunter above all else',
    // etc..

    // investigate:
    // getHistoryicalStatsForAccount


    return {
      text: player,
    };
  }

  return {
    getSoul,
  };
}
