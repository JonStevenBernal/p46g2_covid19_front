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
          <img src="./assets/icons8-virus-pur.svg" alt="logo Coronavirus" />
        </figure>
        <div class="item_title">
          <h1 class="">CoronActual <br />Te salva la vida</h1>
        </div>
      </div>
      <figure class="header_section_buton" v-on:click="toggleShowNav">
        <img class="" src="./assets/icons8-menu_rounded.svg" alt="Menu" />
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
  <main class="main-component">
    <router-view
      v-on:completedModificarSeguimiento="completedModificarSeguimiento"
      v-on:completedCrearSeguimiento="completedCrearSeguimiento"
      v-on:completedCrearRegistro="completedCrearRegistro"
      v-on:completedLogIn="completedLogIn"
      v-on:completedCrearNuevoUsuario="completedCrearNuevoUsuario"
      v-on:completedCerrarSesion="completedCerrarSesion"
      v-on:completedEliminarUsuario="completedEliminarUsuario"
      
    >
    </router-view>
  </main>
  <px-footer />
</template>

<script>
//import PxHeader from "./components/PxHeader.vue";
import PxFooter from "./components/PxFooter.vue";
export default {
  name: "App",
  components: { PxFooter },
  data: function() {
    //inicializar variables dentro de este componente
    return {
        showNav: false,
        isAuth: false,
      }
  },

  methods: {
    //funciones js que voy a utilizar dentro del componente
    toggleShowNav: function() {
      if (this.showNav == true) this.showNav = false;
      else this.showNav = true;
    },
    verificarAutenticacion: function(){
      console.log(localStorage.getItem("isAuth"));
      if(localStorage.getItem("isAuth") == "true"){
        this.isAuth = true;
        console.log("true");
        console.log(this.isAuth);
      }
      else{
        this.isAuth = false;
        console.log("false");
        console.log(this.isAuth);
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

    completedModificarSeguimiento: function() {
      localStorage.removeItem("id");
      alert("Modificación de seguimiento exitosa");
      this.$router.push({ name: "Instrucciones" });
    },

    completedCrearSeguimiento: function() {
      alert("Creación de seguimiento exitosa");
      this.$router.push({ name: "Instrucciones" });
    },
    completedCrearRegistro: function() {
      alert("Creación de registro exitosa ");
      this.$router.push({ name: "CrearSeguimiento" });
    },
    completedLogIn: function() {
      alert("Autenticación exitosa");
      this.$router.push({ name: "Instrucciones" });
      this.verificarAutenticacion();
    },

    completedCrearNuevoUsuario: function() {
      alert("Creación de cuenta exitosa. Por favor inicie sesión");
      this.$router.push({ name: "IniciarSesion" });
      
    },

    completedCerrarSesion: function() {
      alert("Sesión cerrada correctamente");
      this.$router.push({ name: "Instrucciones" });
      this.verificarAutenticacion();
    },

    completedEliminarUsuario: function() {
      alert("Usuario eliminado correctamente. Sesión cerrada");
      this.$router.push({ name: "Instrucciones" });
      this.verificarAutenticacion();
    },
    
  },

  created: function() {
    //función que se ejecuta al crear el componente
    
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap");
:root {
  --primary-color: #218dc9;
  --secunda-color: #20313b;
  --white-color: #ffffff;
  --off-white: #faf8f7;
  --red-color: #d86423;
  --black-letter: #3c4245;
  --d-flex: flex;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;
}
html {
  font-size: 62.5%;
  font-family: "DM Sans", sans-serif;
  /* scroll behavior se refiere a una forma animada a la hora de hacer click en eun enlace y este se desplace */
  scroll-behavior: smooth;
}

.header {
  width: 100vw;
}
.header_section {
  width: 100%;
  display: var(--d-flex);
  justify-content: space-between;
  padding: 15px;
}
.header_section-item {
  display: var(--d-flex);
  align-items: center;
}
.item_figure {
  width: 6rem;
}
.item_title h1 {
  margin-left: 0.5rem;
  font-size: 1.8rem;
  color: var(--primary-color);
  text-align: start;
  font-weight: 700;
  line-height: 1.5rem;
}
.header_section_buton {
  display: flex;
  justify-content: center;
  background-color: var(--primary-color);
  width: 5rem;
  height: 5rem;
  border-radius: 0.5rem;
}
.header_section_buton img {
  width: 3rem;
}
.nav {
  background-color: var(--secunda-color);
}
.nav_section {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--white-color);
}
.nav_section li {
  padding: 1rem 2rem;
  border: 0.1rem solid #131c20;
  cursor: pointer;
  transform: translate(0%, 0%);
}
.nav_section li::after {
  content: "";
  display: block;
  /* position: absolute; */
  width: 100%;
  height: 3px;
  background: var(--off-white);
  transition: transform 0.2s ease-in-out;
  transform: scale(0);
}
.nav_section li:hover::after {
  transform: scale(1);
}
.main-component {
  width: 100%;
  /* height: 75vh; */
  background-color: var(--white-color);
  padding: 40px 0;
}
.footer {
  width: 100%;
  margin-top: 100px;
  font-size: 1.6rem;
  color: var(--white-color);
  background-color: var(--primary-color);
}
.footer_section {
  width: 100%;
}
.section_footer {
  display: flex;
  align-items: center;
  /* padding: 15px; */
  border-bottom: 0.1rem solid #131c20;
}
.section_footer-item h2 {
  font-size: 1.6rem;
  font-weight: 400;
}
.footer_section-names {
  list-style: none;
}
.footer_section-names li {
  margin-left: 18px;
}
.footer_section-names h2 {
  font-size: 2rem;
}
.footer_section-names {
  border-bottom: 0.1rem solid #131c20;
  padding: 15px;
}
.section_footer p {
  margin-left: 30px;
}
.section_footer-item {
  display: var(--d-flex);
  align-items: center;
  margin-bottom: 10px;
}
.section_footer-item img {
  width: 50px;
}
.footer_who {
  display: var(--d-flex);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  background-color: var(--secunda-color);
  height: 50px;
}
.footer_logo {
  display: flex;
  justify-content: center;
  align-self: center;
  padding: 5px 0;
}
.footer_logo-figure {
  width: 70px;
}
.footer_logo-title {
  display: var(--d-flex);
  align-items: center;
  margin-left: 5px;
}
.footer_logo-title h3 {
  font-size: 1.6rem;
}
@media (min-width: 1024px) {
  .nav {
    background-color: var(--primary-color);
  }
  .nav_section li {
    border: none;
  }
  .nav_section {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .footer_section {
    display: var(--d-flex);
    justify-content: space-around;
  }
  .section_footer {
    border: none;
  }
  .footer_section-names {
    border: none;
  }
}
</style>
