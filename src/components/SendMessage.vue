<script setup lang="ts">
import { messageBus } from "../events/messageBus";

const send = () => {
  messageBus.notify("Привет от отправителя! " + new Date().toLocaleTimeString());
}

</script>

<template>
  <button @click="send">Отправить сообщение</button>
</template>
