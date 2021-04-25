const express = require('express');
const ExpressRedisCache = require('express-redis-cache')
const cache = ExpressRedisCache({
    expire: 2592000 , // optional: expire every 1 month
})
const {getAllCountries, getCountry, getCountriesGroup} = require('../controls/countriesControls.js');

const  router = express.Router();

router.route('/')
    .get(cache.route(),  getAllCountries)
router.route('/:countryName')
.get(getCountry);
route.get('/:query', getCountriesGroup);