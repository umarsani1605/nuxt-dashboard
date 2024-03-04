<template>
  <div>
    <!-- Header -->
    <div class="font-sans grid grid-cols-12">
      <Sidebar class="col-span-2 block" />
      <!-- Main Section -->
      <div class="bg-background col-span-10">
        <Header class="" />
        <main class="p-8 lg:col-span-6">
          <NuxtPage />
        </main>
      </div>
      <!-- Status Cards -->

      <!-- Customer List -->

      <!-- Sales Chart -->

      <!-- Sales Orders -->
      <!-- Profile info -->

      <!-- Reminders -->
    </div>
  </div>
</template>

<script setup>
useHead({
  script: [
    {
      type: 'text/javascript',
      src: './node_modules/lodash/lodash.min.js',
      tagPosition: 'bodyClose',
    },
    {
      type: 'text/javascript',
      src: './node_modules/apexcharts/dist/apexcharts.min.js',
      tagPosition: 'bodyClose',
    },
    {
      type: 'text/javascript',
      src: 'https://preline.co/assets/js/hs-apexcharts-helpers.js',
      tagPosition: 'bodyClose',
    },
  ]
});
</script>