'use strict';

/**
 * b3 router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::b3.b3');
