<script setup>
import { toRefs, computed } from 'vue';
const props = defineProps({
    item: {
        type: Object,
        required: true,
    }
});

const { item } = toRefs(props);

const minutes = computed(() => {
    let diff = (item.value.startTime.getTime() - item.value.endTime.getTime()) / 1000;
    diff /= 60;

    return Math.abs(Math.round(diff));
});

const minHeightInPixels = computed(() => {
    return Math.round(minutes.value * 1.36363636364);
});

const getItemTime = computed(() => {
    const startMinutes = item.value.startTime.getMinutes() < 10 ? "0" + item.value.startTime.getMinutes() : item.value.startTime.getMinutes();
    const startTime = `${item.value.startTime.getHours()}:${startMinutes}`;

    const endMinutes = item.value.endTime.getMinutes() < 10 ? "0" + item.value.endTime.getMinutes() : item.value.endTime.getMinutes();
    const endTime = `${item.value.endTime.getHours()}:${endMinutes}`

    return `${startTime} - ${endTime}`
});

const enableMinimalicInfo = computed(() => { 
    return minutes.value <= 30 ? 'flex items-center' : ''
})
</script>

<template>
    <div class="border-l border-l-4 border-indigo-600 mb-1 py-1 px-2 rounded-lg text-white "
        :class="[item.color, enableMinimalicInfo]" 
        :style="{ height: `${minHeightInPixels}px`}">
        <h5 class="font-bold">{{ item.name }}</h5>
        <p v-show="enableMinimalicInfo !== ''">,</p>
        <p>{{ getItemTime }}</p>

    </div>
</template>