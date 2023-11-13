// import React, { useState, useEffect } from "react";
// import { App } from "./App";

// const ParentComponent = () => {
//   const [revenueData, setRevenueData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("http://localhost:5000/api/revenue-data");
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
        
//         const data = await response.json();
//         setRevenueData(data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setError('Error fetching data. Please try again later.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return <p>Loading...</p>; // Add a loading indicator
//   }

//   if (error) {
//     return <p>Error: {error}</p>; // Display an error message
//   }

//   return <App revenueData={revenueData} />;
// };

// export default ParentComponent;
