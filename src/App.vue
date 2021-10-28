<template>
  <px-header />
  <main class="main-component">
    <router-view
      v-on:completedModificarSeguimiento="completedModificarSeguimiento"
      v-on:completedCrearSeguimiento="completedCrearSeguimiento"
      v-on:completedCrearRegistro="completedCrearRegistro"
    >
    </router-view>
  </main>
  <px-footer />
</template>

<script>
import PxHeader from "./components/PxHeader.vue";
import PxFooter from "./components/PxFooter.vue";
export default {
  name: "App",
  components: { PxHeader, PxFooter },
  data: function() {
    //inicializar variables dentro de este componente
  },

  methods: {
    //funciones js que voy a utilizar dentro del componente
    completedModificarSeguimiento: function() {
      localStorage.clear();
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
