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
              <th>Modificar Seguimiento</th>
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
              
              <td v-if="register.unidad_de_medida_edad == '1'">Años</td>
              <td v-else-if="register.unidad_de_medida_edad == '3'">Dias</td>
              <td v-else-if="register.unidad_de_medida_edad == '2'">Meses</td>
              
              <td v-if="register.sexo == 'M'">Masculino</td>
              <td v-else-if="register.sexo == 'F'">Femenino</td>
              
              <td>{{ register.registro.grupo_etnico }}</td>
              
              <td v-if="register.pertenencia_etnica == '1'">Indigena</td>
              <td v-if="register.pertenencia_etnica == '2'">ROM</td>
              <td v-if="register.pertenencia_etnica == '3'">Raizal</td>
              <td v-if="register.pertenencia_etnica == '4'">Palenquero</td>
              <td v-if="register.pertenencia_etnica == '5'">Negro</td>
              <td v-if="register.pertenencia_etnica == '6'">Otro</td>
              
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
              <td>
                <button v-on:click="llamar(register.registro.id_caso)">
                  Modificar id:{{ register.registro.id_caso }}
                </button>
              </td>
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
    procesarFiltrarEstado: function(estado) {
      console.log(estado);
      axios
        .get(`https://p46-g2-be-ultima2.herokuapp.com/FiltrarEstado/${estado}/`)
        .then((result) => {
          
          this.registros = result.data;
        })
        .catch((error) => {
          alert("Error en el llamado");
        });
    },
    llamar: function(id) {
          alert(
            `En la siguiente ventana se modificará el seguimiento del registro número ${id}`
          );
          localStorage.removeItem("id");
          localStorage.setItem("id", id);
          this.$router.push({ name: "ModificarSeguimiento" });
    },
    
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
