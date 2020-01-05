'use strict';

const axios = require('axios');

const swapi = (planet) => {
    let planetUrl = `https://swapi.co/api/planets/?search=${planet.name}`;
    return axios.get(planetUrl).then(response => {
        if (response.data.count > 0) {
            planet.numberOfMovies = response.data.results[0].films.length;
            return planet;
        }
        else {
            return planet;
        }
    });
}
module.exports = swapi;

