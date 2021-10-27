<template>
  <section>
    <div class="register_">
      <h2>Crear un Registro</h2>
    </div>

    <div class="parrafo">
      Para crear registro por favor ingrese los siguientes datos
    </div>

    <form v-on:submit.prevent="procesarCrearRegistro">
      <label for="crearsegumiento">Selecciona la Ubicacion</label>
      <select v-model="registro.codigo_divipola_municipio_fk">
        <option
          v-for="ubicacion in ubicaciones"
          :key="ubicacion.codigoDivipolaMunicipio"
          :value="ubicacion.codigoDivipolaMunicipio"
          >{{ ubicacion.nombre_municipio }}</option
        >
      </select>

      <label>Selecciona Fecha de Notificacion</label>
      <input
        type="date"
        placeholder="DD/MM/AAAA"
        v-model="registro.fecha_notificacion"
      />

      <label>Fecha de reporte</label>
      <input
        type="date"
        placeholder="DD/MM/AAAA"
        v-model="registro.fecha_reporte"
      />

      <label>Fecha inicio de síntomas</label>
      <input
        type="date"
        placeholder="DD/MM/AAAA"
        v-model="registro.fecha_sintomas"
      />

      <label>Fecha de diagnóstico del laboratorio</label>
      <input
        type="date"
        placeholder="DD/MM/AAAA"
        v-model="registro.fecha_diagnostico_lab"
      />

      <label>Edad</label>
      <input type="number" placeholder="Ingrese edad" v-model="registro.edad" />

      <label>Unidad de medida</label>
      <select v-model="registro.unidad_de_medida_edad">
        <option :key="3" :value="3">Dias</option>
        <option :key="2" :value="2">Meses</option>
        <option :key="1" :value="1">Años</option>
      </select>

      <label for="sexo">Sexo</label>

      <select v-model="registro.sexo">
        <option select disabled></option>
        <option value="F">Femenino</option>
        <option value="M">Masculino</option>
      </select>

      <label>Nombre grupo étnico</label>

      <select v-model="registro.grupo_etnico">
        <option select disabled></option>
        <option value="17 de Junio">17 de Junio</option>
        <option value="Acevedo y Gomez">Acevedo y Gomez</option>
        <option value="Achagua">Achagua</option>
        <option value="Achiote">Achiote</option>
        <option value="Agua Negra">Agua Negra</option>
        <option value="Aguas Vivas">Aguas Vivas</option>
        <option value="Aico">Aico</option>
        <option value="Aima">Aima</option>
        <option value="Alpiolar">Alpiolar</option>
        <option value="Aldea de Maria">Aldea de Maria</option>
        <option value="Indigena">Indigena</option>
        <option value="Negro">Negro</option>
        <option value="Palenquero">Palenquero</option>
        <option value="Raizal">Raizal</option>
        <option value="ROM">ROM</option>
        <option value="Otro">Otro</option>
      </select>

      <label>Pertenencia étnica</label>
      <input type="number" v-model="registro.pertenencia_etnica" />

      <label for="frecup">Fecha de recuperación</label>
      <input
        type="date"
        placeholder="DD/MM/AAAA"
        v-model="registro.fecha_recuperacion"
      />

      <label>Tipo de recuperación</label>
      <select v-model="registro.tipo_recuperacion">
        <option value="Tiempo">Tiempo</option>
        <option value="PCR">PCR</option>
        <option value="Fallecido">Fallecido</option>
        <option value="No especificado">No Especificado</option>
      </select>
      <button type="submit">Crear Registro</button>
    </form>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "CrearRegistro",
  data: function() {
    return {
      registro: {
        codigo_divipola_municipio_fk: 0,
        fecha_notificacion: null,
        fecha_reporte: null,
        fecha_sintomas: null,
        fecha_diagnostico_lab: null,
        edad: 0,
        unidad_de_medida_edad: 0,
        sexo: "",
        grupo_etnico: "",
        pertenencia_etnica: 0,
        fecha_recuperacion: null,
        tipo_recuperacion: "",
      },
      ubicaciones: [],
    };
  },

  methods: {
    procesarCrearRegistro: function() {
      console.log(this.registro);
      axios
        .post("https://p46-g2-be.herokuapp.com/CrearRegistro/", this.registro, {
          headers: {},
        })
        .then((result) => {
          console.log("then");
          this.$emit("completedCrearRegistro");
        })
        .catch((error) => {
          //usar???
          //    if(error.response.status == "401")
          console.log("Catch");
          alert("Error en la creación");
        });
    },
    listarUbicaciones: function() {
      axios
        .get("https://p46-g2-be-final.herokuapp.com/ConsultarTodasUbicaciones/")
        .then((result) => {
          this.ubicaciones = result.data;
        })
        .catch((error) => {
          //usar???
          //    if(error.response.status == "401")
          alert("Error en Ubicaciones");
        });
    },
  },
  created: function() {
    this.listarUbicaciones();
  },
};
</script>

<style>
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
