<template>
  <section class="allregister">
    <section class="allregister_container">
      <div class="allregister_container-info">
        <!-- Acá va el titulo -->
        <h2>Consultar Todos los Registros</h2>
        <!-- Acá va el parrafo -->
        <p>
          Aqui esta visualizando todos los registros de contagios. Puedes
          modificar el estado del paciente en la ultima fila.
          <!--   <br>Recuerde que para modificar un registro debe seleccionarlo. -->
        </p>
      </div>

      <!--sección TABLA -->

      <h2>Lista de Registros Covid19</h2>
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
.allregister {
  width: 100%;
  min-width: 320px;
  color: #218dc9;
  margin-bottom: 200px;
}
.allregister_container-info {
  text-align: center;
  width: 90%;
  margin: 0 auto;
}
.allregister_container-info h2 {
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  color: #218dc9;
  margin-bottom: 40px;
}
.allregister_container-info p {
  font-size: 1.6rem;
  margin-bottom: 40px;
}

.allregister_container-tabla {
  text-align: center;
  overflow: scroll;
  width: 90%;
  margin: 0 auto;
}
.allregister_container h2 {
  text-align: center;
  margin-bottom: 10px;
}
.container-tabla_table {
  overflow: scroll;
  width: 2000px;
  table-layout: fixed;

  border-collapse: collapse;
  border-spacing: 20px;
  /* border-left: 1px solid;
  border-right: 1px solid;
  border-color: black; */
}
.tabla_table-heading {
  /* UI Properties */
  /* background: #72cade 0% 0% no-repeat padding-box; */
  background-color: #218dc9;
  color: #ffffff;
  /* border: 1px solid #929292; */
  /* border-radius: 12px 12px 0px 0px; */

  opacity: 1;
  text-align: center;
  font-size: 1.2rem;
  /* padding: 20px 20px 20px; */
}
.tabla_table-heading tr th {
  padding: 5px;
  border-right: 1px solid #ffffff;
  width: 150px;
  height: 40px;
}

.tabla_table-body {
  background: #ffffff 0% 0% no-repeat padding-box;
  border-collapse: collapse;
  border-spacing: 0;
  text-align: center;
}
.table_body-values {
  font-size: 1.2rem;
  height: 40px;
}
.table_body-values:nth-child(odd) {
  background-color: #f2f2f2;
}
.table_body-values td:last-of-type button {
  background: #218dc9;
  width: 90px;
  height: 30px;
  border: none;
  color: #ffffff;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 3px 3px -2px rgb(0 0 0 / 10%), 0 3px 4px 0 rgb(0 0 0 / 14%),
    0 1px 8px 0 rgb(0 0 0 / 12%);
}
</style>
