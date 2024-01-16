  <template>
    <div class="hidden">
    <div class="login-container">
      <div class="login-box">
        <h2>Log In</h2>
        <form @submit.prevent="handleLogin">
          <div class="form-group">
            <label for="username">Username:</label>
            <input type="text" id="username" v-model="username" placeholder="Enter your username" required>
          </div>
          <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" v-model="password" placeholder="Enter your password" required>
          </div>
          <button type="submit">Log in</button>
          <span id="signin">belum ada akun: <router-link :to="{ name: 'Signin' }">Sign in</router-link></span>
        </form>
      </div>
    </div>
  </div>
  </template>
  
<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    handleLogin() {
      // Implement your login logic here
      const masuk = async () => {
        try {
          const res = await axios.post('http://localhost:3000/masuk', {
            nama: this.username,
            pass: this.password
          });
          this.$store.commit('login', res.data);
          this.$router.push({ name: 'Home' });
          alert(`Login with Username: ${this.username}, Password: ${this.password}`);
        } catch (err) {
          alert('Salah username atau password!')
        }
      }
      masuk()
    },
  },
};
</script>
  
<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120vh;
  background-color: #f0f0f0;
  padding-top: 0px;
  overflow-y: hidden;
}

.login-box {
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 8px;
  width: 300px;
}

h2 {
  margin-bottom: 20px;
  color: #333;
  text-align: center;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-left: 0;
  font-size: 14px;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #ffffff;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0056b3;
}
</style>
  