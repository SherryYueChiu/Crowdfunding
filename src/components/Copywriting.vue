<script setup lang="ts">
</script>

<template>
  <div class="copywriting">
    <p>這個月1/27是T&N Party，<br/>
      我們想要集資買一件香噴噴的衣服給貓咪穿。<br/>
      如果你也很期待，來幫個忙。</p>
      <p>就是這件！！</p><br/>
      <img class="pull-right-img" src="/2401_MaoMi.webp" alt="" srcset="">
      <img class="pull-right-img" src="/2401_TNParty.webp" alt="" srcset="">
  </div>
</template>

<style scoped lang="scss">
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 0 10% 50px;
  align-items: start;
}

.box {
  position: relative;
  width: calc(100% - 40px);
  height: 60%;
  padding: 20px;
  background-color: #eaeaea;
  border: 2px solid;
  animation: border-animation 5s linear infinite;

  &.left {
    border-radius: 0px 10px 10px 10px;
  }

  &.right {
    border-radius: 10px 0px 10px 10px;
  }

  &.left:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 0;
    height: 0;
    border: 16px solid transparent;
    border-right-color: black;
    border-left: 0;
    border-top: 0;
    margin-top: -2px;
    margin-left: -16px;
  }

  &.right:after {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    width: 0;
    height: 0;
    border: 16px solid transparent;
    border-left-color: black;
    border-right: 0;
    border-top: 0;
    margin-top: -2px;
    margin-right: -16px;
  }
}

.copywriting {
  width: 80%;
  padding: 0px 10% 50px;

  &>p {
    margin: 0;
  }

  &>p+p {
    padding-top: 1.5em;
  }

  &>.pull-right-img{
    width: 100%;
  }
}
</style>
