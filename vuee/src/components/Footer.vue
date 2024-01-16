<style scoped>
.story {
    padding: 50px 0px;
    background-color: white;
    text-align: center;
}

.fixedooter {
    margin-bottom: 0px;
    left: 0;
    width: 100%;
    background-color: #333;
    padding: 10px;
    color: white;
}

.footer-content {
    width: 70%;
    margin-left: auto;
    margin-bottom: 50px;
    display: flex;
    justify-content: space-around;
}

.network-info,
.contact-info,
.agent-info {
    text-align: left;
}

.network-info h3,
.contact-info h3,
.agent-info h3 {
    margin-bottom: 10px;
}

.network-info p,
.contact-info p,
.agent-info p {
    margin: 0;
}
</style>
  
<template>
    <div class="story">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
            est
            laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
            est
            laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
            est
            laborum.</p>
    </div>
    <footer class="fixedooter">
        <div class="footer-content">
            <div class="network-info">
                <h3>Jaringan Kami</h3>
                <p>Jalan Apa Saja</p>
                <p>Jalan Putu Saja</p>
                <p>Jalan Lama Saja</p>
                <p>Jalan Baru Saja</p>
            </div>
            <div class="contact-info">
                <h3>Hubungi Kami</h3>
                <p>No. Telp: +62 123 456 789</p>
            </div>
            <div class="agent-info">
                <h3>Agen Kami</h3>
                <p>Jakarta | Surabaya | Bandung</p>
            </div>
        </div>
        Copyright 2023
    </footer>
</template>
  
<script>
export default {
    name: 'Foot',
};
</script>

