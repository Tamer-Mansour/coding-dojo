import React, { useEffect, useState } from "react";

function FetchingData() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch(`https://api.github.com/users`)
      .then((res) => res.json())
      .then(setdata);
  },[]);

  if (data) {
    return (
        <>
      <ul>
        {data.map((user) => (
          <li key={user}>{user.login}</li>
        ))}
      </ul>
      <button onClick={()=>setdata([])}>Remove Data</button>
      </>
    );
  }

  return (
    <div>
      <h1>There are no users founded</h1>
    </div>
  );
}
export default FetchingData;
