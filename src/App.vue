<template>
  <router-view/>
</template>


<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Cuprum:wght@400;700&display=swap');

html,
body {
  margin: 0;
  padding: 0;
  background-color: rgb(55,55,55);
  font-family: 'Cuprum', sans-serif;
}

#app {
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(220,200,150);
  background-image: url('~@/assets/bg.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
}

// nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
.form-group {
  margin: 1em;
  display: grid;
}

.form-control {
  margin: .5em;
}

.mt-2 {
  margin-top: 2em;
}

button,
input {
  margin: 2px;
  padding: .5em;
  border: 2px solid rgb(220,200,150);
  color:rgb(220,200,150);
  background-color: rgb(55,55,55);
  border-radius: 5px;
  font-family: 'Cuprum', sans-serif;
  text-transform: uppercase;
  text-align: center;
}

button {
  cursor: pointer;
  text-transform: uppercase;
  background-color: rgba(220,200,150,0.1);
}

button:hover{
  background-color: rgba(220,200,150,0.4);
  color:rgb(250, 235, 215);
}

input {
  margin: 1em;
  background-color: rgb(40,40,40);
  border-radius: 0px;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
}

input:focus {
  outline-width: 0;
}

table{
  border-collapse: collapse;
}

th{
  border-bottom: 2px solid rgb(220,200,150);
  padding: .25em 1em;
}

td{
  border-bottom: 1px solid rgba(220,200,150,.5);
  padding: .25em 1em;
}
</style>
