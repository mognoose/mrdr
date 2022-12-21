<template>
  <router-view/>
</template>


<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Cuprum:wght@400;700&display=swap');

$fg-primary: rgb(220,200,150);
$fg-secondary: rgba(220,200,150,.5);
$fg-light: rgb(250, 235, 215);

$bg-primary: rgb(55,55,55);
$bg-secondary: rgba(220,200,150,0.1);
$bg-light: rgba(220,200,150,0.4);

$shadow: rgba(0,0,0,.5);
$dark: rgb(40,40,40);
$highlight: rgba(225,200,125,.5);

html,
body {
  margin: 0;
  padding: 0;
  background-color: $bg-primary;
  font-family: 'Cuprum', sans-serif;
}

#app {
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $fg-primary;
  background-image: url('~@/assets/bg.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
}

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
  border: 2px solid $fg-primary;
  color:$fg-primary;
  background-color: $bg-primary;
  border-radius: 5px;
  font-family: 'Cuprum', sans-serif;
  text-transform: uppercase;
  text-align: center;
}

button {
  cursor: pointer;
  text-transform: uppercase;
  background-color: $bg-secondary;
  box-shadow: 0 0 10px $shadow;
  transition: 200ms;
}

button:hover {
  background-color: $bg-light;
  color: $fg-light;
  box-shadow: 0 0 10px $highlight
}

button:disabled {
  background-color: $bg-secondary;
  color: $dark;
  border: 2px solid $dark;
}

input {
  margin: 1em;
  background-color: $dark;
  border-radius: 0px;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  transition: 200ms;

}

input:hover {
  box-shadow: 0 0 10px $shadow;
}

input:focus {
  outline-width: 0;
  box-shadow: 0 0 10px $bg-secondary
}

table{
  border-collapse: collapse;
}

th{
  border-bottom: 2px solid $fg-primary;
  padding: .25em 1em;
}

td{
  border-bottom: 1px solid $fg-secondary;
  padding: .25em 1em;
}
</style>
