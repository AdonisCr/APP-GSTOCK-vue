<script setup lang="ts">

</script>
<template >
  <div class="container">
    <header class="lateral-bar">
      <nav>
        <router-link to="/" class="logo"> <img src="/src/assets/logo.png" alt="logo" style="width: 70px; height: 70px;"/><h2>GStocks</h2></router-link>
        <router-link to="/" class="a">Tableau de Bord</router-link>
        <router-link to="/Inventaire" class="a">Inventaire</router-link>
        <router-link to="/Stocks" class="a">Stocks</router-link>
        <router-link to="/Payement" class="a">Payement</router-link>
        <router-link to="/Historique" class="a">Historique</router-link>
        <router-link to="/Aides" class="a">Besoin d'aide ?</router-link>
      </nav>
      <div style="margin: 10px">
          <p style="font-family: 'Courier New', Courier, monospace; font-size: 13px; color: white;">
            @gstocks cree par Adonis.<br>
            tous droits réservés 
          </p>
        <div class="connect"></div>
      </div>
    </header>
    <main class="main">
      <router-view class="router-view"></router-view>
    </main>
  </div>  
</template>

<style scoped>
.router-view {
    width: 100%;
    height: 100%;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;  
  background-color: #a4a62e;
  width: 100%;
  height: 100%;
}
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e8ebf0;
  height: 100vh;
  width: 80%;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

h2 {
  font-size: 40px;
}
nav {
  display: flex;
  gap: 30px;
  flex-direction: column;
  margin-top: 0;
  line-height: 8px;
}     
.logo {
  cursor:pointer;
  display: flex;
  align-items: center;
  margin:0; 
  justify-content: left; 
}
.a {
  cursor: pointer;
  margin-left: 20px;
}
.lateral-bar {
  display: flex;
  justify-content: space-between;
  background-color: #16181d;
  color: white;
  height: 100%;
  width: 20%;
  flex-direction: column; 
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px; 

}
.connect {
  height: 70px;
  width: 90%;
  background-color: #e8ebf0;
  border-radius: 10px;
}

</style>
