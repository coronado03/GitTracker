import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: '# of Repositories',
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: 'rgb(20, 148, 20)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true
    }
  }
};
export default function Charts() {

  return (
    <>
    <div className='header'>
      <h1 className='title'>Repositories</h1>
    </div>
    <Line data={data} options={options} />
    </>
  )
};