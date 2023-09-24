import React, { useEffect } from 'react';
import Chart from 'chart.js/auto'; // Import Chart.js

const MyChart = () => {
  const chartRef = React.createRef(); // Create a ref to the canvas element
  let myChart; // Declare a variable to store the chart instance

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    // Function to determine borderColor based on data
    function getBorderColor(context) {
      const data = context.dataset.data;
      const currentIndex = context.dataIndex;

      // Compare the current data point with the previous one
      if (currentIndex > 0 && data[currentIndex] < data[currentIndex - 1]) {
        return 'rgb(192, 75, 75)'; // Red for a decrease
      } else {
        return 'rgb(75, 192, 75)'; // Green for an increase or no change
      }
    }

    const config = {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40], // Replace with your data
          borderColor: '#6A6867', // Overall line color
          pointBackgroundColor: getBorderColor, // Color individual points
          spanGaps: true
        }]
      },
      options: {} // Add your chart options here
    };

    myChart = new Chart(ctx, config); // Create the chart and store the instance

    return () => {
      // Clean up the chart when the component unmounts
      if (myChart) {
        myChart.destroy();
      }
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div>
      <canvas ref={chartRef} /> {/* Attach the canvas element to the ref */}
    </div>
  );
};

export default MyChart;
