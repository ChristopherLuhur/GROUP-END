<style scoped>
/* Styling untuk navbar */
.navbar {
  position: fixed;
  top: 0%;
  left: 0%;
  right: 0%;
  display: flex;
  justify-content: space-between;
  padding: 20px 0px;
  background-color: black;
  z-index: 1000;
}

.nama {
  color: white;
  cursor: pointer;
}

/* Styling untuk logo */
.logo-container {
  margin-left: 50px;
}

.logo {
  max-width: 120px;
  /* Sesuaikan lebar maksimum logo */
  height: auto;
}

input {
  margin-right: 50px;
  padding: 10px;
  height: 30px;
  width: 320px;
  border-radius: 10px;
  border: 1px solid grey;
}

input:focus {
  outline: solid navy;
}

/* Styling untuk elemen navigasi */
.nav-items {
  display: flex;
  margin-top: 10px;
}

.nav-items a {
  margin-right: 50px;
  text-decoration: none;
  color: white;
  /* Warna teks navigasi */
}
.nav-items .nama {
  margin-right: 50px;
  text-decoration: none;
  color: white;
  /* Warna teks navigasi */
}

/* Hover effect pada elemen navigasi */
.nav-items a:hover {
  color: #007bff;
  /* Warna teks navigasi saat dihover */
}

.sub-menu {
  display: none;
  position: absolute;
}

.sub-menu.open {
  display: block;
  white-space: normal;
}

nav li {
  white-space: nowrap;
}
</style>

<template>
  <nav class="navbar">
    <!-- Logo di sisi kiri -->
    <div class="logo-container">
      <router-link :to="{ name: 'Home' }" style="margin-top: 10px;"><img src="../assets/logo.png" class="logo"
          width="180px" heigth="150px"></router-link>
    </div>

    <div class="nav-items">
      <input type="text" placeholder="Search Items">
      <router-link :to="{ name: 'Login' }" v-if="!loggedIn">Login</router-link>
      <span v-else>
        <span class="nama" @click="toggleDownbar">{{ userData.nama }}</span>
        <div class="sub-menu" :class="{ 'open': isDownbarOpen }">
          <ul>
            <li><router-link :to="{ name: 'History' }">History</router-link></li>
            <li>
              <button @click="logout">Logout</button>
            </li>
          </ul>
        </div>
      </span>
    </div>
  </nav>
</template>
  
<script>
import axios from 'axios';

export default {
  name: 'Navbar',
  data() {
    return {
      userData: {},
      isDownbarOpen: false,
    };
  },
  computed: {
    loggedIn() {
      // Ambil status login dari Vuex atau localStorage jika digunakan
      // Gantilah dengan implementasi yang sesuai dengan kebutuhan Anda
      return this.$store.state.loggedIn; // Misalnya menggunakan Vuex
    },
  },
  watch: {
    loggedIn(newVal) {
      if (newVal) {
        // Jika pengguna baru saja login, panggil metode untuk mendapatkan data pengguna
        this.getUserData();
      }
    },
  },
  methods: {
    async getUserData() {
      try {
        // Lakukan permintaan ke backend untuk mendapatkan data pengguna dari MongoDB
        const response = await axios.get('http://localhost:3000/api/userdata'); // Gantilah dengan endpoint yang sesuai
        this.userData = response.data;
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    },
    logout() {
      // Lakukan proses logout di sini
      // Misalnya, commit mutation logout pada Vuex
      this.$store.commit('logout');
    },
    toggleDownbar() {
      this.isDownbarOpen = !this.isDownbarOpen;
    }
  },
};
</script>
  