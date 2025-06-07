<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { messageBus } from "../events/messageBus";


const msg = ref("");

let unsubscribe: () => void;

onMounted(() => {
  unsubscribe = messageBus.subscribe((data) => {
    msg.value = data;
  });
});

onUnmounted(() => {
  unsubscribe();
});
</script>

<template>
  <p v-if="msg">📩 Получено: {{ msg }}</p>
</template>

