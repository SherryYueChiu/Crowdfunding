<script setup lang="ts">
import { ref } from "vue";
import { AttendeeType } from "../types/attendee.d"
const funded = ref(0);
const fundTarget = ref(2000);

let attendeeList = ref<AttendeeType[]>([{
  donateAmount: 200,
  donateTime: '01/10 02:46 (16244)',
  name: '匿名',
},{
  donateAmount: 100,
  donateTime: '01/10 02:43(41981)',
  name: '匿名',
}]);

funded.value = attendeeList.value.reduce((total, attendee) => {
  return total + attendee.donateAmount;
}, 0);

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
      </p><br />
    </div>
    <div class="container">
      <div class="box" v-for="(attendee) in attendeeList">
        <div class="name">{{ attendee?.name || '匿名' }}</div>
        <div class="intro">
          {{ `贊助了 $${attendee?.donateAmount || 0}` }}
        </div>
        <div class="time">{{ attendee?.donateTime || '--' }}</div>
      </div>
    </div>
    <div class="copywriting"><br />
      <p>如果你想要留下名字，可以利用APP轉帳時在備註打個名字，或是傳訊息告訴我。
      </p>
      <p>如果集資金額超出訂單實際花費會從第一位開始退款，集資失敗則會全數退款。
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  padding: 20px 0 20px;
  background-color: white;
}

h2 {
  font-size: 24px;
  font-weight: 600;
  padding: 0 0 0 7%;
}

.container {
  display: grid;
  grid-template-columns: 48% 48%;
  gap: 20px;
  align-items: start;
  max-height: 305px;
  padding: 10px 5% 20px;
  overflow-y: scroll;
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
}

.range {
  position: relative;
  background-color: #333;
  width: 100%;
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

.box {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto;
  align-items: start;
  width: 100%;
  border-radius: 10px;
  border: 3px outset;
  border-color: #e593af;
  box-sizing: border-box;
  animation: border-animation-bi 2s linear infinite;
  cursor: grab;

  &.rainbow {
    border: 4px outset;
    transform: translateY(-2.5px);
    animation: border-animation-rainbow 5s linear infinite;
  }

  & .acheivedSticker {
    position: fixed;
    display: inline;
    width: 40%;
    right: -20px;
    top: -40px;
  }
}

.avatar {
  width: 50px;
  height: 50px;
  margin: 15px;
  animation: hue-rotate-animation-bi 2s linear infinite;

  &.rainbow {
    animation: hue-rotate-animation-rainbow 5s .5s linear infinite;
  }
}

.name {
  height: 60px;
  font-size: 24px;
  font-weight: 700;
  margin: 10px 10px -20px 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.intro {
  grid-column: 1/3;
  padding: 0 20px 0px;
}

.time {
  grid-column: 1/3;
  padding: 0 20px 10px;
  color: #666;
}

@keyframes border-animation-rainbow {
  0% {
    border-color: #e593af;
  }

  10% {
    border-color: #e593af;
  }

  33% {
    border-color: #8eb46c;
  }

  66% {
    border-color: #71b3c8;
  }

  100% {
    border-color: #af9ee5;
  }
}

@keyframes border-animation-bi {
  0% {
    border-color: #e593af;
  }

  45% {
    border-color: #e593af;
  }

  55% {
    border-color: #71b3c8;
  }

  100% {
    border-color: #71b3c8;
  }
}

@keyframes hue-rotate-animation-rainbow {
  0% {
    filter: hue-rotate(0deg);
  }

  100% {
    filter: hue-rotate(360deg);
  }
}

@keyframes hue-rotate-animation-bi {
  0% {
    filter: hue-rotate(0deg);
  }

  49% {
    filter: hue-rotate(0deg);
  }

  50% {
    filter: hue-rotate(220deg);
  }

  100% {
    filter: hue-rotate(220deg);
  }
}
</style>
