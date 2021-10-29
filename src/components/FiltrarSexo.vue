<template>
  <section class="allregister">
    <section class="allregister_container">
      <div class="allregister_container-info">
        <h2>Filtrar Sexo</h2>
        <p>Aqui podras filtar por el sexo del paciente</p>
      </div>

      <div class="allregister_container-buttons">
        <button v-on:click="procesarFiltrarSexo('F')">
          Filtrar por Femenino
        </button>
        <button v-on:click="procesarFiltrarSexo('M')">
          Filtrar por Masculino
        </button>
      </div>
      <h2>Lista del sexo del paciente</h2>
      <div class="allregister_container-tabla">
        <table class="container-tabla_table">
          <thead class="tabla_table-heading">
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
    procesarFiltrarSexo: function(sexo) {
      console.log(sexo);
      axios
        .get(`https://p46-g2-be-ultima2.herokuapp.com/FiltrarSexo/${sexo}/`)
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
    this.procesarFiltrarSexo();
  },
};
</script>

<style></style>
