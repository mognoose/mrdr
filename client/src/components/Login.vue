<template>
  <div class="container text-center">
    <div class="row mt-5">
      <div class="col">
        <div class="card p-5 text-center">
          <img alt="MRDR logo" src="../assets/logo.svg" class="logo">
          <h3>MRDR</h3>
          <form class="p-5" @submit.prevent="login()">
            <div class="form-group">
              <label for="name" class="form-label">Name</label>
              <input type="name" class="form-control" id="name" v-model="username">
            </div>
            <div class="form-group">
              <label for="room" class="form-label">Room</label>
              <input type="room" class="form-control" id="room" v-model="room">
            </div>
            <div class="form-group">
              <button type="submit" :class="(username&&room) ? 'btn btn-outline-success' : 'btn btn-outline-secondary'" :disabled="!username || !room">Play</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return {
      username: localStorage.getItem('playerName'),
      room: "",
    }
  },
  methods: {
    login(){
      console.log(this.username, this.room);

      axios.post('http://localhost:8080/api/players', {
        name: this.username,
        room: this.room
      })
      .then(response => {
        console.log(response);
        this.$emit('login:data', response.data)
        localStorage.setItem('playerId', response.data.id)
        localStorage.setItem('playerName', response.data.name)
      })
      .catch(error => {
        return console.log(error);
      })

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  margin: 0 auto;
  max-width: 35em;
}
img{
  margin: 0 auto;
}
.logo{
  background-color: #FFFFFF;
  width: 10em;
  height: 10em;
  padding: 1em;
  border-radius: 100%;
}
h3{
  font-weight: bold;
  color: #FFFFFF;
}
input{
  font-size: 2em;
  text-align: center;
}
label{
  font-weight: bold;
  font-size: 1.2em;
  color: #FFFFFF;
}

</style>
