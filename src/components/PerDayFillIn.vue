<script setup>
import ItemFillIn from './ItemFillIn.vue';


const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  title: {
    type: String,
    required: true,
  }
});
</script>

<template>
  <div>
    <h4 class="font-evanston text-4xl mb-4 text-center text-white">{{ title }}</h4>
    <div v-for="item in items">
      <ItemFillIn :item="item" />
    </div>
  </div>
</template>