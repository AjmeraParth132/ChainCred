import React from 'react';
import { Bar } from 'react-chartjs-2';
import './graph.css';

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Inflow',
      backgroundColor: '#7e57c2',
      data: [200, 300, 400, 300, 200, 300, 400, 300, 200, 300, 400, 300],
    },
    {
      label: 'Outflow',
      backgroundColor: '#ff8a65',
      data: [150, 250, 350, 250, 150, 250, 350, 250, 150, 250, 350, 250],
    }
  ]
};

function Graph() {
  return (
    <div className="graph w-[20%]">
      <Bar data={data} />
    </div>
  );
}

export default Graph;
