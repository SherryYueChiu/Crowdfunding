<script setup lang="ts">

</script>

<template>
  <div class="wrapper">
    <div class="container">
      <div class="box">
        <img class="avatar" src="../assets/avatar/catAvatar.png">
        <div class="name">發起人　玥餅</div>
        <div class="intro">壓力大的人一旦嗨起來是攔不住的
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  padding-bottom: 30px;
}

.container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  padding: 30px 5% 30px;
  align-items: start;
}

.box {
  display: grid;
  grid-template-columns: 50px 1fr;
  grid-template-rows: auto 1fr;
  align-items: start;
  width: 100%;
  border-radius: 10px;
  background-color: white;
}

.avatar {
  width: 50px;
  height: 50px;
  margin: 15px;
}

.name {
  display: flex;
  align-items: center;
  height: 80px;
  margin: 0 30px 0 30px;
  font-size: 24px;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.intro {
  grid-column: 1/3;
  padding: 0 20px 20px;
}
</style>
