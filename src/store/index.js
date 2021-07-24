import { createStore } from 'vuex'

const URL = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20'

export default createStore({
  state: {
    pokes: [],
    poke: {},
  },
  mutations: {
    setPokemonMutation(state, payload){
      state.pokes = payload;
    },

    setPokeMutation(state, payload){
      state.poke = payload;
    }
  },
  actions: {
    async setPokemonAction({commit}) {
      const params = {
        method: "GET",
    };
      let arrayPokemones = [];
      const datos = await fetch(URL, params);
      let pokemones = await datos.json();

      pokemones.results.forEach(async(pokemon) => {
        const data = await fetch(pokemon.url);
        let elemento = await data.json();
        arrayPokemones = [...arrayPokemones, elemento];
        commit("setPokemonMutation", arrayPokemones);
      })
    },


    async setPokeAction({commit}) {
      const params = {
        method: "GET",
    };
      let objPoke = {};
      const datos = await fetch(URL, params);
      let pokemones = await datos.json();

      pokemones.results.forEach(async(pokemon) => {
        const data = await fetch(pokemon.url+pokemon.id);
        let elemento = await data.json();
        objPoke = [...objPoke, elemento];
        commit("setPokeMutation", objPoke);
      })
    },
  },
})
