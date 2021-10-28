<template>
  <section class="creacion">
    <section class="creacion_container">
      <img src="../assets/icons8-virus-pur.svg" alt="logo coronactual" />
      <h2>Crear seguimiento de un registro</h2>
      <!-- Acá va el titulo -->
      <p>
        <!-- Acá va el parrafo -->
        Estás creando el seguimiento asociado al registro de contagio creado en
        la ventana anterior. Por favor diligencia el siguiente formulario: <br> <br>
        <i>Los campos marcados con <FONT COLOR="red">*</FONT> son obligatorios</i>
      </p>

      <form
        class="creacion_container-form"
        v-on:submit.prevent="procesarCreacionSeguimiento"
      >
        <!-- select dropdown Ubicacion actual caso -->
        <!--
        <label for="crearsegumiento">Se creo el siguiente registro</label>
        <select class="form_creacion-input" v-model="seguimiento.id_caso_fk">
          <option
            v-for="ultimo in seguimiento"
            :key="ultimo.id_caso"
            :value="ultimo.id_caso"
            >{{ ultimo.id_caso }}</option
          >
          <option :key="20" :value="20">20_</option>
        </select>
        -->
        <label for="crearsegumiento">Ubicacion del seguimiento</label>
        <select
          class="form_creacion-input"
          v-model="seguimiento.ubicacion_caso"
        >
          <option value="casa">Casa</option>
          <option value="hospital">Hospital</option>
          <option value="uci">UCI</option>
          <option value="fallecido">Fallecido</option>
          <option value="NA">N/A</option>
        </select>
        <label for="estado">
          Estado del paciente<FONT COLOR="red">*</FONT>:</label
        >
        <!-- select dropdown Estado Enfermedad-->
        <select class="form_creacion-input" v-model="seguimiento.estado">
          <option value="leve">Leve</option>
          <option value="moderado">Moderado</option>
          <option value="grave">Grave</option>
          <option value="fallecido">Fallecido</option>
        </select>
        <label for="tipocontagio"
          >Tipo de contagio<FONT COLOR="red">*</FONT>:</label
        >
        <!-- select dropdown Tipo Contagio-->
        <select class="form_creacion-input" v-model="seguimiento.tipo_contagio">
          <option value="relacionado">Relacionado</option>
          <option value="importado">Importado</option>
          <option value="comunitario">Comunitario</option>
          <option value="estudio">En estudio</option>
        </select>

        <label for="estadorecup"
          >Estado de Recuperación<FONT COLOR="red">*</FONT>:</label
        >
        <!-- select dropdown Estado Recuperado-->
        <select class="form_creacion-input" v-model="seguimiento.recuperado">
          <option value="activo">Activo</option>
          <option value="recuperado">Recuperado</option>
          <option value="fallecido">Fallecido</option>
          <option value="NA">N/A</option>
        </select>
        <label>Fecha de Muerte (si no aplica dejar vacío):</label><br />
        <input
          class="form_creacion-input"
          type="date"
          placeholder="DD/MM/AAAA"
          v-model="seguimiento.fecha_muerte"
        />
        <button type="submit">Crear Seguimiento</button>
      </form>
    </section>
  </section>
</template>

<script>
//POST
import axios from "axios";
export default {
  name: "CrearSeguimiento",

  data: function() {
    return {
      seguimiento: {
        id_caso_fk: 0, //modificar (llamar de parte donde hice clic???)
        ubicacion_caso: "",
        estado: "",
        tipo_contagio: "",
        recuperado: "",
        fecha_muerte: null,
      },
    };
  },

  methods: {
    procesarCreacionSeguimiento: function() {
      console.log(this.seguimiento);
      axios
        .post(
          "https://p46-g2-be-ultima.herokuapp.com/CrearSeguimiento/",
          this.seguimiento,
          {headers:{}}
        )
        .then((result) => {
          this.$emit("completedCrearSeguimiento"); //nos puede servir después
        })
        .catch((error) => {
          //usar???
          //    if(error.response.status == "401")
          alert("Error en la creación");
        });
    },
    getKeyRegistro: function() {
      axios
        .get("https://p46-g2-be-ultima.herokuapp.com/UltimoRegistro/")
        .then((result) => {
          this.seguimiento.id_caso_fk = result.data[0].id_caso;
        })
        .catch((error) => {
          //usar???
          //    if(error.response.status == "401")
          alert("Error en el llamado");
        });
    },
  },
  created: function() {
    this.getKeyRegistro();
  },
};
</script>

<style>
/* .CrearSeguimiento {
  height: 100%;
  width: 100%;

  justify-content: center;
  align-items: center;
}

.titulo {
  text-align: center;
}

.titulo h1 {
  color: rgb(18, 50, 119);
  font-size: 60px;
}

.titulo p {
  text-align: center;
  font-size: 20px;
}

.formulario {
  border: 3px solid #364b63;
  border-radius: 10px;
  width: 30%;
  height: 45%;
  margin: auto;
  padding: 30px 20px;
  align-items: center;
  text-align: center;
}

.formulario button {
  color: #e5e7e9;
  background: #364b63;
  border: 1px solid #e5e7e9;
  border-radius: 5px;
  padding: 10px 20px;
}

.formulario button:hover {
  color: #364b63;
  background: #e5e7e9;
  border: 1px solid #364b63;
} */
</style>
