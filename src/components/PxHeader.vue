<template>
  <head>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
    />
  </head>
  <header class="header ">
    <div class="header_section">
      <div class="header_section-item" v-on:click="loadInicio">
        <figure class="item_figure">
          <img src="../assets/icons8-virus-pur.svg" alt="logo Coronavirus" />
        </figure>
        <div class="item_title">
          <h1 class="">CoronActual <br />Te salva la vida</h1>
        </div>
      </div>
      <figure class="header_section_buton" v-on:click="toggleShowNav">
        <img class="" src="../assets/icons8-menu_rounded.svg" alt="Menu" />
      </figure>
    </div>
    <nav class="nav animate__animated animate__fadeInDown" v-show="showNav">
      <ul class="nav_section">
        <li class="" v-on:click="loadInicio">Inicio</li>
        <li v-if="isAuth" class="" v-on:click="loadMostrar">
          Mostrar Registros
        </li>
        <li v-if="isAuth" class="" v-on:click="loadCrearRegistro">
          Crear Registro
        </li>
        <li v-if="isAuth" class="" v-on:click="loadFiltrarSexo">
          Filtrar Sexo
        </li>
        <li v-if="isAuth" class="" v-on:click="loadFiltrarEstado">
          Filtrar Estado
        </li>
        <li v-if="!isAuth" class="" v-on:click="loadIniciarSesion">
          Iniciar Sesión
        </li>
        <li v-if="isAuth" class="" v-on:click="loadCerrarSesion">
          Cerrar Sesión
        </li>
        <li v-if="isAuth" class="" v-on:click="loadEliminarCuenta">
          Eliminar cuenta
        </li>
        <li v-if="!isAuth" class="" v-on:click="loadCrearNuevoUsuario">
          Crear nueva cuenta
        </li>
        
        <!-- <li class="" v-on:click="loadCrearSeguimiento">
          Crear seguimiento
        </li>
        <li class="" v-on:click="loadModificarSeguimiento">
          ModificarSeguimiento
        </li> -->
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data: function() {
    //inicializar variables dentro de este componente
    return {
      showNav: false,
      isAuth: false,
    };
  },
  methods: {
    toggleShowNav: function() {
      if (this.showNav == true) this.showNav = false;
      else this.showNav = true;
    },
    verificarAutenticacion: function(){
      if(localStorage.getItem("isAuth") == true){
        this.isAuth = true;
      }
      else{
        this.isAuth = false;
      }
    },
    loadInicio: function() {
      this.$router.push({ name: "Instrucciones" });
    },

    loadMostrar: function() {
      this.$router.push({ name: "MostrarRegistros" });
    },

    loadCrearRegistro: function() {
      this.$router.push({ name: "CrearRegistro" });
    },

    loadFiltrarSexo: function() {
      this.$router.push({ name: "FiltrarSexo" });
    },

    loadIniciarSesion: function() {
      this.$router.push({ name: "IniciarSesion" });
    },

    loadCerrarSesion: function() {
      this.$router.push({ name: "CerrarSesion" });
    },

    loadEliminarCuenta: function() {
      this.$router.push({ name: "EliminarCuenta" });
    },

    loadCrearNuevoUsuario: function() {
      this.$router.push({ name: "CrearNuevoUsuario" });
    },

    loadFiltrarEstado: function() {
      this.$router.push({ name: "FiltrarEstado" });
    },

    loadModificarSeguimiento: function() {
      this.$router.push({ name: "ModificarSeguimiento" });
    },

    loadCrearSeguimiento: function() {
      this.$router.push({ name: "CrearSeguimiento" });
    },
  },
  created: function(){
      this.verificarAutenticacion();
    }
};
</script>
<style></style>
