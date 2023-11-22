<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Black+Han+Sans&family=Hahmlet:wght@300&display=swap');

:root{
  --font-title:'Black Han Sans', sans-serif;
  --font-content:'Hahmlet', serif;

  --color-black:#020306;
  --color-yellow:#FFD686;
  --color-golden:#F4CE6D;
  --color-gray:#383838;
  --color-purple:#B799C5;
}
.p__title{
    font-family: var(--font-title);
}

.p__content{
    font-family: var(--font-content);
}
* {
  padding:0;
  margin:0;
  scroll-behavior: smooth;
}

a {
  color: unset;
  text-decoration: none;
}
</style>
