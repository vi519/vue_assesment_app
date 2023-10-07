<template>
<p>Note: Please hold  and slide  the chart towards left to get the proper view </p>
  <div class="candlestick-chart-container">
    <div class="chart-content">
      <h2 class="chart-heading">Candlestick Chart</h2>
      <div class="toggle-container">
        <button @click="togglePeriod" :class="{ active: period === 'hourly' }">Hourly</button>
        <button @click="togglePeriod" :class="{ active: period === 'daily' }">Daily</button>
      </div>
      <div class="search-container">
        <input
          v-model="symbol"
          placeholder="Search by symbol..."
          class="search-input"
        />
        <button @click="searchSymbol" class="search-button">Search</button>
      </div>
      <div class="chart-container" ref="chartContainer">
        <div class="chart-wrapper">
          <!-- Center the chart here -->
          <div class="chart" ref="chart"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createChart } from 'lightweight-charts';
import axios from 'axios';

export default {
  data() {
    return {
      chart: null,
      symbol: 'GOOGL', // Default symbol
      period: 'daily', // Default period
    };
  },
  mounted() {
    this.chart = createChart(this.$refs.chart, {
      width: this.getChartWidth(),
      height: this.getChartHeight(),
    });

    this.fetchData();
    window.addEventListener('resize', this.handleResize);
  },
  methods: {
    fetchData() {
      const apiUrl = `https://node-server-idp6.onrender.com/api/search?symbol=${this.symbol}&period=${this.period}`;

      axios
        .get(apiUrl)
        .then((response) => {
          const data = response.data;
          const series = this.chart.addCandlestickSeries();

          data.forEach((item) => {
            series.update({
              time: item.date / 1000,
              open: item.open,
              high: item.high,
              low: item.low,
              close: item.close,
            });
          });
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    },
    searchSymbol() {
      this.fetchData(); // Call the API when the user clicks the Search button
    },
    togglePeriod() {
      // Toggle between 'hourly' and 'daily' periods
      this.period = this.period === 'hourly' ? 'daily' : 'hourly';
      this.fetchData(); // Call the API with the updated period
    },
    handleResize() {
      // Update chart dimensions on window resize
      this.chart.resize(this.getChartWidth(), this.getChartHeight());
    },
    getChartWidth() {
     
      return window.innerWidth < 768 ? window.innerWidth - 40 : 800;
    },
    getChartHeight() {
      
      return window.innerWidth < 768 ? 300 : 400;
    },
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
  },
};
</script>

<style scoped>

.candlestick-chart-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f7f7f7;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  min-height: 400px;
}

.chart-content {
  text-align: center;
  width: 100%;
}

.chart-heading {
  font-size: 28px;
  margin-bottom: 20px;
  color: #333;
}

.toggle-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.toggle-container button {
  padding: 10px 20px;
  background-color: #007BFF;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  margin: 0 10px;
  outline: none;
  transition: background-color 0.2s;
}

.toggle-container button.active {
  background-color: #0056b3;
}

.search-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
}

.search-input {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  width: 100%;
  outline: none;
}

.search-button {
  padding: 10px 20px;
  background-color: #007BFF;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;

  outline: none;
  transition: background-color 0.2s;
}

.search-button:hover {
  background-color: #0056b3;
}

.chart-container {
  max-width: 800px;
}

.chart-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
</style>
