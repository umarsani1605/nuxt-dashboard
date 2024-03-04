<template>
  <header class="sticky top-0 z-20 border-b bg-background/80 backdrop-blur">
    <!-- flex container -->
    <div class="flex px-5 h-20 items-center justify-between">
      <!-- left side of navbar -->
      <div>
        <div class="relative">
          <input type="text"
            class="py-3 px-4 ps-11 block w-96 bg-white border-transparent rounded-lg text-sm focus:ring-2 focus:outline-none"
            placeholder="Cari" />
          <div
            class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
            <Icon name="heroicons:magnifying-glass" class="flex-shrink-0 size-4 text-gray-800" />
          </div>
        </div>
      </div>

      <!-- right side of navbar -->
      <div class="flex items-center gap-5">
        <button @click="toggleTheme"
          class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border bg-background">
          <Icon name="heroicons:sun" class="h-5 w-5" />
        </button>
        <!-- notification dropdown -->
        <HPopover v-slot="{ open }" class="relative">
          <HPopoverButton :class="open ? 'bg-slate-200' : 'bg-white'"
            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border bg-background">
            <Icon name="heroicons:bell" class="h-6 w-6" />
          </HPopoverButton>

          <TransitionScale :scale="0.8" origin="top">
            <HPopoverPanel
              class="bg-white absolute z-10 mt-3 w-80 max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
              <div class="overflow-hidden p-3 rounded-lg shadow-lg ring-1 ring-black/5">
                <div class="bg-gray-50">
                  <a href="##"
                    class="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-200/50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50">
                    <span class="flex items-center">
                      <span class="text-sm font-medium text-gray-900">
                        Notification
                      </span>
                    </span>
                    <span class="block text-sm text-gray-500">
                      Start integrating products and tools
                    </span>
                  </a>
                </div>
                <div class="bg-gray-50">
                  <a href="##"
                    class="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-200/50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50">
                    <span class="flex items-center">
                      <span class="text-sm font-medium text-gray-900">
                        Notification
                      </span>
                    </span>
                    <span class="block text-sm text-gray-500">
                      Start integrating products and tools
                    </span>
                  </a>
                </div>
              </div>
            </HPopoverPanel>
          </TransitionScale>
        </HPopover>
        <!-- user dropdown -->
        <HMenu as="div" v-slot="{ open }" class="relative">
          <HMenuButton :class="open ? 'bg-slate-200' : 'bg-white'"
            class="flex flex-row justify-center items-center rounded-lg p-1">
            <p class="text-md px-3">Budi Doremi</p>
            <div
              class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border bg-background overflow-hidden">
              <img src="https://randomuser.me/api/portraits/men/51.jpg" alt="Logged in user" class="w-full h-full" />
            </div>
          </HMenuButton>
          <TransitionScale :scale="0.8" origin="top right">
            <HMenuItems
              class="bg-white absolute right-0 z-10 mt-3 w-48 rounded-md border bg-background focus:outline-none focus-visible:right-2 focus-visible:ring-ring">
              <div class="border-b px-3 py-1.5 text-sm">
                <p class="font-semibold">Hello John</p>
                <a href="mailto:johndoe@test.com" class="leading-none text-muted-foreground">johndoe@test.com</a>
              </div>
              <div class="p-1">
                <template v-for="(p, i) in profileMenuOptions" :key="i">
                  <HMenuItem v-if="!p.divider" v-slot="{ active }">
                    <button @click="p.click?.()" :class="[active && 'bg-muted']"
                      class="inline-flex w-full items-center rounded-md p-2 text-sm font-medium">
                      {{ p.title }}
                    </button>
                  </HMenuItem>
                  <hr v-if="p.divider" class="my-1" />
                </template>
              </div>
            </HMenuItems>
          </TransitionScale>
        </HMenu>
      </div>
    </div>
  </header>
</template>

<script setup>
const mode = useColorMode();
const toggleTheme = () => {
  mode.value = mode.value == "light" ? "dark" : "light";
};

const profileMenuOptions = [
  { title: "Profile" },
  { title: "Billing" },
  { title: "Settings" },
  { title: "Team members" },
  { title: "Sales" },
  { divider: true },
  { title: "Logout", click: () => alert("Logout") },
];
</script>
