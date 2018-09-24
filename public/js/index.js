Vue.prototype.$lineChart = "created";

var app = new Vue({
  el: "#app",
  data: {
    titleLine: "Line Chart",
    titleMap: "Map Chart",
    optExpert: [
      { value: "DOKTER SPESIALIS" },
      { value: "DOKTER UMUM" },
      { value: "DOKTER GIGI DAN SPESIALIS" },
      { value: "KEPERAWATAN" },
      { value: "KEBIDANAN" },
      { value: "FARMASI" },
      { value: "NAKES LAINYA" },
      { value: "TENAGA PENUNJANG" }
    ],
    optYear: [
      { value: "2014" },
      { value: "2015" },
      { value: "2016" },
      { value: "2017" }
    ],
    valueLineChart: "DOKTER SPESIALIS",
    valueMapChart: "2014",
    dataLineChart: null,
    dataMapChart: null
  },
  methods: {
    checkLineChart: function(selected) {
      switch (selected) {
        case "DOKTER SPESIALIS":
          this.dataLineChart = [
            {
              data: [892, 1322, 1316, 1367],
              label: "ACEH",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
            },
            {
              data: [2759, 3697, 3477, 3870],
              label: "SUMATERA UTARA",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [894, 970, 944, 1178],
              label: "SUMATERA BARAT",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [912, 1131, 1332, 1375],
              label: "RIAU",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [445, 430, 398, 569],
              label: "JAMBI",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [1549, 1414, 1553, 1548],
              label: "SUMATERA SELATAN",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [114, 166, 191, 217],
              label: "BENGKULU",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [442, 727, 656, 839],
              label: "LAMPUNG",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [108, 176, 187, 240],
              label: "KEPULAUAN BANGKA BELITUNG",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [252, 360, 391, 452],
              label: "KEPULAUAN RIAU",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [6218, 5726, 6117, 7084],
              label: "DKI JAKARTA",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [5067, 7231, 7881, 8569],
              label: "JAWA BARAT",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [5073, 5724, 5533, 6035],
              label: "JAWA TENGAH",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [1391, 1513, 1107, 1710],
              label: "DI YOGYAKARTA",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [5144, 6146, 5882, 6706],
              label: "JAWA TIMUR",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [1535, 2485, 2679, 2635],
              label: "BANTEN",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [1190, 1749, 1075, 1499],
              label: "BALI",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [359, 386, 359, 579],
              label: "NUSA TENGGARA BARAT",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [289, 354, 354, 406],
              label: "NUSA TENGGARA TIMUR",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [315, 456, 504, 580],
              label: "KALIMANTAN BARAT",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [121, 227, 207, 254],
              label: "KALIMANTAN TENGAH",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [349, 728, 924, 915],
              label: "KALIMANTAN SELATAN",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [407, 544, 694, 885],
              label: "KALIMANTAN TIMUR",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [43, 57, 82, 91],
              label: "KALIMANTAN UTARA",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [545, 644, 764, 780],
              label: "SULAWESI UTARA",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [281, 393, 472, 409],
              label: "SULAWESI TENGAH",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [1372, 2082, 2160, 2191],
              label: "SULAWESI SELATAN",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [129, 184, 235, 274],
              label: "SULAWESI TENGGARA",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [128, 144, 155, 176],
              label: "GORONTALO",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [27, 76, 70, 105],
              label: "SULAWESI BARAT",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [119, 134, 150, 159],
              label: "MALUKU",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [79, 83, 111, 144],
              label: "MALUKU UTARA",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [107, 114, 116, 145],
              label: "PAPUA BARAT",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [211, 276, 291, 325],
              label: "PAPUA",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            }
          ];

          this.initLineChart();
          break;
        case "DOKTER UMUM":
          this.dataLineChart = [
            {
              data: [1438, 1550, 1602, 1715],
              label: "ACEH",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [3137, 3324, 2871, 2940],
              label: "SUMATERA UTARA",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [1724, 1015, 1037, 1063],
              label: "SUMATERA BARAT",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [1185, 1076, 1340, 1387],
              label: "RIAU",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [726, 639, 681, 744],
              label: "JAMBI",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [1098, 1199, 1208, 1299],
              label: "SUMATERA SELATAN",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [438, 377, 422, 447],
              label: "BENGKULU",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [1014, 1074, 857, 1220],
              label: "LAMPUNG",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [336, 335, 403, 396],
              label: "KEPULAUAN BANGKA BELITUNG",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [530, 528, 407, 464],
              label: "KEPULAUAN RIAU",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [2629, 2645, 3933, 4283],
              label: "DKI JAKARTA",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [4428, 5116, 5166, 5539],
              label: "JAWA BARAT",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [5511, 4682, 4450, 4692],
              label: "JAWA TENGAH",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [1396, 1039, 847, 1239],
              label: "DI YOGYAKARTA",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [4495, 4457, 4539, 4822],
              label: "JAWA TIMUR",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [1321, 1397, 1491, 1654],
              label: "BANTEN",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [1042, 1154, 1144, 1314],
              label: "BALI",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [631, 553, 679, 708],
              label: "NUSA TENGGARA BARAT",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [687, 676, 647, 706],
              label: "NUSA TENGGARA TIMUR",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [619, 676, 664, 780],
              label: "KALIMANTAN BARAT",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [467, 515, 503, 463],
              label: "KALIMANTAN TENGAH",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [771, 706, 718, 910],
              label: "KALIMANTAN SELATAN",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [799, 858, 1004, 1056],
              label: "KALIMANTAN TIMUR",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [226, 203, 165, 270],
              label: "KALIMANTAN UTARA",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [1010, 945, 916, 879],
              label: "SULAWESI UTARA",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [531, 520, 476, 490],
              label: "SULAWESI TENGAH",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [1428, 1441, 1516, 1517],
              label: "SULAWESI SELATAN",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [445, 384, 395, 398],
              label: "SULAWESI TENGGARA",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [274, 249, 266, 324],
              label: "GORONTALO",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [233, 162, 165, 161],
              label: "SULAWESI BARAT",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [393, 318, 206, 240],
              label: "MALUKU",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [271, 241, 258, 263],
              label: "MALUKU UTARA",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [294, 217, 186, 204],
              label: "PAPUA BARAT",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [738, 755, 736, 800],
              label: "PAPUA",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            }
          ];

          this.renderLineChart();
          break;
        case "DOKTER GIGI DAN SPESIALIS":
          this.dataLineChart = [
            {
              data: [280, 298, 321, 377],
              label: "ACEH",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [914, 935, 852, 870],
              label: "SUMATERA UTARA",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [410, 415, 405, 411],
              label: "SUMATERA BARAT",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [391, 367, 99, 426],
              label: "RIAU",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [189, 178, 206, 202],
              label: "JAMBI",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [221, 267, 272, 291],
              label: "SUMATERA SELATAN",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [1111, 94, 116, 123],
              label: "BENGKULU",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [274, 297, 221, 233],
              label: "LAMPUNG",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [62, 89, 88, 91],
              label: "KEPULAUAN BANGKA BELITUNG",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [143, 145, 107, 136],
              label: "KEPULAUAN RIAU",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [1482, 1065, 1392, 1775],
              label: "DKI JAKARTA",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [1766, 1925, 2092, 2200],
              label: "JAWA BARAT",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [1376, 1376, 1264, 1303],
              label: "JAWA TENGAH",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [455, 371, 414, 560],
              label: "DI YOGYAKARTA",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [1683, 1602, 1640, 1738],
              label: "JAWA TIMUR",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [572, 557, 590, 668],
              label: "BANTEN",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [303, 323, 418, 440],
              label: "BALI",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [162, 132, 159, 149],
              label: "NUSA TENGGARA BARAT",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [161, 154, 170, 183],
              label: "NUSA TENGGARA TIMUR",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [134, 153, 165, 177],
              label: "KALIMANTAN BARAT",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [101, 103, 109, 111],
              label: "KALIMANTAN TENGAH",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [182, 175, 204, 272],
              label: "KALIMANTAN SELATAN",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [282, 271, 317, 346],
              label: "KALIMANTAN TIMUR",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [68, 54, 54, 63],
              label: "KALIMANTAN UTARA",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [74, 89, 99, 105],
              label: "SULAWESI UTARA",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [107, 117, 132, 134],
              label: "SULAWESI TENGAH",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [604, 634, 726, 754],
              label: "SULAWESI SELATAN",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [119, 118, 155, 182],
              label: "SULAWESI TENGGARA",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [39, 48, 50, 55],
              label: "GORONTALO",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [100, 72, 81, 82],
              label: "SULAWESI BARAT",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [123, 97, 35, 57],
              label: "MALUKU",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [49, 55, 43, 47],
              label: "MALUKU UTARA",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [51, 41, 38, 40],
              label: "PAPUA BARAT",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [104, 123, 101, 106],
              label: "PAPUA",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            }
          ];

          this.renderLineChart();
          break;
        case "KEPERAWATAN":
          this.dataLineChart = [
            {
              data: [10890, 8421, 10466, 12369],
              label: "ACEH",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [17247, 10009, 14824, 15582],
              label: "SUMATERA UTARA",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [7513, 5852, 7617, 7807],
              label: "SUMATERA BARAT",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [6986, 5562, 8107, 8246],
              label: "RIAU",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [5313, 3694, 6452, 6980],
              label: "JAMBI",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [8809, 9068, 11437, 12589],
              label: "SUMATERA SELATAN",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [3258, 2693, 3600, 4211],
              label: "BENGKULU",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [6805, 4120, 4057, 8252],
              label: "LAMPUNG",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [2555, 2397, 2896, 3024],
              label: "KEPULAUAN BANGKA BELITUNG",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [3932, 2401, 2786, 3286],
              label: "KEPULAUAN RIAU",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [19335, 11729, 22982, 25834],
              label: "DKI JAKARTA",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [30405, 22282, 33527, 37855],
              label: "JAWA BARAT",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [31632, 29154, 35773, 39225],
              label: "JAWA TENGAH",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [6739, 4516, 6353, 8159],
              label: "DI YOGYAKARTA",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [32815, 27047, 33377, 39614],
              label: "JAWA TIMUR",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [7882, 8072, 8973, 9140],
              label: "BANTEN",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [6458, 4178, 6764, 8455],
              label: "BALI",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [5041, 3882, 5391, 6199],
              label: "NUSA TENGGARA BARAT",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [6422, 4896, 6583, 6831],
              label: "NUSA TENGGARA TIMUR",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [9467, 4276, 5433, 7690],
              label: "KALIMANTAN BARAT",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [4602, 3885, 4279, 5577],
              label: "KALIMANTAN TENGAH",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [6205, 3992, 4553, 7352],
              label: "KALIMANTAN SELATAN",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [5635, 6412, 7254, 8049],
              label: "KALIMANTAN TIMUR",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [1498, 1355, 1184, 1943],
              label: "KALIMANTAN UTARA",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [5635, 3432, 4802, 6034],
              label: "SULAWESI UTARA",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [6804, 4033, 4530, 6887],
              label: "SULAWESI TENGAH",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [12195, 11174, 12448, 13033],
              label: "SULAWESI SELATAN",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [3801, 2724, 4325, 5563],
              label: "SULAWESI TENGGARA",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [1598, 1086, 1693, 1953],
              label: "GORONTALO",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [1616, 1769, 1675, 2033],
              label: "SULAWESI BARAT",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [5075, 2645, 3475, 4120],
              label: "MALUKU",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [3123, 1808, 2049, 2181],
              label: "MALUKU UTARA",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [2710, 1449, 1478, 2034],
              label: "PAPUA BARAT",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [5507, 3897, 5733, 7184],
              label: "PAPUA",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            }
          ];

          this.renderLineChart();
          break;
        case "KEBIDANAN":
          this.dataLineChart = [
            {
              data: [9545, 6217, 8788, 11723],
              label: "ACEH",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [13585, 8758, 15338, 16241],
              label: "SUMATERA UTARA",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [4626, 4303, 5641, 5848],
              label: "SUMATERA BARAT",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [4476, 4327, 6250, 6323],
              label: "RIAU",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [3253, 2468, 4523, 4344],
              label: "JAMBI",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [4808, 7021, 8735, 10712],
              label: "SUMATERA SELATAN",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [2550, 2485, 3091, 3466],
              label: "BENGKULU",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [3761, 2477, 3449, 7695],
              label: "LAMPUNG",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [897, 925, 1145, 1171],
              label: "KEPULAUAN BANGKA BELITUNG",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [1170, 985, 1169, 1549],
              label: "KEPULAUAN RIAU",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [2869, 2159, 4458, 5052],
              label: "DKI JAKARTA",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [12956, 9705, 17629, 20519],
              label: "JAWA BARAT",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [16776, 12573, 17670, 20201],
              label: "JAWA TENGAH",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [1693, 977, 1508, 1964],
              label: "DI YOGYAKARTA",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [15543, 14499, 18126, 20509],
              label: "JAWA TIMUR",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [3497, 4949, 5404, 5170],
              label: "BANTEN",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [2228, 1823, 3597, 4466],
              label: "BALI",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [2201, 1707, 2966, 3741],
              label: "NUSA TENGGARA BARAT",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [3139, 1900, 3991, 4475],
              label: "NUSA TENGGARA TIMUR",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [2308, 1974, 2702, 3778],
              label: "KALIMANTAN BARAT",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [1846, 1424, 1865, 2910],
              label: "KALIMANTAN TENGAH",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [2751, 1873, 2087, 5226],
              label: "KALIMANTAN SELATAN",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [1843, 2225, 2878, 3294],
              label: "KALIMANTAN TIMUR",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [501, 471, 364, 934],
              label: "KALIMANTAN UTARA",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [1467, 789, 1184, 1518],
              label: "SULAWESI UTARA",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [2524, 1419, 2628, 4388],
              label: "SULAWESI TENGAH",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [5224, 4585, 5775, 6746],
              label: "SULAWESI SELATAN",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [1769, 1096, 2986, 4391],
              label: "SULAWESI TENGGARA",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [680, 725, 1038, 1226],
              label: "GORONTALO",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [895, 1218, 1335, 1691],
              label: "SULAWESI BARAT",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [1323, 812, 1167, 1505],
              label: "MALUKU",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [1086, 1279, 1708, 1757],
              label: "MALUKU UTARA",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [895, 456, 552, 830],
              label: "PAPUA BARAT",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [1921, 1132, 1794, 2747],
              label: "PAPUA",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            }
          ];

          this.renderLineChart();
          break;
        case "FARMASI":
          this.dataLineChart = [
            {
              data: [1968, 1165, 1220, 1315],
              label: "ACEH",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [2582, 1478, 1604, 1659],
              label: "SUMATERA UTARA",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [1518, 924, 1095, 1173],
              label: "SUMATERA BARAT",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [1280, 949, 1082, 1129],
              label: "RIAU",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [1020, 516, 703, 813],
              label: "JAMBI",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [1272, 1059, 1329, 1493],
              label: "SUMATERA SELATAN",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [928, 284, 407, 486],
              label: "BENGKULU",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [748, 488, 445, 759],
              label: "LAMPUNG",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [311, 266, 327, 361],
              label: "KEPULAUAN BANGKA BELITUNG",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [332, 231, 324, 350],
              label: "KEPULAUAN RIAU",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [2761, 2629, 4617, 5243],
              label: "DKI JAKARTA",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [3922, 3243, 4789, 5305],
              label: "JAWA BARAT",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [6537, 3608, 4558, 5606],
              label: "JAWA TENGAH",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [2295, 689, 1078, 1777],
              label: "DI YOGYAKARTA",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [6227, 3839, 4609, 5368],
              label: "JAWA TIMUR",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [1108, 1219, 1303, 1384],
              label: "BANTEN",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [759, 406, 738, 902],
              label: "BALI",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [575, 392, 524, 623],
              label: "NUSA TENGGARA BARAT",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [1202, 615, 725, 775],
              label: "NUSA TENGGARA TIMUR",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [739, 542, 693, 959],
              label: "KALIMANTAN BARAT",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [542, 377, 373, 520],
              label: "KALIMANTAN TENGAH",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [987, 505, 622, 975],
              label: "KALIMANTAN SELATAN",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [800, 716, 892, 1068],
              label: "KALIMANTAN TIMUR",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [201, 120, 97, 243],
              label: "KALIMANTAN UTARA",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [824, 428, 474, 546],
              label: "SULAWESI UTARA",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [798, 556, 566, 811],
              label: "SULAWESI TENGAH",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [1675, 1378, 1483, 1591],
              label: "SULAWESI SELATAN",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [558, 389, 579, 735],
              label: "SULAWESI TENGGARA",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [360, 225, 217, 248],
              label: "GORONTALO",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [254, 170, 183, 227],
              label: "SULAWESI BARAT",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [203, 184, 212, 318],
              label: "MALUKU",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [258, 199, 271, 297],
              label: "MALUKU UTARA",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [279, 149, 162, 185],
              label: "PAPUA BARAT",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [513, 391, 528, 599],
              label: "PAPUA",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            }
          ];

          this.renderLineChart();
          break;
        case "NAKES LAINYA":
          this.dataLineChart = [
            {
              data: [7613, 12995, 10430, 6564],
              label: "ACEH",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [7378, 14890, 5756, 5858],
              label: "SUMATERA UTARA",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [4499, 4344, 3727, 3936],
              label: "SUMATERA BARAT",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [3159, 2777, 2930, 3043],
              label: "RIAU",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [3220, 3775, 2197, 2532],
              label: "JAMBI",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [6074, 6209, 4537, 5293],
              label: "SUMATERA SELATAN",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [2664, 1953, 1939, 2127],
              label: "BENGKULU",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [3103, 6098, 2858, 3327],
              label: "LAMPUNG",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [1076, 1783, 1114, 1128],
              label: "KEPULAUAN BANGKA BELITUNG",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [1002, 2302, 856, 979],
              label: "KEPULAUAN RIAU",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [4851, 4846, 8189, 8755],
              label: "DKI JAKARTA",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [9140, 16650, 11382, 13005],
              label: "JAWA BARAT",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [13400, 19702, 12895, 14067],
              label: "JAWA TENGAH",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [3067, 3139, 2658, 3701],
              label: "DI YOGYAKARTA",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [11192, 11815, 11375, 12859],
              label: "JAWA TIMUR",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [2666, 3936, 3871, 3321],
              label: "BANTEN",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [2772, 3800, 2462, 2966],
              label: "BALI",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [2873, 2098, 2543, 2833],
              label: "NUSA TENGGARA BARAT",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [3648, 5636, 4217, 3760],
              label: "NUSA TENGGARA TIMUR",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [2520, 6610, 4009, 3168],
              label: "KALIMANTAN BARAT",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [2025, 3569, 2708, 1950],
              label: "KALIMANTAN TENGAH",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [3058, 4862, 4564, 3568],
              label: "KALIMANTAN SELATAN",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [1891, 1876, 1989, 2296],
              label: "KALIMANTAN TIMUR",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [683, 627, 606, 734],
              label: "KALIMANTAN UTARA",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [1543, 3155, 1951, 1775],
              label: "SULAWESI UTARA",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [2603, 6090, 3326, 2643],
              label: "SULAWESI TENGAH",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [7466, 7162, 6111, 6254],
              label: "SULAWESI SELATAN",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [2704, 4032, 3163, 3118],
              label: "SULAWESI TENGGARA",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [1276, 1084, 1044, 1227],
              label: "GORONTALO",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [1259, 765, 679, 826],
              label: "SULAWESI BARAT",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [1147, 2775, 1164, 1550],
              label: "MALUKU",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [1146, 1592, 1147, 1260],
              label: "MALUKU UTARA",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [726, 2065, 1248, 1037],
              label: "PAPUA BARAT",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [1905, 4568, 3486, 3558],
              label: "PAPUA",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            }
          ];

          this.renderLineChart();
          break;
        case "TENAGA PENUNJANG":
          this.dataLineChart = [
            {
              data: [4996, 5626, 6559, 7978],
              label: "ACEH",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [8069, 9599, 11607, 11015],
              label: "SUMATERA UTARA",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [3837, 5172, 6286, 6891],
              label: "SUMATERA BARAT",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [3962, 5161, 7075, 7576],
              label: "RIAU",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [3169, 2950, 4228, 4752],
              label: "JAMBI",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [5687, 8052, 9185, 10065],
              label: "SUMATERA SELATAN",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [1728, 1927, 2522, 3102],
              label: "BENGKULU",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [3353, 4406, 4510, 7485],
              label: "LAMPUNG",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [1458, 2368, 2941, 3153],
              label: "KEPULAUAN BANGKA BELITUNG",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [1620, 2115, 2605, 3360],
              label: "KEPULAUAN RIAU",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [16078, 21570, 25217, 29069],
              label: "DKI JAKARTA",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [23609, 28659, 35208, 37372],
              label: "JAWA BARAT",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [30778, 32492, 31729, 36311],
              label: "JAWA TENGAH",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [7046, 6457, 5898, 8137],
              label: "DI YOGYAKARTA",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [31095, 34569, 36755, 43165],
              label: "JAWA TIMUR",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [4715, 8257, 9355, 9970],
              label: "BANTEN",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [6954, 7301, 7852, 9728],
              label: "BALI",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [3827, 3651, 5011, 5398],
              label: "NUSA TENGGARA BARAT",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [4512, 4524, 5443, 5571],
              label: "NUSA TENGGARA TIMUR",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [2855, 3354, 4881, 6283],
              label: "KALIMANTAN BARAT",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [2093, 2138, 2319, 3756],
              label: "KALIMANTAN TENGAH",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [2407, 3206, 3335, 5892],
              label: "KALIMANTAN SELATAN",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [3939, 5747, 7024, 8169],
              label: "KALIMANTAN TIMUR",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [584, 488, 596, 1529],
              label: "KALIMANTAN UTARA",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [2595, 2690, 3257, 3559],
              label: "SULAWESI UTARA",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [1655, 1748, 3020, 4296],
              label: "SULAWESI TENGAH",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [4519, 6245, 7506, 7731],
              label: "SULAWESI SELATAN",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [1099, 1312, 2398, 3324],
              label: "SULAWESI TENGGARA",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [1299, 1733, 1730, 2274],
              label: "GORONTALO",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [414, 984, 1014, 1102],
              label: "SULAWESI BARAT",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [1017, 1233, 1397, 1754],
              label: "MALUKU",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [535, 745, 1451, 1472],
              label: "MALUKU UTARA",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [777, 784, 913, 1116],
              label: "PAPUA BARAT",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            },
            {
              data: [1594, 2551, 3876, 4701],
              label: "PAPUA",
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
              fill: false
            }
          ];

          this.renderLineChart();
          break;
        default:
          break;
      }
    },
    checkMapChart(selected) {
      switch (selected) {
        case "2014":
          this.dataMapChart = [
            {
              title: "ACEH",
              id: "ID-AC",
              color: "#ef5350",
              customData: "Cluster 1",
              groupId: "1"
            },
            {
              title: "SUMATERA UTARA",
              id: "ID-SU",
              color: "#ef5350",
              customData: "Cluster 1",
              groupId: "1"
            },
            {
              title: "SUMATERA BARAT",
              id: "ID-SB",
              color: "#ef5350",
              customData: "Cluster 1",
              groupId: "1"
            },
            {
              title: "RIAU",
              id: "ID-RI",
              color: "#ef5350",
              customData: "Cluster 1",
              groupId: "1"
            },
            {
              title: "JAMBI",
              id: "ID-JA",
              color: "#ef5350",
              customData: "Cluster 1",
              groupId: "1"
            },
            {
              title: "SUMATERA SELATAN",
              id: "ID-SS",
              color: "#ef5350",
              customData: "Cluster 1",
              groupId: "1"
            },
            {
              title: "BENGKULU",
              id: "ID-BE",
              color: "#cddc39",
              customData: "Cluster 2",
              groupId: "2"
            },
            {
              title: "LAMPUNG",
              id: "ID-LA",
              color: "#ef5350",
              customData: "Cluster 1",
              groupId: "1"
            },
            {
              title: "KEPULAUAN BANGKA BELITUNG",
              id: "ID-BB",
              color: "#cddc39",
              customData: "Cluster 2",
              groupId: "2"
            },
            {
              title: "KEPULAUAN RIAU",
              id: "ID-KR",
              color: "#cddc39",
              customData: "Cluster 2",
              groupId: "2"
            },
            {
              title: "DKI JAKARTA",
              id: "ID-JK",
              color: "#ef5350",
              customData: "Cluster 1",
              groupId: "1"
            },
            {
              title: "JAWA BARAT",
              id: "ID-JB",
              color: "#66bb6a",
              customData: "Cluster 3",
              groupId: "3"
            },
            {
              title: "JAWA TENGAH",
              id: "ID-JT",
              color: "#66bb6a",
              customData: "Cluster 3",
              groupId: "3"
            },
            {
              title: "DI YOGYAKARTA",
              id: "ID-YO",
              color: "#ef5350",
              customData: "Cluster 1",
              groupId: "1"
            },
            {
              title: "JAWA TIMUR",
              id: "ID-JI",
              color: "#66bb6a",
              customData: "Cluster 3",
              groupId: "3"
            },
            {
              title: "BANTEN",
              id: "ID-BT",
              color: "#ef5350",
              customData: "Cluster 1",
              groupId: "1"
            },
            {
              title: "BALI",
              id: "ID-BA",
              color: "#ef5350",
              customData: "Cluster 1",
              groupId: "1"
            },
            {
              title: "NUSA TENGGARA BARAT",
              id: "ID-NB",
              color: "#ef5350",
              customData: "Cluster 1",
              groupId: "1"
            },
            {
              title: "NUSA TENGGARA TIMUR",
              id: "ID-NT",
              color: "#ef5350",
              customData: "Cluster 1",
              groupId: "1"
            },
            {
              title: "KALIMANTAN BARAT",
              id: "ID-KB",
              color: "#ef5350",
              customData: "Cluster 1",
              groupId: "1"
            },
            {
              title: "KALIMANTAN TENGAH",
              id: "ID-KT",
              color: "#cddc39",
              customData: "Cluster 2",
              groupId: "2"
            },
            {
              title: "KALIMANTAN SELATAN",
              id: "ID-KS",
              color: "#ef5350",
              customData: "Cluster 1",
              groupId: "1"
            },
            {
              title: "KALIMANTAN TIMUR",
              id: "ID-KI",
              color: "#ef5350",
              customData: "Cluster 1",
              groupId: "1"
            },
            {
              title: "KALIMANTAN UTARA",
              id: "ID-KU",
              color: "#cddc39",
              customData: "Cluster 2",
              groupId: "2"
            },
            {
              title: "SULAWESI UTARA",
              id: "ID-SA",
              color: "#ef5350",
              customData: "Cluster 1",
              groupId: "1"
            },
            {
              title: "SULAWESI TENGAH",
              id: "ID-ST",
              color: "#ef5350",
              customData: "Cluster 1",
              groupId: "1"
            },
            {
              title: "SULAWESI SELATAN",
              id: "ID-SN",
              color: "#ef5350",
              customData: "Cluster 1",
              groupId: "1"
            },
            {
              title: "SULAWESI TENGGARA",
              id: "ID-SG",
              color: "#cddc39",
              customData: "Cluster 2",
              groupId: "2"
            },
            {
              title: "GORONTALO",
              id: "ID-GO",
              color: "#cddc39",
              customData: "Cluster 2",
              groupId: "2"
            },
            {
              title: "SULAWESI BARAT",
              id: "ID-SR",
              color: "#cddc39",
              customData: "Cluster 2",
              groupId: "2"
            },
            {
              title: "MALUKU",
              id: "ID-MA",
              color: "#cddc39",
              customData: "Cluster 2",
              groupId: "2"
            },
            {
              title: "MALUKU UTARA",
              id: "ID-MU",
              color: "#cddc39",
              customData: "Cluster 2",
              groupId: "2"
            },
            {
              title: "PAPUA BARAT",
              id: "ID-PB",
              color: "#cddc39",
              customData: "Cluster 2",
              groupId: "2"
            },
            {
              title: "PAPUA",
              id: "ID-PA",
              color: "#cddc39",
              customData: "Cluster 2",
              groupId: "2"
            }
          ];

          this.renderMapChart();
          break;
        case "2015":
          this.dataMapChart = [
            {
              title: "ACEH",
              id: "ID-AC",
              color: "#ef5350",
              customData: "Cluster 1",
              groupId: "1"
            },
            {
              title: "SUMATERA UTARA",
              id: "ID-SU",
              color: "#ef5350",
              customData: "Cluster 1",
              groupId: "1"
            },
            {
              title: "SUMATERA BARAT",
              id: "ID-SB",
              color: "#cddc39",
              customData: "Cluster 2",
              groupId: "2"
            },
            {
              title: "RIAU",
              id: "ID-RI",
              color: "#cddc39",
              customData: "Cluster 2",
              groupId: "2"
            },
            {
              title: "JAMBI",
              id: "ID-JA",
              color: "#cddc39",
              customData: "Cluster 2",
              groupId: "2"
            },
            {
              title: "SUMATERA SELATAN",
              id: "ID-SS",
              color: "#ef5350",
              customData: "Cluster 1",
              groupId: "1"
            },
            {
              title: "BENGKULU",
              id: "ID-BE",
              color: "#cddc39",
              customData: "Cluster 2",
              groupId: "2"
            },
            {
              title: "LAMPUNG",
              id: "ID-LA",
              color: "#cddc39",
              customData: "Cluster 2",
              groupId: "2"
            },
            {
              title: "KEPULAUAN BANGKA BELITUNG",
              id: "ID-BB",
              color: "#cddc39",
              customData: "Cluster 2",
              groupId: "2"
            },
            {
              title: "KEPULAUAN RIAU",
              id: "ID-KR",
              color: "#cddc39",
              customData: "Cluster 2",
              groupId: "2"
            },
            {
              title: "DKI JAKARTA",
              id: "ID-JK",
              color: "#ef5350",
              customData: "Cluster 1",
              groupId: "1"
            },
            {
              title: "JAWA BARAT",
              id: "ID-JB",
              color: "#66bb6a",
              customData: "Cluster 3",
              groupId: "3"
            },
            {
              title: "JAWA TENGAH",
              id: "ID-JT",
              color: "#66bb6a",
              customData: "Cluster 3",
              groupId: "3"
            },
            {
              title: "DI YOGYAKARTA",
              id: "ID-YO",
              color: "#cddc39",
              customData: "Cluster 2",
              groupId: "2"
            },
            {
              title: "JAWA TIMUR",
              id: "ID-JI",
              color: "#66bb6a",
              customData: "Cluster 3",
              groupId: "3"
            },
            {
              title: "BANTEN",
              id: "ID-BT",
              color: "#ef5350",
              customData: "Cluster 1",
              groupId: "1"
            },
            {
              title: "BALI",
              id: "ID-BA",
              color: "#cddc39",
              customData: "Cluster 2",
              groupId: "2"
            },
            {
              title: "NUSA TENGGARA BARAT",
              id: "ID-NB",
              color: "#cddc39",
              customData: "Cluster 2",
              groupId: "2"
            },
            {
              title: "NUSA TENGGARA TIMUR",
              id: "ID-NT",
              color: "#cddc39",
              customData: "Cluster 2",
              groupId: "2"
            },
            {
              title: "KALIMANTAN BARAT",
              id: "ID-KB",
              color: "#cddc39",
              customData: "Cluster 2",
              groupId: "2"
            },
            {
              title: "KALIMANTAN TENGAH",
              id: "ID-KT",
              color: "#cddc39",
              customData: "Cluster 2",
              groupId: "2"
            },
            {
              title: "KALIMANTAN SELATAN",
              id: "ID-KS",
              color: "#cddc39",
              customData: "Cluster 2",
              groupId: "2"
            },
            {
              title: "KALIMANTAN TIMUR",
              id: "ID-KI",
              color: "#cddc39",
              customData: "Cluster 2",
              groupId: "2"
            },
            {
              title: "KALIMANTAN UTARA",
              id: "ID-KU",
              color: "#cddc39",
              customData: "Cluster 2",
              groupId: "2"
            },
            {
              title: "SULAWESI UTARA",
              id: "ID-SA",
              color: "#cddc39",
              customData: "Cluster 2",
              groupId: "2"
            },
            {
              title: "SULAWESI TENGAH",
              id: "ID-ST",
              color: "#cddc39",
              customData: "Cluster 2",
              groupId: "2"
            },
            {
              title: "SULAWESI SELATAN",
              id: "ID-SN",
              color: "#ef5350",
              customData: "Cluster 1",
              groupId: "1"
            },
            {
              title: "SULAWESI TENGGARA",
              id: "ID-SG",
              color: "#cddc39",
              customData: "Cluster 2",
              groupId: "2"
            },
            {
              title: "GORONTALO",
              id: "ID-GO",
              color: "#cddc39",
              customData: "Cluster 2",
              groupId: "2"
            },
            {
              title: "SULAWESI BARAT",
              id: "ID-SR",
              color: "#cddc39",
              customData: "Cluster 2",
              groupId: "2"
            },
            {
              title: "MALUKU",
              id: "ID-MA",
              color: "#cddc39",
              customData: "Cluster 2",
              groupId: "2"
            },
            {
              title: "MALUKU UTARA",
              id: "ID-MU",
              color: "#cddc39",
              customData: "Cluster 2",
              groupId: "2"
            },
            {
              title: "PAPUA BARAT",
              id: "ID-PB",
              color: "#cddc39",
              customData: "Cluster 2",
              groupId: "2"
            },
            {
              title: "PAPUA",
              id: "ID-PA",
              color: "#cddc39",
              customData: "Cluster 2",
              groupId: "2"
            }
          ];

          this.renderMapChart();
          break;
        case "2016":
          this.dataMapChart = [
            {
              title: "ACEH",
              id: "ID-AC",
              color: "#ef5350",
              customData: "Cluster 1",
              groupId: "1"
            },
            {
              title: "SUMATERA UTARA",
              id: "ID-SU",
              color: "#ef5350",
              customData: "Cluster 1",
              groupId: "1"
            },
            {
              title: "SUMATERA BARAT",
              id: "ID-SB",
              color: "#ef5350",
              customData: "Cluster 1",
              groupId: "1"
            },
            {
              title: "RIAU",
              id: "ID-RI",
              color: "#ef5350",
              customData: "Cluster 1",
              groupId: "1"
            },
            {
              title: "JAMBI",
              id: "ID-JA",
              color: "#ef5350",
              customData: "Cluster 1",
              groupId: "1"
            },
            {
              title: "SUMATERA SELATAN",
              id: "ID-SS",
              color: "#ef5350",
              customData: "Cluster 1",
              groupId: "1"
            },
            {
              title: "BENGKULU",
              id: "ID-BE",
              color: "#cddc39",
              customData: "Cluster 2",
              groupId: "2"
            },
            {
              title: "LAMPUNG",
              id: "ID-LA",
              color: "#ef5350",
              customData: "Cluster 1",
              groupId: "1"
            },
            {
              title: "KEPULAUAN BANGKA BELITUNG",
              id: "ID-BB",
              color: "#cddc39",
              customData: "Cluster 2",
              groupId: "2"
            },
            {
              title: "KEPULAUAN RIAU",
              id: "ID-KR",
              color: "#cddc39",
              customData: "Cluster 2",
              groupId: "2"
            },
            {
              title: "DKI JAKARTA",
              id: "ID-JK",
              color: "#66bb6a",
              customData: "Cluster 3",
              groupId: "3"
            },
            {
              title: "JAWA BARAT",
              id: "ID-JB",
              color: "#66bb6a",
              customData: "Cluster 3",
              groupId: "3"
            },
            {
              title: "JAWA TENGAH",
              id: "ID-JT",
              color: "#66bb6a",
              customData: "Cluster 3",
              groupId: "3"
            },
            {
              title: "DI YOGYAKARTA",
              id: "ID-YO",
              color: "#ef5350",
              customData: "Cluster 1",
              groupId: "1"
            },
            {
              title: "JAWA TIMUR",
              id: "ID-JI",
              color: "#66bb6a",
              customData: "Cluster 3",
              groupId: "3"
            },
            {
              title: "BANTEN",
              id: "ID-BT",
              color: "#ef5350",
              customData: "Cluster 1",
              groupId: "1"
            },
            {
              title: "BALI",
              id: "ID-BA",
              color: "#ef5350",
              customData: "Cluster 1",
              groupId: "1"
            },
            {
              title: "NUSA TENGGARA BARAT",
              id: "ID-NB",
              color: "#ef5350",
              customData: "Cluster 1",
              groupId: "1"
            },
            {
              title: "NUSA TENGGARA TIMUR",
              id: "ID-NT",
              color: "#ef5350",
              customData: "Cluster 1",
              groupId: "1"
            },
            {
              title: "KALIMANTAN BARAT",
              id: "ID-KB",
              color: "#ef5350",
              customData: "Cluster 1",
              groupId: "1"
            },
            {
              title: "KALIMANTAN TENGAH",
              id: "ID-KT",
              color: "#cddc39",
              customData: "Cluster 2",
              groupId: "2"
            },
            {
              title: "KALIMANTAN SELATAN",
              id: "ID-KS",
              color: "#ef5350",
              customData: "Cluster 1",
              groupId: "1"
            },
            {
              title: "KALIMANTAN TIMUR",
              id: "ID-KI",
              color: "#ef5350",
              customData: "Cluster 1",
              groupId: "1"
            },
            {
              title: "KALIMANTAN UTARA",
              id: "ID-KU",
              color: "#cddc39",
              customData: "Cluster 2",
              groupId: "2"
            },
            {
              title: "SULAWESI UTARA",
              id: "ID-SA",
              color: "#cddc39",
              customData: "Cluster 2",
              groupId: "2"
            },
            {
              title: "SULAWESI TENGAH",
              id: "ID-ST",
              color: "#ef5350",
              customData: "Cluster 1",
              groupId: "1"
            },
            {
              title: "SULAWESI SELATAN",
              id: "ID-SN",
              color: "#ef5350",
              customData: "Cluster 1",
              groupId: "1"
            },
            {
              title: "SULAWESI TENGGARA",
              id: "ID-SG",
              color: "#cddc39",
              customData: "Cluster 2",
              groupId: "2"
            },
            {
              title: "GORONTALO",
              id: "ID-GO",
              color: "#cddc39",
              customData: "Cluster 2",
              groupId: "2"
            },
            {
              title: "SULAWESI BARAT",
              id: "ID-SR",
              color: "#cddc39",
              customData: "Cluster 2",
              groupId: "2"
            },
            {
              title: "MALUKU",
              id: "ID-MA",
              color: "#cddc39",
              customData: "Cluster 2",
              groupId: "2"
            },
            {
              title: "MALUKU UTARA",
              id: "ID-MU",
              color: "#cddc39",
              customData: "Cluster 2",
              groupId: "2"
            },
            {
              title: "PAPUA BARAT",
              id: "ID-PB",
              color: "#cddc39",
              customData: "Cluster 2",
              groupId: "2"
            },
            {
              title: "PAPUA",
              id: "ID-PA",
              color: "#ef5350",
              customData: "Cluster 1",
              groupId: "1"
            }
          ];

          this.renderMapChart();
          break;
        case "2017":
          this.dataMapChart = [
            {
              title: "ACEH",
              id: "ID-AC",
              color: "#ef5350",
              customData: "Cluster 1",
              groupId: "1"
            },
            {
              title: "SUMATERA UTARA",
              id: "ID-SU",
              color: "#ef5350",
              customData: "Cluster 1",
              groupId: "1"
            },
            {
              title: "SUMATERA BARAT",
              id: "ID-SB",
              color: "#ef5350",
              customData: "Cluster 1",
              groupId: "1"
            },
            {
              title: "RIAU",
              id: "ID-RI",
              color: "#ef5350",
              customData: "Cluster 1",
              groupId: "1"
            },
            {
              title: "JAMBI",
              id: "ID-JA",
              color: "#ef5350",
              customData: "Cluster 1",
              groupId: "1"
            },
            {
              title: "SUMATERA SELATAN",
              id: "ID-SS",
              color: "#ef5350",
              customData: "Cluster 1",
              groupId: "1"
            },
            {
              title: "BENGKULU",
              id: "ID-BE",
              color: "#cddc39",
              customData: "Cluster 2",
              groupId: "2"
            },
            {
              title: "LAMPUNG",
              id: "ID-LA",
              color: "#ef5350",
              customData: "Cluster 1",
              groupId: "1"
            },
            {
              title: "KEPULAUAN BANGKA BELITUNG",
              id: "ID-BB",
              color: "#cddc39",
              customData: "Cluster 2",
              groupId: "2"
            },
            {
              title: "KEPULAUAN RIAU",
              id: "ID-KR",
              color: "#cddc39",
              customData: "Cluster 2",
              groupId: "2"
            },
            {
              title: "DKI JAKARTA",
              id: "ID-JK",
              color: "#66bb6a",
              customData: "Cluster 3",
              groupId: "3"
            },
            {
              title: "JAWA BARAT",
              id: "ID-JB",
              color: "#66bb6a",
              customData: "Cluster 3",
              groupId: "3"
            },
            {
              title: "JAWA TENGAH",
              id: "ID-JT",
              color: "#66bb6a",
              customData: "Cluster 3",
              groupId: "3"
            },
            {
              title: "DI YOGYAKARTA",
              id: "ID-YO",
              color: "#ef5350",
              customData: "Cluster 1",
              groupId: "1"
            },
            {
              title: "JAWA TIMUR",
              id: "ID-JI",
              color: "#66bb6a",
              customData: "Cluster 3",
              groupId: "3"
            },
            {
              title: "BANTEN",
              id: "ID-BT",
              color: "#ef5350",
              customData: "Cluster 1",
              groupId: "1"
            },
            {
              title: "BALI",
              id: "ID-BA",
              color: "#ef5350",
              customData: "Cluster 1",
              groupId: "1"
            },
            {
              title: "NUSA TENGGARA BARAT",
              id: "ID-NB",
              color: "#ef5350",
              customData: "Cluster 1",
              groupId: "1"
            },
            {
              title: "NUSA TENGGARA TIMUR",
              id: "ID-NT",
              color: "#ef5350",
              customData: "Cluster 1",
              groupId: "1"
            },
            {
              title: "KALIMANTAN BARAT",
              id: "ID-KB",
              color: "#ef5350",
              customData: "Cluster 1",
              groupId: "1"
            },
            {
              title: "KALIMANTAN TENGAH",
              id: "ID-KT",
              color: "#ef5350",
              customData: "Cluster 1",
              groupId: "1"
            },
            {
              title: "KALIMANTAN SELATAN",
              id: "ID-KS",
              color: "#ef5350",
              customData: "Cluster 1",
              groupId: "1"
            },
            {
              title: "KALIMANTAN TIMUR",
              id: "ID-KI",
              color: "#ef5350",
              customData: "Cluster 1",
              groupId: "1"
            },
            {
              title: "KALIMANTAN UTARA",
              id: "ID-KU",
              color: "#cddc39",
              customData: "Cluster 2",
              groupId: "2"
            },
            {
              title: "SULAWESI UTARA",
              id: "ID-SA",
              color: "#cddc39",
              customData: "Cluster 2",
              groupId: "2"
            },
            {
              title: "SULAWESI TENGAH",
              id: "ID-ST",
              color: "#ef5350",
              customData: "Cluster 1",
              groupId: "1"
            },
            {
              title: "SULAWESI SELATAN",
              id: "ID-SN",
              color: "#ef5350",
              customData: "Cluster 1",
              groupId: "1"
            },
            {
              title: "SULAWESI TENGGARA",
              id: "ID-SG",
              color: "#ef5350",
              customData: "Cluster 1",
              groupId: "1"
            },
            {
              title: "GORONTALO",
              id: "ID-GO",
              color: "#cddc39",
              customData: "Cluster 2",
              groupId: "2"
            },
            {
              title: "SULAWESI BARAT",
              id: "ID-SR",
              color: "#cddc39",
              customData: "Cluster 2",
              groupId: "2"
            },
            {
              title: "MALUKU",
              id: "ID-MA",
              color: "#cddc39",
              customData: "Cluster 2",
              groupId: "2"
            },
            {
              title: "MALUKU UTARA",
              id: "ID-MU",
              color: "#cddc39",
              customData: "Cluster 2",
              groupId: "2"
            },
            {
              title: "PAPUA BARAT",
              id: "ID-PB",
              color: "#cddc39",
              customData: "Cluster 2",
              groupId: "2"
            },
            {
              title: "PAPUA",
              id: "ID-PA",
              color: "#ef5350",
              customData: "Cluster 1",
              groupId: "1"
            }
          ];

          this.renderMapChart();
          break;

        default:
          break;
      }
    },
    renderLineChart() {
      document.getElementById("line-chart").remove();
      document
        .getElementById("canvas-line-chart")
        .insertAdjacentHTML(
          "afterbegin",
          '<canvas id="line-chart" width="700" height="500"></canvas>'
        );

      this.initLineChart();
    },
    initLineChart() {
      new Chart(document.getElementById("line-chart"), {
        // Line Chart (chart.js)
        type: "bar",
        data: {
          labels: [2014, 2015, 2016, 2017],
          datasets: this.dataLineChart
        },
        options: {
          title: {
            display: false
          },
          legend: {
            display: false,
            position: 'left'
          }
        }
      });
    },
    renderMapChart() {
      //   Map Chart (amcharts js)

      var map = AmCharts.makeChart("chartdiv", {
        type: "map",
        theme: "light",
        dataProvider: {
          map: "indonesiaLow",
          areas: this.dataMapChart
        },
        balloon: {
          borderThickness: 0,
          borderAlpha: 0,
          fillAlpha: 0,
          horizontalPadding: 0,
          verticalPadding: 0,
          shadowAlpha: 0
        },

        areasSettings: {
          rollOverOutlineColor: "#FFFFFF",
          rollOverColor: "#29b6f6",
          alpha: 0.8,
          unlistedAreasAlpha: 0.1,
          balloonText: "[[title]] : [[customData]]"
        },

        legend: {
          width: "100%",
          marginRight: 27,
          marginLeft: 27,
          equalWidths: false,
          backgroundAlpha: 0.5,
          backgroundColor: "#FFFFFF",
          backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
          borderAlpha: 1,
          top: 410,
          left: 0,
          horizontalGap: 10,
          data: [
            {
              title: "Cluster 1",
              color: "#ef5350"
            },
            {
              title: "Cluster 2",
              color: "#cddc39"
            },
            {
              title: "Cluster 3",
              color: "#66bb6a"
            }
          ]
        },
        export: {
          enabled: true
        }
      });
    }
  },
  mounted() {
    this.checkLineChart(this.valueLineChart);
    this.checkMapChart(this.valueMapChart);
  },
  watch: {
    valueLineChart: function(val) {
      this.valueLineChart = val;
    },
    valueMapChart: function(val) {
      this.valueMapChart = val;
    },
    dataLineChart: function(val) {
      this.dataLineChart = val;
    },
    dataMapChart: function(val) {
      this.dataMapChart = val;
    }
  }
});
