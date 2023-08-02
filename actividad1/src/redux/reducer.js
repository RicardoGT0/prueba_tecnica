import * as action from "./action_type";

const initialState = {
    pokeShow: [], //pokemons que se muestran de la busqueda
    allFavorites: [], //todos los pokemons favoritos
    sort: {}
}

export default function rootReducer(state = initialState, { type, payload }) {
    switch (type) {

        case action.GETPOKEMON:
            return {
                ...state,
                pokeShow: [payload],
            }

        case action.SETFAVORITE:
            const favorite = state.allFavorites.find(favorite => favorite.id === payload.id)

            if (favorite) {
                return {
                    ...state,
                    allFavorites: state.allFavorites.filter(favorite => favorite.id !== payload.id),
                
                }
            }          
            else {
                return {
                    ...state,
                    allFavorites: [...state.allFavorites, payload],
                }
            }
            

        
        case action.SETSORT:
            let tempState = [...state.allFavorites]
            const sor = { ...state.sort, ...payload }
            return {
                ...state,
                sort: sor,
                allFavorites: tempState.sort((x, y) => {
                    
                    if (sor['Orden Alfabetico'] === "Z-A") return y.name.localeCompare(x.name)
                    if (sor['Orden Alfabetico'] === "A-Z") return x.name.localeCompare(y.name)

                    if (sor['Orden por Numero'] === "Ascendente") return x.id - y.id
                    if (sor['Orden por Numero'] === "Descendente") return y.id - x.id

                    if (sor['Orden por Tipo'] === "Z-A") return y.type[0].localeCompare(x.type[0])
                    if (sor['Orden por Tipo'] === "A-Z") return x.type[0].localeCompare(y.type[0])

                    if (sor['Orden por Numero de Evoluciones'] === "Ascendente") return x.evolutions.length - y.evolutions.length
                    if (sor['Orden por Numero de Evoluciones'] === "Descendente") return y.evolutions.length - x.evolutions.length

                    return 0
                })
            }

        default:
            return state
    }
}