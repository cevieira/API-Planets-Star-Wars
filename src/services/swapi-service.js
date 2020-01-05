'use strict';

const axios = require('axios');

const swapi = (planet) => {
    let planetUrl = `https://swapi.co/api/planets/?search=${planet.name}`;
    return axios.get(planetUrl).then(response => {
        if (response.data.count > 0) {
            //Fazendo essa verificação pois a busca feita no Swapi utiliza like, 
            //podendo trazer outros planetas com o nome diferente, comprometendo o resultado.
            if (response.data.results[0].name == planet.name) {
                planet.numberOfMovies = response.data.results[0].films.length;
                return planet;
            } else {
                return planet;
            }

        }
        else {
            return planet;
        }
    });
}
module.exports = swapi;

