<template>
  <section class="creacion">
    <section class="creacion_container">
      <img src="../assets/icons8-virus-pur.svg" alt="logo coronactual" />

      <h2>Modificar seguimiento de un registro</h2>

      <p>
        <!-- Acá va el parrafo -->
        Estás modificando unicamente el registro al que le hiciste click en la
        ventana anterior (Registro número {{this.seguimiento.id_caso_fk}}).<br> Recuerda que sólamente es posible modificar los
        siguientes campos:<br><br>
        <i>Los campos marcados con <FONT COLOR="red">*</FONT> son obligatorios</i>
      </p>
      <form
        class="creacion_container-form"
        v-on:submit.prevent="procesarModificionSeguimiento"
      >
        <label for="ubicaso">
          Ubicación del caso<FONT COLOR="red">*</FONT>:</label>
        <!-- select dropdown Ubicacion actual caso -->
        <select
          class="form_creacion-input"
          id="ubicaso"
          name="ubicaso"
          v-model="seguimiento.ubicacion_caso"
        >
          <option value="casa">Casa</option>
          <option value="hospital">Hospital</option>
          <option value="uci">UCI</option>
          <option value="fallecido">Fallecido</option>
          <option value="NA">N/A</option>
        </select>
        <label for="estado">
          Estado del paciente<FONT COLOR="red">*</FONT>:</label>
        <!-- select dropdown Estado Enfermedad-->
        <select
          class="form_creacion-input"
          id="estado"
          name="estado"
          v-model="seguimiento.estado"
        >
          <option value="leve">Leve</option>
          <option value="moderado">Moderado</option>
          <option value="grave">Grave</option>
          <option value="fallecido">Fallecido</option>
        </select>
        <label for="tipocontagio"
          >Tipo de contagio<FONT COLOR="red">*</FONT>:</label>
        <!-- select dropdown Tipo Contagio-->
        <select
          class="form_creacion-input"
          id="tipocontagio"
          name="tipocontagio"
          v-model="seguimiento.tipo_contagio"
        >
          <option value="relacionado">Relacionado</option>
          <option value="importado">Importado</option>
          <option value="comunitario">Comunitario</option>
          <option value="estudio">En estudio</option>
        </select>
        <label for="estadorecup"
          >Estado de Recuperación<FONT COLOR="red">*</FONT>:</label>
        <!-- select dropdown Estado Recuperado-->
        <select
          class="form_creacion-input"
          id="estadorecup"
          name="estadorecup"
          v-model="seguimiento.recuperado"
        >
          <option value="activo">Activo</option>
          <option value="recuperado">Recuperado</option>
          <option value="fallecido">Fallecido</option>
          <option value="NA">N/A</option>
        </select>
        <label for="fmuerte">Fecha de Muerte (si no aplica dejar vacío):</label>
        <input
          class="form_creacion-input"
          type="date"
          id="fmuerte"
          name="fmuerte"
          placeholder="DD/MM/AAAA"
          v-model="seguimiento.fecha_muerte"
        />
        <button type="submit">Modificar y Guardar</button>
        <button v-on:click="cancelar()">Cancelar</button>
      </form>
    </section>
  </section>
</template>

<script>
//PUT
import axios from "axios";


                //registro al que está asociado

export default {
  name: "ModificarSeguimiento",

  data: function() {
    return {
      seguimiento: {
        id_caso_fk: 0, //registro al que está asociado
        ubicacion_caso: "",
        estado: "",
        tipo_contagio: "",
        recuperado: "",
        fecha_muerte: null,
      },
    };
  },

  methods: {
    procesarModificionSeguimiento: function() {
      axios
        .put(
          `https://p46-g2-be-ultima2.herokuapp.com/ActualizarSeguimiento/${this.seguimiento.id_caso_fk}/`, //pk del seguimiento que quiero modificar
          this.seguimiento,
          { headers: {} }
        )
        .then((result) => {
          this.$emit("completedModificarSeguimiento"); //nos puede servir después
        })
        .catch((error) => {
          //usar???
          //    if(error.response.status == "401")
          alert("Error en la modificación");
        });
    },
    obtenerID: function() {
      this.seguimiento.id_caso_fk = parseInt(localStorage.getItem("id"))
      
      console.log(this.seguimiento.id_caso_fk);
    },

    cancelar: function() {
      localStorage.clear();
      alert("Modificación cancelada");
      this.$router.push({ name: "Instrucciones" });
    },
  },
  created: function() {
    this.obtenerID();
  },
};
</script>

<style>
/* .ModificarSeguimiento {
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
