import React from 'react'
import { useEffect } from 'react';
import Chart from 'react-apexcharts';
const UserRenter = ({user,renter}) => {
    console.log(user,'usercountttttttttt');
    const [chartData, setChartData] = React.useState({
        options: {
          chart: {
            id: 'bar-chart',
          },
          xaxis: {
            categories: ['User','Renter'],
          },
        },
        series: [
          {
            name: 'Series 1',
            data: [0,0],
          },
        ],
      });
      useEffect(() => {
        if (user !== undefined && renter!== undefined) {
          setChartData({
            options: {
              chart: {
                id: 'basic-bar',
              },
              xaxis: {
                categories: ['Users', 'Renter'],
              },
            },
            series: [
              {
                name: 'Total',
                data: [user, renter],
              },
            ],
          });
        }
      }, [user, renter]);
  return (
    <div>
      
      <Chart options={chartData.options} series={chartData.series} type="bar" width={350} height={300} />
    
    </div>
  )
}

export default UserRenter
