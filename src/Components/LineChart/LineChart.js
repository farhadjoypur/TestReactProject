import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';

const LineCharts = ({cSVdata}) => {
   
  return (
    <LineChart width={600} height={540} data={cSVdata.data}>
    <Line dataKey={`[1]`} stroke="#555" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey={`[0]`} />
    <YAxis dataKey={`[1]`} />
  </LineChart>
  )
}

export default LineCharts
