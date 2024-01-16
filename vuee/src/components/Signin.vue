<template>
    <div class="login-container">
        <div class="login-box">
            <h2>Sign In</h2>
            <form @submit.prevent="handleSignin">
                <div class="form-group">
                    <label for="username">Username:</label>
                    <input type="text" id="username" v-model="username" placeholder="Enter your username" required>
                </div>
                <div class="form-group">
                    <label for="password">Password:</label>
                    <input type="password" id="password" v-model="password" placeholder="Enter your password" required>
                </div>
                <div class="form-group">
                    <label for="cpassword">Confirm Password:</label>
                    <input type="password" id="cpassword" v-model="cpassword" placeholder="Confirm password" required>
                </div>
                <button type="submit">Sign in</button>
            </form>
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
            cpassword: ''
        };
    },
    methods: {
        handleSignin() {
            if (this.password !== this.cpassword) {
                alert(`password tidak sesuai`);
                return;
            }
            const daftar = async () => {
                try {
                    const response = await axios.post('http://localhost:3000/simpan', {
                        nama: this.username,
                        pass: this.password
                    });

                    // Tanggapi hasil dari server
                    const data = response.data;
                    alert(`Lanjutkan login with Username: ${this.username}, Password: ${this.password}`);
                    this.$router.push({ name: 'Login' });

                } catch (error) {
                    // Tangkap dan tangani kesalahan jika ada
                    alert('data sudah ada');    
                }
            };
            daftar()
        },
    },
};
</script>
  
<style scoped>
.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f0f0;
    padding-top: 120px;
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

.putih {
    color: white;
    text-decoration: none;
}

button:hover {
    background-color: #0056b3;
}
</style>
  