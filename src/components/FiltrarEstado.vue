<template>
  <section class="allregister">
    <section class="allregister_container">
      <div class="allregister_container-info">
        <h2>Filtrar Estado</h2>
        <p>Aqui podras filtar por el estado del paciente</p>
      </div>

      <div class="allregister_container-buttons">
        <button v-on:click="procesarFiltrarEstado('grave')">
          Filtrar Grave
        </button>
        <button v-on:click="procesarFiltrarEstado('leve')">
          Filtrar Leve
        </button>
        <button v-on:click="procesarFiltrarEstado('fallecido')">
          Filtrar Fallecido
        </button>
        <button v-on:click="procesarFiltrarEstado('moderado')">
          Filtrar Moderado
        </button>
      </div>

      <h2>Lista de los estados del paciente</h2>
      <div class="allregister_container-tabla">
        <table class="container-tabla_table">
          <thead class="tabla_table-heading">
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
          <tbody class="tabla_table-body">
            <!-- sección FILAS -->

            <tr
              class="table_body-values"
              v-for="register in registros"
              :key="register.id"
            >
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

<style>
.allregister_container-buttons {
  width: 90%;
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 50px;
}
.allregister_container-buttons button {
  background: #218dc9;
  width: 90px;
  height: 40px;
  border: none;
  color: #ffffff;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 10px;
  box-shadow: 0 3px 3px -2px rgb(0 0 0 / 10%), 0 3px 4px 0 rgb(0 0 0 / 14%),
    0 1px 8px 0 rgb(0 0 0 / 12%);
}
</style>
