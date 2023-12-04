import React from "react";
import { Line } from "react-chartjs-2";
import useFetch from "../hooks/useFetch";

const LineChart = () => {
  const chartData = useFetch("/api/graph");
  const graphData = {
    labels: chartData?.map((item) => item.x),
    datasets: [
      {
        label: "",
        data: chartData?.map((item) => item.y),
        backgroundColor: ["rgba(96 165 250)"],
        tension: 0.4,
        borderColor: ["rgb(96 165 250)"],
      },
    ],
  };

  return (
    <div className="bg-white rounded-[10px] flex justify-center items-center w-full md:w-[60%] p-4 h-[300px]">
      {chartData.length ? <Line data={graphData} options={{}} /> : null}
    </div>
  );
};

export default LineChart;
