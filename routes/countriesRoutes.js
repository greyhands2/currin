const express = require('express');
const router = express.Router();


const {getAllCountries, getCountry, getCountriesGroup} = require('../controls/countriesControls.js');



router.route('/')
.get( getAllCountries);

router.route('/:countryName')
.get(getCountry);

router.get('/group/:query', getCountriesGroup);


module.exports = router;