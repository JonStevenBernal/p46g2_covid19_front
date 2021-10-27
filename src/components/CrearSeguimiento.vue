<template>
  <div id="CrearSeguimiento" class="CrearSeguimiento">
    <div class="titulo">
      <h1>Crear seguimiento de un registro</h1>
      <!-- Acá va el titulo -->
      <p>
        <!-- Acá va el parrafo -->
        Estás creando el seguimiento asociado al registro de contagio creado en
        la ventana anterior.
        <br />
        Por favor diligencia el siguiente formulario:
        <br />
        <br />
        <i
          >Los campos marcados con <FONT COLOR="red">*</FONT> son
          obligatorios</i
        >
      </p>
    </div>

    <div class="formulario">
      <form v-on:submit.prevent="procesarCreacionSeguimiento">
        <!-- select dropdown Ubicacion actual caso -->

        <label for="crearsegumiento">Se creo el siguiente registro</label>
        <select v-model="seguimiento.id_caso_fk">
          <option
            v-for="ultimo in seguimiento"
            :key="ultimo.id_caso"
            :value="ultimo.id_caso"
            >{{ ultimo.id_caso }}</option
          >
        </select>

        <select v-model="seguimiento.ubicacion_caso">
          <option value="casa">Casa</option>
          <option value="hospital">Hospital</option>
          <option value="uci">UCI</option>
          <option value="fallecido">Fallecido</option>
          <option value="NA">N/A</option>
        </select>
        <br />
        <br />
        <label for="estado">
          Estado del paciente<FONT COLOR="red">*</FONT>:</label
        ><br />
        <!-- select dropdown Estado Enfermedad-->
        <select v-model="seguimiento.estado">
          <option value="leve">Leve</option>
          <option value="moderado">Moderado</option>
          <option value="grave">Grave</option>
          <option value="fallecido">Fallecido</option>
        </select>
        <br />
        <br />
        <label for="tipocontagio"
          >Tipo de contagio<FONT COLOR="red">*</FONT>:</label
        ><br />
        <!-- select dropdown Tipo Contagio-->
        <select v-model="seguimiento.tipo_contagio">
          <option value="relacionado">Relacionado</option>
          <option value="importado">Importado</option>
          <option value="comunitario">Comunitario</option>
          <option value="estudio">En estudio</option>
        </select>
        <br />
        <br />
        <label for="estadorecup"
          >Estado de Recuperación<FONT COLOR="red">*</FONT>:</label
        ><br />
        <!-- select dropdown Estado Recuperado-->
        <select v-model="seguimiento.recuperado">
          <option value="activo">Activo</option>
          <option value="recuperado">Recuperado</option>
          <option value="fallecido">Fallecido</option>
          <option value="NA">N/A</option>
        </select>
        <br />
        <br />
        <label>Fecha de Muerte (si no aplica dejar vacío):</label><br />
        <input
          type="date"
          placeholder="DD/MM/AAAA"
          v-model="seguimiento.fecha_muerte"
        /><br />
        <br />
        <button type="submit">Crear Seguimiento</button>
        <br />
      </form>
    </div>
  </div>
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
          "https://p46-g2-be.herokuapp.com/CrearSeguimiento/",
          this.seguimiento,
          { headers: {} }
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
          this.seguimiento = result.data;
          console.log(result.data);
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
