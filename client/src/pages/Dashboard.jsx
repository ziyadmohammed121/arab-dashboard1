import React from "react";
import LineChart from "../components/LineChart";
import PieChart from "../components/PieChart";
import UserCard from "../components/UserCard";
import Table from "../components/Table";
import Pagination from "../components/Pagination";
import useFetch from "../hooks/useFetch";

const Dashboard = () => {
  return (
    <>
      <div className="flex items-center md:flex-row flex-col w-full gap-12 pt-4">
        <LineChart />
        <PieChart />
      </div>
      <div className="flex md:flex-row flex-col w-full gap-4 mt-6 h-full">
        <div className="w-full h-full">
          <Table />
          <Pagination />
        </div>
        <UserCard />
      </div>
    </>
  );
};

export default Dashboard;
