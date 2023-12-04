import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import useFetch from "../hooks/useFetch";

const PieChart = () => {
  const chartData = useFetch("/api/pie-chart");
  let allDatas = {
    labels: chartData?.map((item) => item.label),
    datasets: [
      {
        label: "User Results",
        data: chartData?.map((item) => item.value),
        backgroundColor: [
          "#0B6623",
          "#3F704D",
          "#29AB87",
          "#00755E",
          "#3B7A57",
        ],
      },
    ],
  };

  return (
    <div className="md:w-[40%] w-full flex justify-center items-center bg-white rounded-[10px] p-4 h-[300px]">
      {chartData?.length ? <Pie data={allDatas} options={{}} /> : null}
    </div>
  );
};

export default PieChart;
