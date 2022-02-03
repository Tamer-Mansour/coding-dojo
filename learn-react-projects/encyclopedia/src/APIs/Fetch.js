import React, { useEffect, useState } from "react";
import axios from "axios";


 function Fetch() {
  const [responseData, setResponseData] = useState(null);
  useEffect(() => {
    axios.get("http://api.alquran.cloud/v1/edition").then((response) => {
      setResponseData(response.data);
    });
  }, []);
  return (
    <div>
      <h1> {responseData}</h1>
    </div>
  );
}
export default Fetch;