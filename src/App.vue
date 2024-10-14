<script setup lang="ts">

</script>
<template >
  <div class="container">
    <header class="lateral-bar">
      <nav>
        <router-link to="/" class="logo"> <img src="/src/assets/logo.png" alt="logo" style="width: 70px; height: 70px;"/><h2>GStocks</h2></router-link>
        <router-link to="/" class="a"><img src="/src/assets/Dashbord.svg" alt="" >Tableau de Bord</router-link>
        <!-- <router-link to="/Inventaire" class="a">Inventaire</router-link> -->
        <router-link to="/Stocks" class="a"> <img src="/src/assets/Stock.svg" alt="">Stocks</router-link>
        <router-link to="/Payement" class="a"> <img src="/src/assets/Money.svg" alt="">Payement</router-link>
        <router-link to="/Historique" class="a"> <img src="/src/assets/Liste.svg" alt="">Historique</router-link>
        <router-link to="/Aides" class="a"> <img src="/src/assets/Help.svg" alt="">Besoin d'aide ?</router-link>
      </nav>
      <div style="margin: 10px">
          <p style="font-family: 'Courier New', Courier, monospace; font-size: 13px; color: white;">
            @gstocks cree par Adonis.<br>
            tous droits réservés 
          </p>
        <div class="connect">
          <div style="display: flex;align-items: center;">
            <img src="/src/assets/Profil.svg" alt="" style="width: 40px;">
            <div style="line-height: 5px; font-size: 12px; display: flex;flex-direction: column;justify-content: left;">
              <p>Nom utilisateur</p>
              <div style="background-color: black; color: white; border-radius: 8px;width: 50%;margin: auto;padding: 10px;">Admin</div>
            </div>
          </div>
          
          <img src="/src/assets/logout.svg" alt="" style="width: 40px;">
        </div>
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

h2{
  font-size: 40px;
  color:aliceblue ;
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
  color: aliceblue;
  display: flex;
  align-items: center;
  gap: 5px;
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
  color: #16181d;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 20px;
}

</style>
