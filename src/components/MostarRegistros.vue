<template>
  <section class="section_show-register">
    <div>
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

    <!--sección Filtros -->
    <!-- <div class="filtro">
        <label for="filtrar">Filtrar por:</label><br>
                    select dropdown Estado Recuperado -->
    <!--sección Filtros 
                    <select id="filtar" name="filtrar">
                        <option value="municipio">Municipio</option>
                        <option value="sexo">Sexo</option>
                        <option value="estado">Estado</option>
                    </select> 
    </div>-->

    <!--sección TABLA -->

    <div class="">
      <h2 class="">Lista de Registros Covid19</h2>
      <table class="">
        <thead>
          <tr>
            <!--sección COLUMNAS -->
            <th>id_caso</th>
            <!-- <th>codigo_divipola_municipio_fk</th> -->
            <th>fecha_notificacion</th>
            <th>fecha_reporte</th>
            <th>fecha_sintomas</th>
            <th>fecha_diagnostico_lab</th>
            <th>edad</th>
            <th>medida_edad</th>
            <th>sexo</th>
            <th>grupo_etnico</th>
            <th>pertenencia_etnica</th>
            <th>fecha_recuperacion</th>
            <th>tipo_recuperacion</th>
            <!--cols Registro -->

            <!--cols Ubicacion -->
            <!--<th>id</th>
                        <th>codigoMunicipio</th>
                        <th>codigo_iso_pais</th>
                        <th>nombre_pais</th>
                        <th>codigo_divipola_departamento</th> -->
            <th>nombre_departamento</th>
            <th>nombre_municipio</th>

            <!--  <th>id_evolucion</th> -->
            <th>ubicacion_caso</th>
            <th>estado</th>
            <th>tipo_contagio</th>
            <th>recuperado</th>
            <th>fecha_muerte</th>
          </tr>
        </thead>
        <tbody>
          <!-- sección FILAS -->

          <tr v-for="register in registros" :key="register.id">
            <!--Fila 1, datos registro -->
            <td>{{ register.id_caso }}</td>
            <!-- <td>{{register.codigo_divipola_municipio_fk}}</td> -->
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

            <!-- <td>{{register.id}}</td> -->
            <!--<td>{{register.codigoDivipolaMunicipio}}</td> -->
            <!--<td>{{register.codigo_iso_pais}}</td>
                        <td>{{register.nombre_pais}}</td>
                        <td>{{register.codigo_divipola_departamento}}</td> -->
            <td>{{ register.ubicacion.nombre_departamento }}</td>
            <td>{{ register.ubicacion.nombre_municipio }}</td>

            <!--Fila 1, datos Seguimiento -->
            <!-- <td>{{register.id_evolucion}}</td> -->
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
</template>

<script>
import axios from "axios";
export default {
  name: "MostrarRegistros",

  data() {
    return {
      registros: [],
      /*
      registers: [
        {
          id_caso: 1,
          fecha_notificacion: "2020-04-10",
          fecha_reporte: "2020-04-10",
          fecha_sintomas: "2020-04-10",
          fecha_diagnostico_lab: "2020-04-10",
          edad: 30,
          unidad_de_medida_edad: 1,
          sexo: "M",
          grupo_etnico: "etnia",
          pertenencia_etnica: 1,
          fecha_recuperacion: "2020-04-10",
          tipo_recuperacion: "niguna",

          codigoDivipolaMunicipio: 91263,
          nombre_departamento: "AMAZONAS",
          nombre_municipio: "EL ENCANTO",

          ubicacion_caso: "Bogota",
          estado: "indefinido",
          tipo_contagio: "indefinido",
          recuperado: "indefinido",
          fecha_muerte: null,
        },

        {
          id_caso: 1,
          fecha_notificacion: "2020-04-10",
          fecha_reporte: "2020-04-10",
          fecha_sintomas: "2020-04-10",
          fecha_diagnostico_lab: "2020-04-10",
          edad: 30,
          unidad_de_medida_edad: 1,
          sexo: "M",
          grupo_etnico: "etnia",
          pertenencia_etnica: 1,
          fecha_recuperacion: "2020-04-10",
          tipo_recuperacion: "niguna",

          codigoDivipolaMunicipio: 91263,
          nombre_departamento: "AMAZONAS",
          nombre_municipio: "EL ENCANTO",

          ubicacion_caso: "Bogota",
          estado: "indefinido",
          tipo_contagio: "indefinido",
          recuperado: "indefinido",
          fecha_muerte: null,
        },
      ],
      */
    };
  },

  methods: {
    procesarMostrarRegistros: function() {
      axios
        .get("https://p46-g2-be-ultima.herokuapp.com/MostrarRegistros/")
        .then((result) => {
          this.registros = result.data;

          // alert("Visualización de registros exitosa ");
        })
        .catch((error) => {
          alert("Error al mostrar registros");
        });
    },
  },
  created: function() {
    this.procesarMostrarRegistros();
  },
};
</script>

<style>
.section_show-register {
  overflow: scroll;
}
</style>
