<template>
  <section class="creacion">
    <section class="creacion_container">
      <img src="../assets/icons8-virus-pur.svg" alt="logo coronactual" />
      <h2>Eliminar cuenta de usuario</h2>
      <p>
        ¿Estás seguro que quieres eliminar la cuenta con la cual tienes la sesión iniciada?:
      </p>
      <form class="creacion_container-form" v-on:submit.prevent="procesarEliminarCuenta">        
        <button type="submit">Sí, eliminar cuenta</button>
        <button v-on:click="cancelar()">No, volver al inicio</button>
      </form>
    </section>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "EliminarCuenta",
  
  data: function(){
      return {
          user: {
              usuario: "",

          }
      }
  },

  methods: {
    procesarEliminarCuenta: function() {
      this.user.usuario = localStorage.getItem('usuario'),
      console.log(this.user);
      console.log(this.user.usuario);
      console.log(typeof(this.user.usuario));

      axios.delete("https://p46-g2-be-ultima2.herokuapp.com/EliminarUsuario/", {data: this.user})
        .then((result) => {
          
          localStorage.removeItem('usuario');
          localStorage.setItem('isAuth', false);
          this.$emit("completedEliminarUsuario");
        })
        .catch((error) => {
          alert("Error en la eliminación de cuenta");
        });
    },
    
    cancelar: function(){
        alert("La cuenta no fue eliminada");
        this.$router.push({ name: "Instrucciones" });
    },

  },
  created: function() {
    
  },
};
</script>

<style>
.creacion {
  width: 100%;
  min-width: 320px;
  max-width: 425px;
  color: #218dc9;
  padding: 30px;
  margin: 30px auto;
  border-radius: 40px;
  border: 2px solid #218dc9;
}
.creacion_container img {
  width: 50px;
  display: block;
  margin: 0 auto;
}
.creacion_container h2 {
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  color: #218dc9;
  margin-bottom: 40px;
}

.creacion_container p {
  font-size: 1.6rem;
  margin-bottom: 40px;
}
.creacion_container-form {
  display: var(--d-flex);
  flex-direction: column;
  justify-content: space-around;
}
.creacion_container-form label {
  font-size: 1.6rem;
  margin: 10px 0 8px 0;
}
.form_creacion-input {
  display: block;
  padding: 15px 10px;
  margin-bottom: 10px;
  width: 100%;
  border: 1px solid var(--primary-color);
  border-radius: 5px;
  color: var(--black-letter);
  background-color: transparent;
}
.creacion_container-form button {
  border: none;
  background-color: #218dc9;
  color: var(--white-color);
  padding: 20px 0;
  border-radius: 5px;
  margin-top: 15px;
}

/* .CrearRegistro {
  height: 100%;
  width: 100%;

  justify-content: center;
  align-items: center;
}

.titulo {
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  color: #707070;
}
.parrafo {
  text-align: center;
  text-align: center;
  font-size: 1.3rem;
}

.titulo h1 {
  color: rgb(18, 50, 119);
  font-size: 60px;
}

.titulo p {
  text-align: center;
  font-size: 20px;
}

.formulario1 {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  width: 100%;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 1rem;
}
.field {
  display: flex;
  flex-direction: column;
  width: 12rem;
  margin: 0.5rem 0;
}
.field label {
  font-size: 0.9rem;
  margin-botton: 0.2rem;
  color: #696969;
}
.field input {
  font-size: 1.1rem;

  height: 2.2rem;
  padding-left: 0.5rem;

  border: 2px solid #696969;
  border-radius: 5px;
}
.field select {
  font-size: 1.1rem;

  width: 12rem;
  height: 2.6rem;
  padding-left: 0.5rem;

  border: 2px solid #696969;
  border-radius: 5px;
}
.submit {
  display: flex;
  justify-content: center;

  width: 30%;
  margin-top: 1rem;
}
.submit button {
  font-size: 1.1rem;

  padding: 0.5rem 0.5rem;

  cursor: pointer;

  border: 1px solid #696969;
  border-radius: 2px;
  background-color: lightcyan;
}
form {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 80%;
  margin: 0 auto;
} */
</style>
