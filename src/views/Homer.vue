<template>
<div class="container d-flex flex-wrap ">
    <div class="card container-fluid mt-5" style="width: 18rem;">
  <img
    :src="user.sprites.front_default"
    class="card-img-top"
    alt=""
  />
  <div class="card-body">
    <h5 class="card-title">Nombre: {{user.name}}</h5>
    <p class="card-text">N°: {{user.order}} </p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Estatura: {{user.weight}}</li>
    <li class="list-group-item">Experiencia Base: {{user.base_experience}}</li>
  </ul>
  <div class="card-body">
    <router-link class="btn btn-success" to="/" >Regresar</router-link>
  </div>
</div>
</div>
</template>

<script>
// @ is an alias to /src
export default {
    data(){
        return {
            mensaje: 'hola',
            user: {},
        };
    },

    methods: {
        async getUser(){
            const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.$route.params.id}`);
            const info = await data.json();
            this.user = info;
        }
    },

    created() {
        this.getUser();
    },

}
</script>
