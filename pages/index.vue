<template>
  <!-- Card Section -->
  <div class="">
    <!-- Grid -->
    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      <template v-for="(item, index) in DashboardStats" :key="index">
        <StatsCard :icon="item.icon" :bg-color="item.bgColor" :icon-color="item.iconColor" :title="item.title"
          :value="item.value" :percentage="item.percentage" />
      </template>
    </div>
    <!-- End Grid -->
  </div>
  <!-- End Card Section -->
  <!-- <div id="hs-single-area-chart"></div> -->

</template>

<script setup>

const config = useRuntimeConfig();

onMounted(async () => {
  const { data, error } = await useAsyncData('posts', () => $fetch(`${config.public.apiBase}/member-api/dashboard?merchant=all`))

  console.log("Test");
  console.log(data);
  console.log(error);
})

const DashboardStats = [
  {
    icon: "heroicons:banknotes",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
    title: "Saldo Tersedia",
    value: "Rp 92.347.204",
    percentage: "",
  },
  {
    icon: "heroicons:banknotes",
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
    title: "Saldo Dalam Kliring",
    value: "Rp 110.680.732",
    percentage: "",
  },
  {
    icon: "heroicons:clipboard-document-list",
    bgColor: "bg-yellow-50",
    iconColor: "text-yellow-600",
    title: "Transaksi Bulan ini",
    value: "Rp 113.934.980",
    percentage: "10%",
  },
  {
    icon: "heroicons:clipboard-document-list",
    bgColor: "bg-red-50",
    iconColor: "text-red-600",
    title: "Transaksi Hari ini",
    value: "Rp 5.892.169",
    percentage: "-86%",
  },
]

// onMounted(() => {
//   (function () {
//     buildChart('#hs-single-area-chart', (mode) => ({
//       chart: {
//         height: 300,
//         type: 'area',
//         toolbar: {
//           show: false
//         },
//         zoom: {
//           enabled: false
//         }
//       },
//       series: [
//         {
//           name: 'Visitors',
//           data: [180, 51, 60, 38, 88, 50, 40, 52, 88, 80, 60, 70]
//         }
//       ],
//       legend: {
//         show: false
//       },
//       dataLabels: {
//         enabled: false
//       },
//       stroke: {
//         curve: 'straight',
//         width: 2
//       },
//       grid: {
//         strokeDashArray: 2
//       },
//       fill: {
//         type: 'gradient',
//         gradient: {
//           type: 'vertical',
//           shadeIntensity: 1,
//           opacityFrom: 0.1,
//           opacityTo: 0.8
//         }
//       },
//       xaxis: {
//         type: 'category',
//         tickPlacement: 'on',
//         categories: [
//           '25 January 2023',
//           '26 January 2023',
//           '27 January 2023',
//           '28 January 2023',
//           '29 January 2023',
//           '30 January 2023',
//           '31 January 2023',
//           '1 February 2023',
//           '2 February 2023',
//           '3 February 2023',
//           '4 February 2023',
//           '5 February 2023'
//         ],
//         axisBorder: {
//           show: false
//         },
//         axisTicks: {
//           show: false
//         },
//         crosshairs: {
//           stroke: {
//             dashArray: 0
//           },
//           dropShadow: {
//             show: false
//           }
//         },
//         tooltip: {
//           enabled: false
//         },
//         labels: {
//           style: {
//             colors: '#9ca3af',
//             fontSize: '13px',
//             fontFamily: 'Inter, ui-sans-serif',
//             fontWeight: 400
//           },
//           formatter: (title) => {
//             let t = title;

//             if (t) {
//               const newT = t.split(' ');
//               t = `${newT[0]} ${newT[1].slice(0, 3)}`;
//             }

//             return t;
//           }
//         }
//       },
//       yaxis: {
//         labels: {
//           align: 'left',
//           minWidth: 0,
//           maxWidth: 140,
//           style: {
//             colors: '#9ca3af',
//             fontSize: '13px',
//             fontFamily: 'Inter, ui-sans-serif',
//             fontWeight: 400
//           },
//           formatter: (value) => value >= 1000 ? `${value / 1000}k` : value
//         }
//       },
//       tooltip: {
//         x: {
//           format: 'MMMM yyyy'
//         },
//         y: {
//           formatter: (value) => `${value >= 1000 ? `${value / 1000}k` : value}`
//         },
//         custom: function (props) {
//           const { categories } = props.ctx.opts.xaxis;
//           const { dataPointIndex } = props;
//           const title = categories[dataPointIndex].split(' ');
//           const newTitle = `${title[0]} ${title[1]}`;

//           return buildTooltip(props, {
//             title: newTitle,
//             mode,
//             valuePrefix: '',
//             hasTextLabel: true,
//             markerExtClasses: '!rounded-sm',
//             wrapperExtClasses: 'min-w-28'
//           });
//         }
//       },
//       responsive: [{
//         breakpoint: 568,
//         options: {
//           chart: {
//             height: 300
//           },
//           labels: {
//             style: {
//               colors: '#9ca3af',
//               fontSize: '11px',
//               fontFamily: 'Inter, ui-sans-serif',
//               fontWeight: 400
//             },
//             offsetX: -2,
//             formatter: (title) => title.slice(0, 3)
//           },
//           yaxis: {
//             labels: {
//               align: 'left',
//               minWidth: 0,
//               maxWidth: 140,
//               style: {
//                 colors: '#9ca3af',
//                 fontSize: '11px',
//                 fontFamily: 'Inter, ui-sans-serif',
//                 fontWeight: 400
//               },
//               formatter: (value) => value >= 1000 ? `${value / 1000}k` : value
//             }
//           },
//         },
//       }]
//     }), {
//       colors: ['#2563eb', '#9333ea'],
//       fill: {
//         gradient: {
//           stops: [0, 90, 100]
//         }
//       },
//       grid: {
//         borderColor: '#e5e7eb'
//       }
//     }, {
//       colors: ['#3b82f6', '#a855f7'],
//       fill: {
//         gradient: {
//           stops: [100, 90, 0]
//         }
//       },
//       grid: {
//         borderColor: '#374151'
//       }
//     });
//   })();
// });

</script>

<style></style>