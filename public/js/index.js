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
              borderColor: "#3e95cd",
              fill: false
            },
            {
              data: [2759, 3697, 3477, 3870],
              label: "SUMATERA UTARA",
              borderColor: "#8e5ea2",
              fill: false
            },
            {
              data: [894, 970, 944, 1178],
              label: "SUMATERA BARAT",
              borderColor: "#3cba9f",
              fill: false
            },
            {
              data: [912, 1131, 1332, 1375],
              label: "RIAU",
              borderColor: "#e8c3b9",
              fill: false
            },
            {
              data: [445, 430, 398, 569],
              label: "JAMBI",
              borderColor: "#c45850",
              fill: false
            },
            {
              data: [1549, 1414, 1553, 1548],
              label: "SUMATERA SELATAN",
              borderColor: "#a05c5c",
              fill: false
            },
            {
              data: [114, 166, 191, 217],
              label: "BENGKULU",
              borderColor: "#ffebee",
              fill: false
            },
            {
              data: [442, 727, 656, 839],
              label: "LAMPUNG",
              borderColor: "#fce4ec",
              fill: false
            },
            {
              data: [108, 176, 187, 240],
              label: "KEPULAUAN BANGKA BELITUNG",
              borderColor: "#f3e5f5",
              fill: false
            },
            {
              data: [252, 360, 391, 452],
              label: "KEPULAUAN RIAU",
              borderColor: "#ffcdd2",
              fill: false
            },
            {
              data: [6218, 5726, 6117, 7084],
              label: "DKI JAKARTA",
              borderColor: "#f8bbd0",
              fill: false
            },
            {
              data: [5067, 7231, 7881, 8569],
              label: "JAWA BARAT",
              borderColor: "#e1bee7",
              fill: false
            },
            {
              data: [5073, 5724, 5533, 6035],
              label: "JAWA TENGAH",
              borderColor: "#ef9a9a",
              fill: false
            },
            {
              data: [1391, 1513, 1107, 1710],
              label: "DI YOGYAKARTA",
              borderColor: "#f48fb1",
              fill: false
            },
            {
              data: [5144, 6146, 5882, 6706],
              label: "JAWA TIMUR",
              borderColor: "#ce93d8",
              fill: false
            },
            {
              data: [1535, 2485, 2679, 2635],
              label: "BANTEN",
              borderColor: "#e57373",
              fill: false
            },
            {
              data: [1190, 1749, 1075, 1499],
              label: "BALI",
              borderColor: "#f06292",
              fill: false
            },
            {
              data: [359, 386, 359, 579],
              label: "NUSA TENGGARA BARAT",
              borderColor: "#ba68c8",
              fill: false
            },
            {
              data: [289, 354, 354, 406],
              label: "NUSA TENGGARA TIMUR",
              borderColor: "#ef5350",
              fill: false
            },
            {
              data: [315, 456, 504, 580],
              label: "KALIMANTAN BARAT",
              borderColor: "#ec407a",
              fill: false
            },
            {
              data: [121, 227, 207, 254],
              label: "KALIMANTAN TENGAH",
              borderColor: "#ab47bc",
              fill: false
            },
            {
              data: [349, 728, 924, 915],
              label: "KALIMANTAN SELATAN",
              borderColor: "#ef5350",
              fill: false
            },
            {
              data: [407, 544, 694, 885],
              label: "KALIMANTAN TIMUR",
              borderColor: "#e91e63",
              fill: false
            },
            {
              data: [43, 57, 82, 91],
              label: "KALIMANTAN UTARA",
              borderColor: "#9c27b0",
              fill: false
            },
            {
              data: [545, 644, 764, 780],
              label: "SULAWESI UTARA",
              borderColor: "#e53935",
              fill: false
            },
            {
              data: [281, 393, 472, 409],
              label: "SULAWESI TENGAH",
              borderColor: "#d81b60",
              fill: false
            },
            {
              data: [1372, 2082, 2160, 2191],
              label: "SULAWESI SELATAN",
              borderColor: "#8e24aa",
              fill: false
            },
            {
              data: [129, 184, 235, 274],
              label: "SULAWESI TENGGARA",
              borderColor: "#d32f2f",
              fill: false
            },
            {
              data: [128, 144, 155, 176],
              label: "GORONTALO",
              borderColor: "#c2185b",
              fill: false
            },
            {
              data: [27, 76, 70, 105],
              label: "SULAWESI BARAT",
              borderColor: "#7b1fa2",
              fill: false
            },
            {
              data: [119, 134, 150, 159],
              label: "MALUKU",
              borderColor: "#c62828",
              fill: false
            },
            {
              data: [79, 83, 111, 144],
              label: "MALUKU UTARA",
              borderColor: "#ad1457",
              fill: false
            },
            {
              data: [107, 114, 116, 145],
              label: "PAPUA BARAT",
              borderColor: "#6a1b9a",
              fill: false
            },
            {
              data: [211, 276, 291, 325],
              label: "PAPUA",
              borderColor: "#d1c4e9",
              fill: false
            }
          ];

          this.renderLineChart();
          break;
        case "DOKTER UMUM":
          this.dataLineChart = [
            {
              data: [1438, 1550, 1602, 1715],
              label: "ACEH",
              borderColor: "#3e95cd",
              fill: false
            },
            {
              data: [3137, 3324, 2871, 2940],
              label: "SUMATERA UTARA",
              borderColor: "#8e5ea2",
              fill: false
            },
            {
              data: [1724, 1015, 1037, 1063],
              label: "SUMATERA BARAT",
              borderColor: "#3cba9f",
              fill: false
            },
            {
              data: [1185, 1076, 1340, 1387],
              label: "RIAU",
              borderColor: "#e8c3b9",
              fill: false
            },
            {
              data: [726, 639, 681, 744],
              label: "JAMBI",
              borderColor: "#c45850",
              fill: false
            },
            {
              data: [1098, 1199, 1208, 1299],
              label: "SUMATERA SELATAN",
              borderColor: "#a05c5c",
              fill: false
            },
            {
              data: [438, 377, 422, 447],
              label: "BENGKULU",
              borderColor: "#ffebee",
              fill: false
            },
            {
              data: [1014, 1074, 857, 1220],
              label: "LAMPUNG",
              borderColor: "#fce4ec",
              fill: false
            },
            {
              data: [336, 335, 403, 396],
              label: "KEPULAUAN BANGKA BELITUNG",
              borderColor: "#f3e5f5",
              fill: false
            },
            {
              data: [530, 528, 407, 464],
              label: "KEPULAUAN RIAU",
              borderColor: "#ffcdd2",
              fill: false
            },
            {
              data: [2629, 2645, 3933, 4283],
              label: "DKI JAKARTA",
              borderColor: "#f8bbd0",
              fill: false
            },
            {
              data: [4428, 5116, 5166, 5539],
              label: "JAWA BARAT",
              borderColor: "#e1bee7",
              fill: false
            },
            {
              data: [5511, 4682, 4450, 4692],
              label: "JAWA TENGAH",
              borderColor: "#ef9a9a",
              fill: false
            },
            {
              data: [1396, 1039, 847, 1239],
              label: "DI YOGYAKARTA",
              borderColor: "#f48fb1",
              fill: false
            },
            {
              data: [4495, 4457, 4539, 4822],
              label: "JAWA TIMUR",
              borderColor: "#ce93d8",
              fill: false
            },
            {
              data: [1321, 1397, 1491, 1654],
              label: "BANTEN",
              borderColor: "#e57373",
              fill: false
            },
            {
              data: [1042, 1154, 1144, 1314],
              label: "BALI",
              borderColor: "#f06292",
              fill: false
            },
            {
              data: [631, 553, 679, 708],
              label: "NUSA TENGGARA BARAT",
              borderColor: "#ba68c8",
              fill: false
            },
            {
              data: [687, 676, 647, 706],
              label: "NUSA TENGGARA TIMUR",
              borderColor: "#ef5350",
              fill: false
            },
            {
              data: [619, 676, 664, 780],
              label: "KALIMANTAN BARAT",
              borderColor: "#ec407a",
              fill: false
            },
            {
              data: [467, 515, 503, 463],
              label: "KALIMANTAN TENGAH",
              borderColor: "#ab47bc",
              fill: false
            },
            {
              data: [771, 706, 718, 910],
              label: "KALIMANTAN SELATAN",
              borderColor: "#ef5350",
              fill: false
            },
            {
              data: [799, 858, 1004, 1056],
              label: "KALIMANTAN TIMUR",
              borderColor: "#e91e63",
              fill: false
            },
            {
              data: [226, 203, 165, 270],
              label: "KALIMANTAN UTARA",
              borderColor: "#9c27b0",
              fill: false
            },
            {
              data: [1010, 945, 916, 879],
              label: "SULAWESI UTARA",
              borderColor: "#e53935",
              fill: false
            },
            {
              data: [531, 520, 476, 490],
              label: "SULAWESI TENGAH",
              borderColor: "#d81b60",
              fill: false
            },
            {
              data: [1428, 1441, 1516, 1517],
              label: "SULAWESI SELATAN",
              borderColor: "#8e24aa",
              fill: false
            },
            {
              data: [445, 384, 395, 398],
              label: "SULAWESI TENGGARA",
              borderColor: "#d32f2f",
              fill: false
            },
            {
              data: [274, 249, 266, 324],
              label: "GORONTALO",
              borderColor: "#c2185b",
              fill: false
            },
            {
              data: [233, 162, 165, 161],
              label: "SULAWESI BARAT",
              borderColor: "#7b1fa2",
              fill: false
            },
            {
              data: [393, 318, 206, 240],
              label: "MALUKU",
              borderColor: "#c62828",
              fill: false
            },
            {
              data: [271, 241, 258, 263],
              label: "MALUKU UTARA",
              borderColor: "#ad1457",
              fill: false
            },
            {
              data: [294, 217, 186, 204],
              label: "PAPUA BARAT",
              borderColor: "#6a1b9a",
              fill: false
            },
            {
              data: [738, 755, 736, 800],
              label: "PAPUA",
              borderColor: "#d1c4e9",
              fill: false
            }
          ];

          this.renderLineChart();
          break;
        case "DOKTER GIGI DAN SPESIALIS":
          break;
        case "KEPERAWATAN":
          break;
        case "KEBIDANAN":
          break;
        case "FARMASI":
          break;
        case "NAKES LAINYA":
          break;
        case "TENAGA PENUNJANG":
          this.dataLineChart = [
            {
              data: [4996, 5626, 6559, 7978],
              label: "ACEH",
              borderColor: "#3e95cd",
              fill: false
            },
            {
              data: [8069, 9599, 11607, 11015],
              label: "SUMATERA UTARA",
              borderColor: "#8e5ea2",
              fill: false
            },
            {
              data: [3837, 5172, 6286, 6891],
              label: "SUMATERA BARAT",
              borderColor: "#3cba9f",
              fill: false
            },
            {
              data: [3962, 5161, 7075, 7576],
              label: "RIAU",
              borderColor: "#e8c3b9",
              fill: false
            },
            {
              data: [3169, 2950, 4228, 4752],
              label: "JAMBI",
              borderColor: "#c45850",
              fill: false
            },
            {
              data: [5687, 8052, 9185, 10065],
              label: "SUMATERA SELATAN",
              borderColor: "#a05c5c",
              fill: false
            },
            {
              data: [1728, 1927, 2522, 3102],
              label: "BENGKULU",
              borderColor: "#ffebee",
              fill: false
            },
            {
              data: [3353, 4406, 4510, 7485],
              label: "LAMPUNG",
              borderColor: "#fce4ec",
              fill: false
            },
            {
              data: [1458, 2368, 2941, 3153],
              label: "KEPULAUAN BANGKA BELITUNG",
              borderColor: "#f3e5f5",
              fill: false
            },
            {
              data: [1620, 2115, 2605, 3360],
              label: "KEPULAUAN RIAU",
              borderColor: "#ffcdd2",
              fill: false
            },
            {
              data: [16078, 21570, 25217, 29069],
              label: "DKI JAKARTA",
              borderColor: "#f8bbd0",
              fill: false
            },
            {
              data: [23609, 28659, 35208, 37372],
              label: "JAWA BARAT",
              borderColor: "#e1bee7",
              fill: false
            },
            {
              data: [30778, 32492, 31729, 36311],
              label: "JAWA TENGAH",
              borderColor: "#ef9a9a",
              fill: false
            },
            {
              data: [7046, 6457, 5898, 8137],
              label: "DI YOGYAKARTA",
              borderColor: "#f48fb1",
              fill: false
            },
            {
              data: [31095, 34569, 36755, 43165],
              label: "JAWA TIMUR",
              borderColor: "#ce93d8",
              fill: false
            },
            {
              data: [4715, 8257, 9355, 9970],
              label: "BANTEN",
              borderColor: "#e57373",
              fill: false
            },
            {
              data: [6954, 7301, 7852, 9728],
              label: "BALI",
              borderColor: "#f06292",
              fill: false
            },
            {
              data: [3827, 3651, 5011, 5398],
              label: "NUSA TENGGARA BARAT",
              borderColor: "#ba68c8",
              fill: false
            },
            {
              data: [4512, 4524, 5443, 5571],
              label: "NUSA TENGGARA TIMUR",
              borderColor: "#ef5350",
              fill: false
            },
            {
              data: [2855, 3354, 4881, 6283],
              label: "KALIMANTAN BARAT",
              borderColor: "#ec407a",
              fill: false
            },
            {
              data: [2093, 2138, 2319, 3756],
              label: "KALIMANTAN TENGAH",
              borderColor: "#ab47bc",
              fill: false
            },
            {
              data: [2407, 3206, 3335, 5892],
              label: "KALIMANTAN SELATAN",
              borderColor: "#ef5350",
              fill: false
            },
            {
              data: [3939, 5747, 7024, 8169],
              label: "KALIMANTAN TIMUR",
              borderColor: "#e91e63",
              fill: false
            },
            {
              data: [584, 488, 596, 1529],
              label: "KALIMANTAN UTARA",
              borderColor: "#9c27b0",
              fill: false
            },
            {
              data: [2595, 2690, 3257, 3559],
              label: "SULAWESI UTARA",
              borderColor: "#e53935",
              fill: false
            },
            {
              data: [1655, 1748, 3020, 4296],
              label: "SULAWESI TENGAH",
              borderColor: "#d81b60",
              fill: false
            },
            {
              data: [4519, 6245, 7506, 7731],
              label: "SULAWESI SELATAN",
              borderColor: "#8e24aa",
              fill: false
            },
            {
              data: [1099, 1312, 2398, 3324],
              label: "SULAWESI TENGGARA",
              borderColor: "#d32f2f",
              fill: false
            },
            {
              data: [1299, 1733, 1730, 2274],
              label: "GORONTALO",
              borderColor: "#c2185b",
              fill: false
            },
            {
              data: [414, 984, 1014, 1102],
              label: "SULAWESI BARAT",
              borderColor: "#7b1fa2",
              fill: false
            },
            {
              data: [1017, 1233, 1397, 1754],
              label: "MALUKU",
              borderColor: "#c62828",
              fill: false
            },
            {
              data: [535, 745, 1451, 1472],
              label: "MALUKU UTARA",
              borderColor: "#ad1457",
              fill: false
            },
            {
              data: [777, 784, 913, 1116],
              label: "PAPUA BARAT",
              borderColor: "#6a1b9a",
              fill: false
            },
            {
              data: [1594, 2551, 3876, 4701],
              label: "PAPUA",
              borderColor: "#d1c4e9",
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
      // Line Chart (chart.js)

      new Chart(document.getElementById("line-chart"), {
        type: "line",
        data: {
          labels: [2014, 2015, 2016, 2017],
          datasets: this.dataLineChart
        },
        options: {
          title: {
            display: false,
            text: "Jumlah " + this.valueLineChart
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
          borderColor: "#ffffff",
          borderAlpha: 1,
          top: 410,
          left: 0,
          horizontalGap: 10,
          data: [
            {
              title: "Cluster one",
              color: "#ef5350"
            },
            {
              title: "Cluster two",
              color: "#cddc39"
            },
            {
              title: "Cluster three",
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
