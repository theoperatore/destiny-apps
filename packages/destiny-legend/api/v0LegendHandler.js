'use strict';

const Router = require('express').Router;

module.exports = function createLegendHandler(destinyClient) {
  const router = Router();

  router.get('/legend/:membershipType/:membershipId/:characterId', (req, res) => {
    res.sendStatus(501);
  });

  router.get('/search/:membershipType/:displayName', async (req, res) => {
    try {
      const searchResponse = await destinyClient.searchDestinyPlayer({
        membershipType: req.params.membershipType,
        displayName: req.params.displayName,
      });

      res.json({
        results: searchResponse.Response,
      });

    } catch (err) {
      console.log(err);
      res.sendStatus(503);
    }
  });

  router.get('/characters/:membershipType/:membershipId', async (req, res) => {
    try {
      const profileResponse = await destinyClient.getProfile({
        membershipType: req.params.membershipType,
        destinyMembershipId: req.params.membershipId,
        components: ['Characters'],
      });

      res.json({
        results: profileResponse.Response,
      });

    } catch (err) {
      console.log(err);
      res.sendStatus(503);
    }
  });

  return router;
}
