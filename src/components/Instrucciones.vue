<template>
  <section class="section_main">
    <div class="section_main-image"></div>
    <div class="section_main-home">
      <h2>¡Bienvenido a Coronactual!</h2>
      <p>
        En este sitio web se puede encontrar informacion acerca del actual brote
        de enfermedad por coronavirus (COVID-19) que fue notificado por primera
        vez en Wuhan (China) el 31 de diciembre de 2019. En esta página hay
        información sobre el brote en (Colombia), en este sitio web puede
        agregar un registro, consultar un registro, filtar un registro y
        modificar registros, cada registro tiene un seguimiento, tambien se
        puede modificar y consultar un seguimiento.
      </p>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.section_main {
  width: 100%;
  height: auto;
  padding-top: 50px;
  padding-bottom: 30px;
  text-align: center;
}
.section_main-image {
  width: 20rem;
  height: 20rem;
  margin: 0 auto;
  margin-bottom: 50px;
  background-image: url("../assets/icons8-virus-pur.svg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.section_main-home {
  width: 90%;
  min-width: 288px;
  max-width: 900px;
  margin: 0 auto;
}
.section_main-home h2 {
  margin-bottom: 30px;
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 2.6rem;
  color: var(--primary-color);
}
.section_main-home p {
  margin-bottom: 30px;
  font-size: 1.6rem;
  color: var(--black-letter);
}
</style>
