<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const router = useRouter()

const login = async () => {
  try {
    const response = await axios.post('/api/login', { username: username.value, password: password.value })
    const token = response.data.token
    localStorage.setItem('token', token)
    router.push({ name: 'accueil' })
  } catch (error) {
    console.error(error)
  }
}
</script>

<template >
  <section class="container">
    <section class="section1">
      <h1 style="font-size:100px ;margin: 0;"> G.Stocks</h1>
      <p> 
        G.Stocks est une solution de gestion de stock adaptée 
        aux entreprises de toutes tailles. Que vous gériez 
        un petit inventaire ou des entrepôts à grande échelle, 
        G.Stocks vous permet de suivre en temps réel l’état de 
        vos stocks, de gérer les mouvements de marchandises
        et d’optimiser vos niveaux de stock pour éviter les
        ruptures. Son interface intuitive améliore l’efficacité
        de votre gestion tout en réduisant les coûts. 
      </p>
      <p>
        Avec G.Stocks, accédez à des rapports détaillés et 
        configurez des alertes personnalisées. Suivez les
        performances de vos stocks et consultez vos données
        en toute sécurité, où que vous soyez. Notre solution 
        convient à divers secteurs, qu’il s’agisse de la 
        vente au détail, de la fabrication, ou d’autres 
        industries nécessitant une gestion efficace de 
        l’inventaire.
      </p>
      <button >Voir plus >></button>
    </section>
    <section class="section2">
      <div class="section21">
        <h2 style="font-size: 70px;color: white;">Connexion</h2>
        <form  @submit.prevent="login">
          <label for="">Username</label><br>
          <input type="text" v-model="username" placeholder="Nom d'utilisateur"><br>
          <label for="">Password</label><br>
          <input type="password" v-model="password" placeholder="Mot de passe"><br>
          <button type="submit" style="width: 355px;" > Se  connecter</button> 
          <!-- <a style="color: white; text-decoration: none;font-size: 16px;" href="Dashbord .html"> Login </a> -->
        </form>
      </div>            
    </section>
  </section> 
</template>
<style scoped>
.container{
  display: flex;
  align-items: center;
  height: 600px;
  justify-content: space-around;
  padding-top: 30px;
}
.section1{
  width: 450px;
  text-align: left;

}
button{
  background-color: #4B50A3 ;
  border-radius: 8px;
  padding: 10px;
  border: none;
  color: white;
}
.section2{
  height: 536px;
  width: 500px;
  background-color: #5D62B5 ;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.section21{
  margin-left: 30px;
  color: white;
}
input{
  width: 350px;
  height: 30px;
  border-radius: 10px;
  border: none;
  margin-top: 2px;
  margin-bottom: 10px;
}
p{
  font-size: 15px;
}
h2{
  margin: 0;
}
</style>

