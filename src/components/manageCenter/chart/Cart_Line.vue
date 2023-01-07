<template>
  <div class="app">
    <Line :data="data" :options="options" />
  </div>
</template>

<script >
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Line } from "vue-chartjs";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

  
export default {
  name: "App",
  components: {
    Line
  },
  data() {
    return ;
  },
  setup(){
    const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Data One',
        backgroundColor: '#f87979',
        data: [40, 39, 10, 40, 39, 60, 40]
      }
    ]
  }

const options = {
    responsive: true,
    maintainAspectRatio: false
  }
  return {data , options}
  }

};
</script>

<style>
</style>