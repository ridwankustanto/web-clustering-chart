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
    valueLineChart: "Choose...",
    valueMapChart: "Choose...",
    dataChart: [{ x: "2016-12-25", y: 20 }, { x: "2016-12-26", y: 10 }]
  },
  watch: {
    valueLineChart: function(val) {
      this.valueLineChart = val;
    }
  }
});

// Line Chart (chart.js)

new Chart(document.getElementById("line-chart"), {
  type: "line",
  data: {
    labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
    datasets: [
      {
        data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
        label: "Africa",
        borderColor: "#3e95cd",
        fill: false
      },
      {
        data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
        label: "Asia",
        borderColor: "#8e5ea2",
        fill: false
      },
      {
        data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
        label: "Europe",
        borderColor: "#3cba9f",
        fill: false
      },
      {
        data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
        label: "Latin America",
        borderColor: "#e8c3b9",
        fill: false
      },
      {
        data: [6, 3, 2, 2, 7, 26, 82, 172, 312, 433],
        label: "North America",
        borderColor: "#c45850",
        fill: false
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: "World population per region (in millions)"
    }
  }
});

//   Map Chart (amcharts js)

var map = AmCharts.makeChart("chartdiv", {
  type: "map",
  theme: "light",
  colorSteps: 10,

  dataProvider: {
    map: "indonesiaLow",
    areas: [
      {
        id: "ID-JB",
        value: 4447100
      },
      {
        id: "ID-AC",
        value: 387633
      }
    ]
  },

  valueLegend: {
    right: 10,
    minValue: "little",
    maxValue: "a lot!"
  }
});