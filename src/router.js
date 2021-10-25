import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";
import Instrucciones from "./components/Instrucciones.vue";
import MostrarRegistros from "./components/MostarRegistros.vue";
import SeleccionarUbicacion from "./components/SeleccionarUbicacion.vue";
import CrearRegistro from "./components/CrearRegistro.vue";
import CrearSeguimiento from "./components/CrearSeguimiento.vue";
import FiltrarSexo from "./components/FiltrarSexo.vue";
import FiltrarMunicipio from "./components/FiltrarMunicipio.vue";
import FiltrarEstado from "./components/FiltrarEstado.vue";
import ModificarSeguimiento from "./components/ModificarSeguimiento.vue";

const routes = [
  {
    path: "/",
    name: "root",
    component: Instrucciones,
  },

  {
    path: "/Instrucciones",
    name: "Instrucciones",
    component: Instrucciones,
  },

  {
    path: "/MostrarRegistros",
    name: "MostrarRegistros",
    component: MostrarRegistros,
  },
  {
    path: "/crear/ubicacion",
    name: "SeleccionarUbicacion",
    component: SeleccionarUbicacion,
  },
  {
    path: "/crear/registro",
    name: "CrearRegistro",
    component: CrearRegistro,
  },
  {
    path: "/crear/seguimiento",
    name: "CrearSeguimiento",
    component: CrearSeguimiento,
  },
  {
    path: "/filtrar/sexo",
    name: "FiltrarSexo",
    component: FiltrarSexo,
  },
  {
    path: "/filtrar/municipio",
    name: "FiltrarMunicipio",
    component: FiltrarMunicipio,
  },
  {
    path: "/filtrar/estado",
    name: "FiltrarEstado",
    component: FiltrarEstado,
  },

  {
    path: "/ModificarSeguimiento",
    name: "ModificarSeguimiento",
    component: ModificarSeguimiento,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
