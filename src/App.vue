<script setup>
import PerDayFillIn from './components/PerDayFillIn.vue';

const firstDay = [
  {
    name: "Start",
    startTime: new Date('December 16, 2023, 14:00:00'),
    endTime: new Date('December 16, 2023, 14:45:00'),
    color: 'bg-green-500',
  },
  {
    name: "Pascal & MSSH - Holf with your Friends / PUBG",
    startTime: new Date('December 16, 2023, 14:45:00'),
    endTime: new Date('December 16, 2023, 16:00:00'),
    color: 'bg-sky-500',
  },
  {
    name: "Solo",
    startTime: new Date('December 16, 2023, 16:00:00'),
    endTime: new Date('December 16, 2023, 17:00:00'),
    color: 'bg-orange-500',
  },
  {
    name: "Kaak & Mokka - Tarkov",
    startTime: new Date('December 16, 2023, 17:00:00'),
    endTime: new Date('December 16, 2023, 19:00:00'),
    color: 'bg-sky-500',
  },
  {
    name: "Speciale aankondigingen",
    startTime: new Date('December 16, 2023, 19:00:00'),
    endTime: new Date('December 16, 2023, 19:30:00'),
    color: 'bg-red-500',
  },
  {
    name: "Solo",
    startTime: new Date('December 16, 2023, 19:30:00'),
    endTime: new Date('December 16, 2023, 21:00:00'),
    color: 'bg-orange-500',
  },
  {
    name: "Qucee, Papaneus, Fay - Horror",
    startTime: new Date('December 16, 2023, 21:00:00'),
    endTime: new Date('December 16, 2023, 23:00:00'),
    color: 'bg-sky-500',
  },
  {
    name: "Afloop",
    startTime: new Date('December 16, 2023, 23:00:00'),
    endTime: new Date('December 17, 2023, 00:00:00'),
    color: 'bg-green-500',
  },
];

const secondDay = [
  {
    name: "Start",
    startTime: new Date('December 16, 2023, 14:00:00'),
    endTime: new Date('December 16, 2023, 14:45:00'),
    color: 'bg-green-500',
  },
  {
    name: "Milan Knol - PlateUP",
    startTime: new Date('December 16, 2023, 14:45:00'),
    endTime: new Date('December 16, 2023, 16:00:00'),
    color: 'bg-sky-500',
  },
  {
    name: "Solo",
    startTime: new Date('December 16, 2023, 16:00:00'),
    endTime: new Date('December 16, 2023, 17:30:00'),
    color: 'bg-orange-500',
  },
  {
    name: "GameMeneer - Recht voor je Raap LIVE",
    startTime: new Date('December 16, 2023, 17:30:00'),
    endTime: new Date('December 16, 2023, 20:00:00'),
    color: 'bg-sky-500',
  },
  {
    name: "Solo",
    startTime: new Date('December 16, 2023, 20:00:00'),
    endTime: new Date('December 16, 2023, 21:00:00'),
    color: 'bg-orange-500',
  },
  {
    name: "Papaneus & IssyTheOne - Sea of Thieves",
    startTime: new Date('December 16, 2023, 21:00:00'),
    endTime: new Date('December 16, 2023, 23:00:00'),
    color: 'bg-sky-500',
  },
  {
    name: "Afloop",
    startTime: new Date('December 16, 2023, 23:00:00'),
    endTime: new Date('December 17, 2023, 00:00:00'),
    color: 'bg-green-500',
  },
];
</script>

<template>
  <div class="container mx-auto max-w-4xl">
    <h2 class="text-6xl text-center font-longreach">Morrog 10 Year Anniversary</h2>
    <h3 class="text-center text-6xl font-longreach text-blue-600 mb-5">December</h3>
    <div class="grid grid-cols-2 gap-4">
      <PerDayFillIn 
        title="Zaterdag 16"
        :items="firstDay"
         />
      <PerDayFillIn 
        title="Zondag 17"
        :items="secondDay"
         />
    </div>
  </div>
</template>