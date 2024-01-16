<style scoped>
main {
  padding-top: 100px;
  padding-bottom: 50px;
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
      <div v-for="(car, index) in cars" :key="index" class="kotak">
        <section class="item">
          <p class="gambar">
            <img :src="car.image" :alt="car.name">
          </p>
          <div class="jenis">
            {{ car.name }}<br>
            <button @click="beliMobil(index)">Beli</button>
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
      cars: [
        { name: 'Nissan GTR', image: 'https://storage.googleapis.com/prod-nissan-indonesia/static-assets/brand/18tdigb-helios307c.jpg.ximg.l_6_h.smart.jpg' },
        { name: 'Lamborghini Huracan', image: 'https://media.istockphoto.com/id/486388014/id/foto/mobil-model-supercar-lamborghini-huracan-lp700-4.jpg?s=612x612&w=0&k=20&c=W_3Or9OnybZP4Wmo1K4e_5CUMC5l6cyn1n3P3s-lp0s=' },
        { name: 'Mazda', image: 'https://img.antaranews.com/cache/1200x800/2021/05/24/mazda-cx-3.jpg.webp' },
        { name: 'Toyota Supra', image: 'https://imgcdn.oto.com/large/gallery/color/38/2165/toyota-supra-color-716482.jpg' },
        // Add more cars as needed
      ],
    };
  },
  methods: {
    beliMobil(index) {
      alert('Anda membeli ' + this.cars[index].name);
      const beli = async ()=>{
        try {
          await axios.post('http://localhost:3000/simpan/katalog', {
            nama: this.cars[index].name,
            url_image: this.cars[index].image
          })
        } catch(err) {
          alert('Error')
        }
      }
      beli()
      // Lakukan logika pembelian mobil atau panggil API pembelian di sini
    },
  },
};
</script>

