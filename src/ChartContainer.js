// import React, { useState } from 'react';
// import InputData from './nputData';

// function ChartContainer() {
//   const [label, setLabel] = useState('');
//   const [revenue, setRevenue] = useState(0);
//   const [cost, setCost] = useState(0);
//   const [data, setData] = useState([]);

//   const addData = () => {
//     const newData = {
//       label: label,
//       revenue: revenue,
//       cost: cost,
//     };

//     setData([...data, newData]);

//     setLabel('');
//     setRevenue(0);
//     setCost(0);
//   };

//   return (
//     <div>
//       {/* Render the chart here */}
//       {/* ... (code for rendering the chart) */}
      
//       {/* Render the InputData component with props */}
//       <InputData
//         label={label}
//         revenue={revenue}
//         cost={cost}
//         setLabel={setLabel}
//         setRevenue={setRevenue}
//         setCost={setCost}
//         addData={addData}
//       />
//     </div>
//   );
// }

// export default ChartContainer;
