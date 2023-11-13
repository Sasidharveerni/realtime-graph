import React from 'react';

const InputData = ({ label, revenue, cost, setLabel, setRevenue, setCost, addData }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Label"
        value={label}
        onChange={(e) => setLabel(e.target.value)}
      />
      <input
        type="number"
        placeholder="Revenue"
        value={revenue}
        onChange={(e) => setRevenue(parseFloat(e.target.value))}
      />
      <input
        type="number"
        placeholder="Cost"
        value={cost}
        onChange={(e) => setCost(parseFloat(e.target.value))}
      />
      <button onClick={addData}>Add Data</button>
    </div>
  );
};

export default InputData;
