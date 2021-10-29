<template>
  <section class="section_main">
    <div class="section_main-image"></div>
    <div class="section_main-home">
      <h2>¡Bienvenido a Coronactual!</h2>
      <p>
        Por favor inicie sesión para acceder a los serivicios. <br>
        Si no tiene una cuenta puede crear una haciendo click en el botón respectivo <br>
      </p>
      <form v-on:submit.prevent="procesarIniciarSesion">
                <input type="text" v-model="user.username" placeholder="Nombre de usuario">
                <br>
                <input type="password" v-model="user.password" placeholder="Contraseña">
                <br>
                <button type="submit">Iniciar Sesion</button>
      </form>
    </div>
  </section>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "IniciarSesion",
        
        data: function(){
            return {
                user: {
                    username:"",
                    password:""
                }
            }
        },

        methods: {
            procesarIniciarSesion: function(){
                axios.post(
                    "https://p46-g2-be-ultima2.herokuapp.com/Login/",
                    this.user,
                    {headers: {}}
                )
                .then((result) => {
                    localStorage.setItem('isAuth', true);
                    localStorage.setItem('usuario', this.user.username);
                    console.log(this.user.username);
                    this.$emit('completedLogIn')
                })
                .catch((error) => {
                    if (error.response.status == "401")
                        alert("ERROR 401: Credenciales Incorrectas.");
                });
            }
        }
    }
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
