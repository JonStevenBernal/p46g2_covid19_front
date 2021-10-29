<template>
  <section class="section_main">
    <div class="section_main-image"></div>
    <div class="section_main-home">
      <h2>Cerrar Sesión</h2>
      <p>
        ¿Estás seguro que quieres cerrar sesión?:
      </p>
      <form class="creacion_container-form" v-on:submit.prevent="procesarCerrarSesion">        
        <button type="submit">Sí, cerrar sesión</button>
        <button v-on:click="cancelar()">No, volver al inicio</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CerrarSesion',

    methods:{
      procesarCerrarSesion: function(){
        localStorage.setItem('isAuth', false);
        localStorage.removeItem("usuario");
        this.$emit('completedCerrarSesion')
      },

      cancelar: function(){
        
        this.$router.push({ name: "Instrucciones" });
      },
    },
};
</script>

<style>
.section_main {
  width: 100%;
  height: auto;
  padding-top: 50px;
  padding-bottom: 30px;
  text-align: center;
}
.section_main-image {
  width: 20rem;
  height: 20rem;
  margin: 0 auto;
  margin-bottom: 50px;
  background-image: url("../assets/icons8-virus-pur.svg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.section_main-home {
  width: 90%;
  min-width: 288px;
  max-width: 900px;
  margin: 0 auto;
}
.section_main-home h2 {
  margin-bottom: 30px;
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 2.6rem;
  color: var(--primary-color);
}
.section_main-home p {
  margin-bottom: 30px;
  font-size: 1.6rem;
  color: var(--black-letter);
}
</style>
