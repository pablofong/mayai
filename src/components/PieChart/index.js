import React, { useEffect } from 'react';
import Chart from 'chart.js/auto'; // Import Chart.js

const PieChart = () => {
    const chartRef = React.createRef(); // Create a ref to the canvas element
    let myChart; // Declare a variable to store the chart instance

    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');

        const config = {
            type: 'pie',
            data: {
                labels: ['Corolla 2021', 'Disneyland 2024', 'Retiro'],
                datasets: [
                    {
                        label: 'Rendimiento de mis inversiones',
                        data: [16754.16464, 3492.533269, 7603.039694], // Sample data for the pie chart
                        backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(255, 205, 86, 0.2)'],
                        borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)', 'rgba(255, 205, 86, 1)'],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Rendimientos de mis inversiones',
                    },
                },
            },
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

export default PieChart;
