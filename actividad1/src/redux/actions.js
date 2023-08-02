
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
                favorite: false,
                species: response.data.species.url,
            }
            pokemons.push(pokemon);
        });
    } catch (error) {
        console.error(error);
    }
    return pokemons;
}

export const getPokemon = (input) => async (dispatch) => {
    try {
        const [pokemon] = await getPokemons([input])

        const species = await axios.get(pokemon.species)

        const evolution_chain = await axios.get(species.data.evolution_chain.url)

        const evolution_chain_data = evolution_chain.data.chain.evolves_to
        const evolutionsNames = evolution_chain_data.map((evolution) => evolution.species.name)

       pokemon.evolutions = await getPokemons(evolutionsNames)


        dispatch({
            type: action.GETPOKEMON,
            payload: pokemon
        })
    } catch (error) {
        console.log(error)
    }
}


