<template>
  <aside class="sticky top-[65px] ">
    <div class="flex h-full w-full flex-col overflow-y-auto rounded-md border bg-card pb-5">

    </div>
  </aside>
</template>

<script setup>

const bottomMenu = [
  {
    title: "Settings",
    icon: "heroicons:cog-8-tooth",
  },
  {
    title: "Help",
    icon: "heroicons:question-mark-circle",
  },
  {
    title: "Logout",
    icon: "heroicons:arrow-left-on-rectangle",
  },
];
const menu = [
  {
    title: "Dashboard",
    icon: "heroicons:home",
  },
  {
    title: "Customers",
    icon: "heroicons:user-group",
    items: [
      { title: "List" },
      { title: "Create" },
      { title: "Edit" },
      { title: "Delete" },
      { title: "Details" },
    ],
  },
  {
    title: "Orders",
    icon: "heroicons:shopping-cart",
    items: [
      { title: "List" },
      { title: "Create" },
      { title: "Edit" },
      { title: "Delete" },
      { title: "Details" },
    ],
  },
  {
    title: "Products",
    icon: "heroicons:cube",
    items: [
      { title: "List" },
      { title: "Create" },
      { title: "Edit" },
      { title: "Delete" },
      { title: "Details" },
    ],
  },
  {
    title: "Staff",
    icon: "heroicons:user",
    items: [
      { title: "List" },
      { title: "Create" },
      { title: "Edit" },
      { title: "Delete" },
      { title: "Details" },
    ],
  },
  {
    title: "Analytics",
    icon: "heroicons:chart-pie",
    items: [{ title: "Overview" }, { title: "Statistics" }, { title: "Trends" }],
  },
];

</script>

<style></style>