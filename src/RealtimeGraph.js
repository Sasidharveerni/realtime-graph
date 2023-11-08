// import React, { Component } from 'react';
// import { Line } from 'react-chartjs-2';

// class RealTimeGraph extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: {
//         labels: [],
//         datasets: [
//           {
//             label: 'Real-time Data',
//             data: [],
//             borderColor: 'blue',
//             borderWidth: 2,
//             fill: false,
//           },
//         ],
//       },
//       x: 0,
//       y: 0,
//     };
//   }

//   addDataPoint() {
//     const { data, x, y } = this.state;
//     const newData = { ...data };
//     newData.labels.push(new Date().toLocaleTimeString());
//     newData.datasets[0].data.push({ x, y });
//     this.setState({ data: newData });
//   }

//   handleXChange = (e) => {
//     this.setState({ x: parseFloat(e.target.value) });
//   };

//   handleYChange = (e) => {
//     this.setState({ y: parseFloat(e.target.value) });
//   };

//   render() {
//     return (
//       <div>
//         <h1>Real-time Graph</h1>
//         <div className="container">
//           <div className="row">
//             <div className="col-md-4">
//               <input
//                 type="number"
//                 placeholder="X Coordinate"
//                 value={this.state.x}
//                 onChange={this.handleXChange}
//               />
//             </div>
//             <div className="col-md-4">
//               <input
//                 type="number"
//                 placeholder="Y Coordinate"
//                 value={this.state.y}
//                 onChange={this.handleYChange}
//               />
//             </div>
//             <div className="col-md-4">
//               <button onClick={this.addDataPoint.bind(this)}>Add Data Point</button>
//             </div>
//           </div>
//         </div>
//         <Line data={this.state.data} />
//       </div>
//     );
//   }
// }

// export default RealTimeGraph;
