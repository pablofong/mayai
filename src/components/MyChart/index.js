import React, { useEffect } from 'react';
import Chart from 'chart.js/auto'; // Import Chart.js

const MyChart = (props) => {
    const chartRef = React.createRef(); // Create a ref to the canvas element
    let myChart; // Declare a variable to store the chart instance

    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');

        const config = {
            type: 'bar',
            data: {
                labels: props.labels,
                datasets: [
                    {
                        label: 'Mi Inversión',
                        data: props.inversion,
                        backgroundColor: 'rgba(255, 102, 32, 0.2)', //
                        borderColor: 'rgba(255, 172, 32, 1)',
                        borderWidth: 1,
                    },
                    {
                        label: 'Mi Ganancia',

                        data: props.ganancias,
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                plugins: {
                    title: {
                        display: true,
                        text: (props.title),
                    },
                },
                responsive: true,
                scales: {
                    x: {
                        stacked: true,
                    },
                    y: {
                        stacked: true,
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

export default MyChart;

// [52000, 54468, 56958.212, 59470.83591, 62006.07343, 64564.12809, 67145.20524, 69749.51209, 72377.2577, 75028.65302, 77703.9109, 80403.2461, 83126.87531, 85875.01719, 88647.89234, 91445.72337, 94268.73488, 97117.1535, 99991.20788, 102891.1288, 105817.1489, 108769.5032, 111748.4288],