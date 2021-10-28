<template>
  <section class="section_show-register">
    <div class="description">
      <!-- Acá va el titulo -->
      <h1>Consultar Registro</h1>
      <!-- Acá va el parrafo -->
      <p>
        <br />Esta visualizando todos los registros de contagios.
        <br />
        <!--   <br>Recuerde que para modificar un registro debe seleccionarlo. -->
        <br />Puede filtrar los registros por Municipio, sexo o edad en el menu
        Filtrar.
      </p>
    </div>

    <!--sección TABLA -->

    <div class="tabla">
      <h2 class="titulo tabla">Lista de Registros Covid19</h2>
      <table class="table">
        <thead class="Heading">
          <tr>
            <!--sección COLUMNAS -->
            <th>Id</th>
            <th>Fecha de notificacion</th>
            <th>Fecha de reporte</th>
            <th>Fecha de sintomas</th>
            <th>Fecha de diagnostico</th>
            <th>Edad</th>
            <th>Medida edad</th>
            <th>Sexo</th>
            <th>Grupo etnico</th>
            <th>Pertenencia etnica</th>
            <th>Fecha de recuperacion</th>
            <th>Tipo recuperacion</th>
            <!--cols Registro -->

            <th>Departamento</th>
            <th>Municipio</th>

            <!--  <th>id_evolucion</th> -->
            <th>ubicacion_caso</th>
            <th>estado</th>
            <th>tipo_contagio</th>
            <th>recuperado</th>
            <th>fecha_muerte</th>
            <th>Modificar Seguimiento</th>
          </tr>
        </thead>
        <tbody class="table_body">
          <!-- sección FILAS -->

          <tr class="Values" v-for="register in registros" :key="register.id">
            <!--Fila 1, datos registro -->
            <td>{{ register.id_caso }}</td>
            <td>{{ register.fecha_notificacion }}</td>
            <td>{{ register.fecha_reporte }}</td>
            <td>{{ register.fecha_sintomas }}</td>
            <td>{{ register.fecha_diagnostico_lab }}</td>
            <td>{{ register.edad }}</td>
            <td>{{ register.unidad_de_medida_edad }}</td>
            <td>{{ register.sexo }}</td>
            <td>{{ register.grupo_etnico }}</td>
            <td>{{ register.pertenencia_etnica }}</td>
            <td>{{ register.fecha_recuperacion }}</td>
            <td>{{ register.tipo_recuperacion }}</td>

            <!--Fila 1, datos ubicacion -->
            <td>{{ register.ubicacion.nombre_departamento }}</td>
            <td>{{ register.ubicacion.nombre_municipio }}</td>

            <!--Fila 1, datos Seguimiento -->
            <td>{{ register.seguimiento.ubicacion_caso }}</td>
            <td>{{ register.seguimiento.estado }}</td>
            <td>{{ register.seguimiento.tipo_contagio }}</td>
            <td>{{ register.seguimiento.recuperado }}</td>
            <td>{{ register.seguimiento.fecha_muerte }}</td>
            <td>
              <button v-on:click="llamar(register.id_caso)">
                Modificar id:{{ register.id_caso }}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "MostrarRegistros",

  data() {
    return {
      registros: [],
    };
  },

  methods: {
    procesarMostrarRegistros: function() {
      axios
        .get("https://p46-g2-be-ultima.herokuapp.com/MostrarRegistros/")
        .then((result) => {
          this.registros = result.data;

          alert("Visualización de registros exitosa ");
        })
        .catch((error) => {
          alert("Error al mostrar registros");
        });
    },

    llamar: function(id) {
      alert(
        `En la siguiente ventana se modificará el seguimiento del registro número ${id}`
      );
      localStorage.clear();
      localStorage.setItem("id", id);
      this.$router.push({ name: "ModificarSeguimiento" });
    },
  },
  created: function() {
    this.procesarMostrarRegistros();
  },
};
</script>

<style>
.tabla {
  overflow: scroll;
  width: 90%;
  margin: 0 auto;
}
.table {
  overflow: scroll;
  width: 1500px;
  table-layout: fixed;

  border-collapse: collapse;
  border-spacing: 20px;
  border-left: 1px solid;
  border-right: 1px solid;
  border-color: black;
}
.Heading {
  /* UI Properties */
  background: #72cade 0% 0% no-repeat padding-box;
  border: 1px solid #929292;
  border-radius: 12px 12px 0px 0px;

  opacity: 1;
  text-align: center;
  padding: 20px 20px 20px;
}

.Values {
  background: #ffffff 0% 0% no-repeat padding-box;

  border-collapse: collapse;
  border-spacing: 0;
  text-align: center;
}

.Values:nth-child(odd) {
  background-color: #f2f2f2;
}
</style>
