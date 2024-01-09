<script setup lang="ts">
import { ref } from 'vue';

const funded = ref(0);
const fundTarget = ref(2000);
</script>

<template>
  <div class="wrapper">
    <div class="copywriting">
      <p>
        麻煩匯款到 013國泰世華 699504841981
      </p><br />
      <p><br />
      <div class="range" :style="('--p:' + Math.floor(100 * funded / fundTarget))">
        <div class="range__label">集資進度 {{ funded }}/{{ fundTarget }}</div>
      </div>
      </p>
      <p>如果超出目標金額會從第一位開始退款，不足則是會全數退款。
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  padding: 40px 0 40px;
  background-color: white;
}

.copywriting {
  width: 80%;
  padding: 0px 10% 0px;

  &>p {
    margin: 0;
  }

  &>p+p {
    padding-top: 1.5em;
  }

  & .icon {
    display: flex;
    flex-direction: row;
    align-items: center;

    & img {
      width: 30px;
      height: 30px;
      margin-right: 10px;
    }
  }

  .icon+.icon {
    margin-top: 10px;
  }

  .range {
    position: relative;
    background-color: #333;
    width: 300px;
    height: 30px;
    transform: skew(30deg);
    font-family: 'Orbitron', monospace;

    &:before {
      --width: calc(var(--p) * 1%);

      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      background-color: #F3E600;
      z-index: 0;
      animation: load 2s forwards linear;
    }

    &:after {
      counter-reset: progress var(--p);
      content: counter(progress) '%';
      color: #000;
      position: absolute;
      left: calc(50% - 1ch);
      top: 50%;
      transform: translateY(-50%) skewX(-30deg);
      z-index: 1;
      text-shadow: -1px -1px 0 #efe4d1, 1px -1px 0 #efe4d1, -1px 1px 0 #efe4d1, 1px 1px 0 #efe4d1;
    }

    &__label {
      transform: skew(-30deg) translateY(-100%);
      line-height: 1.5;
    }
  }

  @keyframes load {
    to {
      width: var(--width);
    }
  }

  @keyframes glitch {

    0%,
    5% {
      transform: translate(0, 0);
    }

    1% {
      transform: translate(-5%, -10%);
    }

    2% {
      transform: translate(10%, 30%);
    }

    3% {
      transform: translate(-43%, 10%);
    }

    4% {
      transform: translate(2%, -23%);
    }
  }
}
</style>
