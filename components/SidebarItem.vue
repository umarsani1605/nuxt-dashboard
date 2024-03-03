<template>
  <div class="flex flex-col">
    <template v-for="(l, i) in links" :key="i">
      <NuxtLink v-if="!l.items" :to="l.link" v-slot="{ isActive }" activeClass="bg-[#068ef1] rounded-md"
        class="inline-flex items-center gap-4 p-3 px-4 text-left text-muted-foreground text-[15px]">
        <Icon v-if="l.icon" :name="l.icon"
          :class="[isActive ? 'h-5 w-5 text-white' : 'h-5 w-5 text-muted-foreground']" />
        <p :class="[isActive ? 'text-white' : 'text-black']">
          {{ l.title }}
        </p>
      </NuxtLink>

      <HDisclosure v-slot="{ open }" v-else>
        <HDisclosureButton class="inline-flex items-center justify-between p-3 px-4 text-left text-[15px]">
          <div class="flex items-center gap-4">
            <Icon v-if="l.icon" :name="l.icon" class="h-5 w-5 text-muted-foreground" />
            <p class="truncate">
              {{ l.title }}
            </p>
          </div>
          <div>
            <Icon name="heroicons:chevron-down" :class="[open && 'rotate-180']"
              class="h-4 w-4 text-muted-foreground transition" />
          </div>
        </HDisclosureButton>
        <TransitionExpand>
          <HDisclosurePanel class="mx-6 flex flex-col border-l px-3">
            <SidebarItem :links="l.items" />
          </HDisclosurePanel>
        </TransitionExpand>
      </HDisclosure>
    </template>
  </div>
</template>

<script setup>
import { ref } from "vue";

// const isActive = ref(true)

const props = defineProps(["links"]);
</script>

<style>
/* .router-link-exact-active {
  color: white !important;
} */
</style>