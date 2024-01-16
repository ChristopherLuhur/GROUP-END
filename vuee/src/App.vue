<script setup>
import Navbar from '@/components/Navbar.vue';
import Foot from '@/components/Footer.vue';
// Sesuaikan dengan path yang benar

</script>

<template>
  <div class="bkgr-grey">
  <Navbar />
    <div id="app" class="container is-max-dekstop">
      <router-view />
    </div>
  <Foot />
  </div>
</template>

<style>
@import "bulma/css/bulma.css";
.bkgr-grey {
  background-color: black;
  margin-bottom: 30px;
  max-height: 200vh;
}
</style>