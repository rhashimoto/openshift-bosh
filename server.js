#!/bin/env node

var nxb    = require('node-xmpp-bosh');
var server = nxb.start_bosh({
  logging: "TRACE",
  host: process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0',
  port: process.env.OPENSHIFT_NODEJS_PORT || 5280, 
  path: /^\/http-bind(\/+)?$/
});
