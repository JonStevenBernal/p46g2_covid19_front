<template>
  <div class="titulo">
    <h2>Crear un Registro</h2>
  </div>

  <div class="parrafo">
    Está creando un registro para la ubicacion seleccionada en la ventana
    anterior, por favor complete el siguiente formulario:
  </div>
  <br />

  <form v-on:submit.prevent="procesarCrearRegistro">
    <label for="Id"></label>
    <div class="field">
      <label for="idcaso">Id del caso</label><br />
      <input
        type="text"
        id="idcaso"
        name="iddelcaso"
        placeholder="1"
        v-model="registro.id_caso"
      /><br />
      <br />
    </div>

    <div class="field">
      <label for="cmuni">Código divipola municipio</label><br />
      <input
        type="text"
        id="cmuni"
        name="cmunicipio"
        placeholder="11"
        v-model="registro.codigo_divipola_municipio_fk"
      /><br />
      <br />
    </div>

    <div class="field">
      <label for="fnotif">Fecha de notificación</label><br />
      <input
        type="date"
        id="fnotif"
        name="fnotificacion"
        placeholder="DD/MM/AAAA"
        v-model="registro.fecha_notificacion"
      /><br />
      <br />
    </div>

    <div class="field">
      <label for="freporte">Fecha de reporte web</label><br />
      <input
        type="date"
        id="freporte"
        name="freporte"
        placeholder="DD/MM/AAAA"
        v-model="registro.fecha_reporte"
      /><br />
      <br />
    </div>

    <div class="field">
      <label for="initsint">Fecha inicio de síntomas</label><br />
      <input
        type="date"
        id="initsint"
        name="initsintomas"
        placeholder="DD/MM/AAAA"
        v-model="registro.fecha_sintomas"
      />
    </div>

    <div class="field">
      <label for="fdiag">Fecha de diagnóstico del laboratorio</label><br />
      <input
        type="date"
        id="fdiag"
        name="lname"
        placeholder="DD/MM/AAAA"
        v-model="registro.fecha_diagnostico_lab"
      /><br />
      <br />
    </div>

    <div class="field">
      <label for="edad">Edad</label><br />
      <input
        type="text"
        id="edad"
        name="edad"
        placeholder="1"
        v-model="registro.Edad"
      /><br />
      <br />
    </div>

    <div class="field">
      <label for="medad">Unidad de medida</label><br />
      <select v-model="registro.unidad_de_medida_edad">
        <option select disabled></option>
        <option value="dias">Dias</option>
        <option value="meses">Meses</option>
        <option value="anos">Años</option>
      </select>
      <br />
    </div>

    <div class="field">
      <label for="sexo">Sexo</label><br />

      <select v-model="registro.sexo">
        <option select disabled></option>
        <option value="femenino">Femenino</option>
        <option value="masculino">Masculino</option>
        <option value="otro">Otro</option>
      </select>
      <br />
    </div>

    <div class="field">
      <label for="grpetnico">Nombre grupo étnico</label><br />

      <select v-model="registro.Nombre_grupo_etnico">
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
      <br />
    </div>

    <div class="field">
      <label for="petnica">Pertenencia étnica</label><br />
      <input
        type="text"
        id="petnicao"
        name="petnica"
        placeholder="1"
        v-model="registro.pertenencia_etnica"
      /><br />
      <br />
    </div>

    <label for="frecup">Fecha de recuperación</label><br />
    <input
      type="date"
      id="frecup"
      name="frecuperacion"
      placeholder="DD/MM/AAAA"
      v-model="registro.fecha_recuperacion"
    />
    <label for="trecup">Tipo de recuperación</label><br />
    <select v-model="registro.tipo_recuperacion">
      <option select disabled></option>
      <option value="dias">Tiempo</option>
      <option value="meses">PCR</option>
      <option value="otro">Fallecido</option>
      <option value="anos">No Especificado</option>
    </select>
    <button>Siguiente</button>
  </form>
</template>

<script>
import axios from "axios";
export default {
  name: "CrearRegistro",
  data: function() {
    return {
      registro: {
        id_caso: 0,
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
    };
  },

  methods: {
    procesarCrearRegistro: function() {
      axios
        .post("https://p46-g2-be.herokuapp.com/CrearRegistro/", this.registro, {
          headers: {},
        })
        .then((result) => {
          this.$emit("completedCrearRegistro");
        })
        .catch((error) => {
          //usar???
          //    if(error.response.status == "401")
          alert("Error en la creación");
        });
    },
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
