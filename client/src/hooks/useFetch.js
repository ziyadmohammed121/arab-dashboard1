import React, { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [results, setResults] = useState([]);
  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}${url}`
      );
      setResults(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return results;
};

export default useFetch;
