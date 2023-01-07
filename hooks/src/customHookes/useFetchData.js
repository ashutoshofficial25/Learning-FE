import React, { useEffect, useState } from "react";

const useFetchData = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((res) => setData(res));
  }, [url]);

  return [data];
};

export default useFetchData;
