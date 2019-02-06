const express = require('express');
const contact = require('./auth');

const supportedMethods = ['get', 'post', 'put', 'delete'];

const configureRouter = (app, routes = []) => {
  const { prefix } = config;
  const router = express.Router();
  routes.forEach(route => {
    const method = route.method.toLowerCase();

    /* Check if method is supported */
    if (!supportedMethods.includes(method)) {
      throw new Error({
        message: `Method ${method} is not supported`
      });
    }

    router[method].apply(router, [`/${route.path}`, route.action]);
    /* Use default prefix from config if router doesn't provide one */
    app.use(`${route.prefix || prefix}`, router);
  });
};

module.exports = app => {
  configureRouter(app, contact);
};
