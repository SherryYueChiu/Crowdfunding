<script setup lang="ts">
import Atteendee from './components/Atteendee.vue'
import Copywriting from './components/Copywriting.vue'
import Initiator from './components/Initiator.vue'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'

console.log('version: 0.0.1')
</script>

<template>
  <div class="container">
    <main>
      <Header></Header>
      <Copywriting></Copywriting>
      <Atteendee />
      <Initiator></Initiator>
      <Footer></Footer>
    </main>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: grid;
}

main {
  max-width: 600px;
  margin: auto;
  background-color: #efe8de;
}
</style>
