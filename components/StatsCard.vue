<template>
  <div class="flex flex-col bg-white shadow-sm rounded-xl">
    <div class="p-4 md:p-6 h-full flex gap-4">
      <div class="flex-shrink-0 flex justify-center h-3/4 p-2 aspect-square items-center rounded-lg" :class="bgColor">
        <Icon :name="icon" class="flex-shrink-0 size-full" :class="iconColor" />
      </div>

      <div class="flex flex-col gap-2">
        <div class="flex items-center gap-x-2">
          <p class="text-xs uppercase tracking-wide text-gray-500">
            {{ title }}
          </p>
          <!-- <div class="hs-tooltip">
            <div class="hs-tooltip-toggle">
              <svg class="flex-shrink-0 size-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <path d="M12 17h.01" />
              </svg>
              <span
                class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm"
                role=" tooltip">
                The number of daily users
              </span>
            </div>
          </div> -->
        </div>
        <div class="mt-1 flex items-center gap-x-2">
          <h3 class="text-xl sm:text-2xl font-medium text-gray-800 ">
            {{ value }}
          </h3>
        </div>
        <div v-if="percentage"
          class="w-fit inline-flex items-center gap-x-1 py-0.5 px-2 rounded-full bg-green-100 text-green-900 ">
          <svg class="inline-block size-4 self-center" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round">
            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
            <polyline points="16 7 22 7 22 13" />
          </svg>
          <span class="inline-block text-xs font-medium">
            {{ percentage }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps(["icon", "bgColor", "iconColor", "title", "value", "percentage"]);

</script>

<style></style>