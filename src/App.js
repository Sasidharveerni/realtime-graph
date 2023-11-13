import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import YearDropdown from  './YearDropDown' // Assuming you have a YearDropdown component

import "./App.css";
// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS, defaults } from "chart.js/auto";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

export const App = () => {
  const [revenueData, setRevenueData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedYear, setSelectedYear] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://realtime-graph.vercel.app/api/revenue-data?year=${selectedYear}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setRevenueData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedYear]);

  if (loading) {
    return <p>Loading data...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!revenueData || revenueData.length === 0) {
    return <p>No data available</p>;
  }

  return (
    <div className="App">
      <YearDropdown years={['cur', 'prev']} onSelect={setSelectedYear} />

      <div className="dataCard revenueCard">
        <Line
          data={{
            labels: revenueData.map((data) => data.label),
            datasets: [
              {
                label: "Revenue",
                data: revenueData.map((data) => data.revenue),
                backgroundColor: "#064FF0",
                borderColor: "#064FF0",
              },
              {
                label: "Cost",
                data: revenueData.map((data) => data.cost),
                backgroundColor: "#FF3030",
                borderColor: "#FF3030",
              },
            ],
          }}
          options={{
            elements: {
              line: {
                tension: 0.5,
              },
            },
            plugins: {
              title: {
                display: true,
                text: "Everest Labs Robots Revenue & Cost",
                align: "start",
                font: {
                  size: 20,
                },
                color: "black",
              },
            },
          }}
          // Add style to control the size of the chart
          style={{ width: '80%', height: '400px' }} // Adjust these values as needed
        />
      </div>
    </div>
  );
};

export default App;
