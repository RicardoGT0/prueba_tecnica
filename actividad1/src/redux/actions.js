import axios from 'axios'
import * as action from './action_type'

export const setFilter = (filter) => {
    return {
        type: action.SETFILTER,
        payload: filter
    }
}
export const setSort = (sort) => {
    return {
        type: action.SETSORT,
        payload: sort,
    }
}

export const setFavorite = (pokemon) => {
    return {
        type: action.SETFAVORITE,
        payload: pokemon,
    }
}

const getPokemons = async (pokemonList) => {
    let requests = pokemonList.map(pokemon => axios.get('https://pokeapi.co/api/v2/pokemon/' + pokemon));
    let pokemons = [];
    try {
        let responses = await Promise.all(requests);
        responses.forEach(response => {
            const pokemon = {
                id: response.data.id,
                name: response.data.name,
                image: response.data.sprites.other["official-artwork"].front_default,
                type: response.data.types.map((type) => type.type.name),
                abilities: response.data.abilities.map((ability) => ability.ability.name),
                species: response.data.species.url,
            }
            pokemons.push(pokemon);
        });
    } catch (error) {
        console.error(error);
    }
    return pokemons;
}

function getEvolvesTo(name, obj) {
    if (obj.species.name === name) {
        return obj.evolves_to.map((evolution) => evolution.species.name);
    }

    for (let i = 0; i < obj.evolves_to.length; i++) {
        const nextLevel = getEvolvesTo(name, obj.evolves_to[i]);

        if (nextLevel) {
            return nextLevel;
        }
    }
    return null;
}

export const getPokemon = (input) => async (dispatch) => {
    try {
        const [pokemon] = await getPokemons([input])
        const species = await axios.get(pokemon.species)
        const evolution_chain = await axios.get(species.data.evolution_chain.url)
        const evolution_chain_data = evolution_chain.data.chain
        const evolutionsNames = getEvolvesTo(pokemon.name, evolution_chain_data)
        pokemon.evolutions = await getPokemons(evolutionsNames)

        dispatch({
            type: action.GETPOKEMON,
            payload: pokemon
        })
    } catch (error) {
        console.log(error)
    }
}


