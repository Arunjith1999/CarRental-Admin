import React from 'react';
import Chart from 'react-apexcharts';

const BookingChart = ({ paid, cancelled, dates }) => {
   
  const chartOptions = {
    chart: {
      id: 'line-chart',
    },
   
    xaxis: {
      categories: dates.map((d) => (d.is_created__date)),
    },
  };

  const chartSeries = [
    {
      name: 'Paid Trips',
      data: paid.map((s) => (s.paid))
    },
    {
      name: 'Cancelled Trips',
      data: cancelled.map((c) => (c.cancelled))
    }
  ];

  return (
    <div>
      <Chart
        options={chartOptions}
        series={chartSeries}
        type="line"
        height={400}
      />
    </div>
  );
};

export default BookingChart;
