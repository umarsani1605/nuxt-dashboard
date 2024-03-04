<template>
  <aside class="sticky h-dvh bg-white">
    <!-- flex container -->
    <div
      class="flex h-full w-full flex-col gap-5 overflow-y-auto px-4 py-8 scrollbar-thin scrollbar-thumb-input scrollbar-thumb-rounded-md">
      <!-- logo and app name -->
      <div class="flex justify-center items-center w-full gap-3">
        <NuxtLink to="/">
          <img src="/images/app-logo/logo-dark.png" alt="Analytics Logo" class="h-8">
        </NuxtLink>
      </div>
      <SidebarItem :links="menu" class="mt-5"></SidebarItem>

      <!-- <div class="mt-auto">
        <SidebarItem :links="bottomMenu" />
      </div> -->
    </div>
  </aside>
</template>

<script setup>

const menu = [
  {
    title: "Early Settlement",
    link: "/early-settlement",
    icon: "heroicons:fire",
  },
  {
    title: "Dashboard",
    link: "/",
    icon: "heroicons:home",
  },
  {
    title: "Merchant",
    link: "/merchant",
    icon: "heroicons:building-storefront",
  },
  {
    title: "Transaksi",
    icon: "heroicons:clipboard-document-list",
    items: [
      {
        title: "Daftar Transaksi",
        link: "/transaction",
      },
      {
        title: "Diskon",
        link: "/transaction/discount",
      },
      {
        title: "Open Payment",
        link: "/transaction/open-payment",
      },
      {
        title: "Kliring",
        link: "/transaction/clearance",
      },
      {
        title: "Download Rekapan",
        link: "/transaction/download-recap",
      },
    ],
  },
  {
    title: "Disbursement",
    icon: "heroicons:shopping-cart",
    items: [
      {
        title: "Riwayat Disbursement",
        link: "/disbursement",
      },
      {
        title: "Kirim Dana (Upload CSV)",
        link: "/disbursement/send-fund",
      },
      {
        title: "API dan Integrasi",
        link: "/disbursement/api-docs",
      },
    ],
  },
  {
    title: "Deposit",
    icon: "heroicons:wallet",
    items: [
      {
        title: "Riwayat Deposit",
        link: "/deposit/history",
      },
      {
        title: "Deposit",
        link: "/deposit",
      },
    ],
  },
  {
    title: "Toko",
    icon: "heroicons:shopping-cart",
    items: [
      {
        title: "Daftar Transaksi",
        link: "/store/transaction",
      },
      {
        title: "Pengaturan Toko",
        link: "/store/setting",
      },
      { title: "Kelola Produk" },
      {
        title: "Metode Pembayaran",
        link: "/store/payment-method",
      },
    ],
  },
  {
    title: "Penarikan",
    icon: "heroicons:banknotes",
    items: [
      {
        title: "Daftar Penarikan",
        link: "/settlement",
      },
      {
        title: "Download Rekapan",
        link: "/settlement/download-recap",
      },
    ],
  },
  {
    title: "Riwayat",
    icon: "heroicons:clock",
    items: [
      {
        title: "Mutasi Saldo",
        link: "/history/balance",
      },
      {
        title: "Callback IPN",
        link: "/history/callback-ipn",
      },
    ],
  },
  {
    title: "Referral",
    icon: "heroicons:gift",
    items: [
      {
        title: "Data Referral",
        link: "/referral",
      },
      {
        title: "Komisi Referral",
        link: "/referral/commission",
      },
      {
        title: "Tarik Komisi Referral",
        link: "/referral/withdraw-commission",
      },
      {
        title: "Mutasi Saldo Referral",
        link: "/referral/balance-mutation",
      },
    ],
  },
  {
    title: "WhatsApp",
    icon: "heroicons:chat-bubble-oval-left-ellipsis",
    items: [
      {
        title: "Device",
        link: "/whatsapp/device",
      },
      {
        title: "Riwayat Pesan",
        link: "/whatsapp/history",
      },
      {
        title: "Invoice",
        link: "/whatsapp/invoice",
      },
    ],
  },
  {
    title: "Pengaturan",
    link: "/setting",
    icon: "heroicons:cog-6-tooth",
  },
  {
    title: "API dan Integrasi",
    link: "/api-docs",
    icon: "heroicons:code-bracket-square",
  },
  {
    title: "Logout",
    link: "/logout",
    icon: "heroicons:arrow-right-start-on-rectangle",
  },
];
</script>

<style></style>
