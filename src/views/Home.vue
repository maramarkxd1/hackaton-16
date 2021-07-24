<template>
<div>
  <TheHeader/>
  <div class="position-relative">
    <div class="position-absolute top-0 end-0 p-2">
      <Pagination/>
    </div>
  </div>
  <h1>Pokemones</h1>
  <div class="container-fluid d-flex flex-wrap p-3 bg-transparent">
    <div v-for="(poke, index) in pokes" :key="index">
      <div class="card p-3 bg-transparent border border-primary rounded-3 border-2" style="width: 18rem;">
        <img :src="poke.sprites.front_default" class="card-img-top" alt="" />
        <div class="card-body">
          <h5 class="card-title">NOMBRE: {{poke.name}}</h5>
          <p class="card-text">N°: {{poke.order}}</p>
          <router-link :to="`/${poke.id}`"  class="btn btn-primary">Ver Detalles</router-link>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
import { mapState, mapActions } from "vuex";
import TheHeader from '../components/TheHeader.vue';
import Pagination from '../components/Pagination.vue'

export default {
  name: "Home",
  components: {
    TheHeader,
    Pagination,
  },
  computed: {
    ...mapState(["pokes"]),
  },
  methods: {
    ...mapActions(["setPokemonAction"]),
  },
  created() {
    this.setPokemonAction();
  },
};
</script>
