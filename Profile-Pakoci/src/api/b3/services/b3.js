'use strict';

/**
 * b3 service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::b3.b3');
