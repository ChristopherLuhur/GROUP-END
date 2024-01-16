<template>
  <div id="app">
    <div class="sidebar" :class="{ 'open': isSidebarOpen }">
      <div class="close-btn" @click="toggleSidebar">x</div>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/profile">Profile</router-link></li>
      </ul>
    </div>

    <div class="main-content">
      <router-view></router-view>
      <div class="menu-icon i" @click="toggleSidebar">Alamak</div>
    </div>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      isSidebarOpen: false
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    }
  }
};
</script>
  
<style>
body {
  margin: 0;
  font-family: 'Arial', sans-serif;
}

.sidebar {
  height: 100%;
  width: 0;
  position: fixed;
  top: 0;
  right: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: width 0.3s;
  padding-top: 60px;
  color: white;
}

.sidebar.open {
  width: 250px;
}

.sidebar ul {
  list-style-type: none;
  padding: 0;
}

.sidebar li {
  padding: 8px;
}

.sidebar a {
  text-decoration: none;
  font-size: 18px;
  color: white;
}

.close-btn {
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 20px;
}

.main-content {
  transition: margin-right 0.3s;
  padding: 16px;
}

.menu-icon {
  font-size: 28px;
  cursor: pointer;
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1;
  color: white;
}
</style>
  