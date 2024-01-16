<style scoped>
main {
  padding-top: 100px;
  padding-bottom: 50px;
  max-height: 200vh;
}

.container {
  display: flex;
  flex-wrap: wrap;
  margin: 10px auto;
  width: 80%;
  height: 70%;
  background-color: black;
  padding: 20px 0px;
  max-width: 5200px;
  /* Menyembunyikan tanda scroll horizontal */
}

.kotak {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 49px;
  width: 45%;
  background-color: lightgray;
  border: 2px solid grey;
  max-width: 2000px;
  /* Menyembunyikan tanda scroll horizontal */
}

.item {
  display: flex;
  background-color: lightgray;
}

.item p {
  justify-content: left;
}

.gambar {
  padding-right: 10%;
}

.harga {
  text-align: left;
}

.gambar img {
  width: 300px;
  height: 200px;
}
</style>

<template>
  <main>
    <div class="container">
      <div v-if="cars.length === 0">
        //gambar cart kosong
      </div>
      <div v-else v-for="(car, index) in cars" :key="index" class="kotak">
        <section class="item">
          <p class="gambar">
            <img :src="car.url" :alt="car.nama">
          </p>
          <div class="jenis">
            {{ car.nama }}<br>
          </div>
        </section>
      </div>
    </div>
  </main>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Home',
  data() {
    return {
      cars: [],
    };
  },
  mounted(){
    this.tampilMobil();
  },
  methods: {
    async tampilMobil() {
      try {
        const result = await axios.get('http://localhost:3000/katalog');
        this.cars = result.data;
      } catch(err){
        console.log(err)
      }
    },
  },
};
</script>

