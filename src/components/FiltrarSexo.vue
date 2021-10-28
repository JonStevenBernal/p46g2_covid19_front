<template>
  <section class="filtros">
    <section class="filtros_container">
      <h3>Filtrar Sexo</h3>
      <p>Aqui podras filtar por el sexo del paciente</p>

      <div class="filtros_container-estado">
        <h2>Lista del sexo del paciente</h2>

        <!-- <form action=""> -->
        <!-- onchange="procesarFiltrarEstado(this.value)" -->
        <!-- <label for="crearsegumiento">Selecciona la Ubicacion</label>
        <input v-model="this.estado" placeholder="edit me" /> -->
        <!-- <select class="form_creacion-input" v-model="grave">
          <option value="leve">Leve</option>
          <option value="moderado">Moderado</option>
          <option value="grave">Grave</option>
          <option value="fallecido">Fallecido</option>
        </select> -->
        <!-- <button type="submit">Filtrar Estado</button> -->
        <!-- </form> -->

        <button v-on:click="procesarFiltrarSexo('F')">
          Filtrar por Femenino
        </button>
        <button v-on:click="procesarFiltrarSexo('M')">
          Filtrar por Masculino
        </button>

        <table class="container-estado_table">
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

              <!-- cols seguimiento -->
              <th>Ubicacion del paciente</th>
              <th>Estado del paciente</th>
              <th>Tipo de contagio</th>
              <th>Recuperacion</th>
              <th>Fecha de muerte</th>
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
            </tr>
          </tbody>
        </table>
      </div>
    </section>
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
    // procesarMostrarRegistros: function() {
    //   axios
    //     .get("https://p46-g2-be-ultima.herokuapp.com/FiltrarEstado/")
    //     .then((result) => {
    //       this.registros = result.data;
    //       alert("Visualización de registros exitosa ");
    //     })
    //     .catch((error) => {
    //       alert("Error al mostrar registros");
    //     });
    // },
    procesarFiltrarSexo: function(sexo) {
      console.log(sexo);
      axios
        .get(`https://p46-g2-be-ultima.herokuapp.com/FiltrarSexo/${sexo}/`)
        .then((result) => {
          console.log(result.data);
          this.registros = result.data;
        })
        .catch((error) => {
          //usar???
          //    if(error.response.status == "401")
          alert("Error en el llamado");
        });
    },

    // elegirEstado: function() {
    //   let estado =
    // }
  },
  created: function() {
    this.procesarFiltrarSexo();
  },
};
</script>

<style></style>
