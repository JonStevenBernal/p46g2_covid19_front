<template>
  <section class="filtros">
    <section class="filtros_container">
      <h3>Filtrar Estado</h3>
      <p>Aqui podras filtar por el estado del paciente</p>

      <div class="filtros_container-estado">
        <h2>Lista de los estados del paciente</h2>

        <!-- <form action=""> -->
        <!-- onchange="procesarFiltrarEstado(this.value)" -->
        <label for="crearsegumiento">Selecciona la Ubicacion</label>
        <input v-model="this.estado" placeholder="edit me" />
        <!-- <select class="form_creacion-input" v-model="grave">
          <option value="leve">Leve</option>
          <option value="moderado">Moderado</option>
          <option value="grave">Grave</option>
          <option value="fallecido">Fallecido</option>
        </select> -->
        <!-- <button type="submit">Filtrar Estado</button> -->
        <!-- </form> -->

        <table class="container-estado_table">
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
              <td>{{ register.registro.id_caso }}</td>
              <!-- <td>{{register.codigo_divipola_municipio_fk}}</td> -->
              <td>{{ register.registro.fecha_notificacion }}</td>
              <td>{{ register.registro.fecha_reporte }}</td>
              <td>{{ register.registro.fecha_sintomas }}</td>
              <td>{{ register.registro.fecha_diagnostico_lab }}</td>
              <td>{{ register.registro.edad }}</td>
              <td>{{ register.registro.unidad_de_medida_edad }}</td>
              <td>{{ register.registro.sexo }}</td>
              <td>{{ register.registro.grupo_etnico }}</td>
              <td>{{ register.registro.pertenencia_etnica }}</td>
              <td>{{ register.registro.fecha_recuperacion }}</td>
              <td>{{ register.registro.tipo_recuperacion }}</td>

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
              <td>{{ register.ubicacion_caso }}</td>
              <td>{{ register.estado }}</td>
              <td>{{ register.tipo_contagio }}</td>
              <td>{{ register.recuperado }}</td>
              <td>{{ register.fecha_muerte }}</td>
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
    procesarFiltrarEstado: function(estado) {
      console.log(estado);
      axios
        .get(`https://p46-g2-be-ultima.herokuapp.com/FiltrarEstado/${estado}/`)
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
    this.procesarFiltrarEstado();
  },
};
</script>

<style></style>
