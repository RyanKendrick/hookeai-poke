"use strict";

const knexConfig = require('./knexfile');
const knex = require("knex")(knexConfig[ENV]);

