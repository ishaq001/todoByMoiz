import React, { useEffect, useState } from "react";
import axios from "axios";
import { FormField } from "semantic-ui-react";

    
const Intercpt = () => {
  const [data, setData] = useState(null);
  const [val, setVal] = useState("");
  const [fetchData, setFetch] = useState(false);

 
  
  useEffect(() => {
    if (fetchData) {
      const payload = {
        method: "POST",
        body: JSON.stringify({ title: val }),
      };
      axios
        .post("https://jsonplaceholder.typicode.com/posts", payload)
        .then((res) => setData(res.data.id));
    }
  }, [fetchData]);

  return (
    <>
      <h2>POST DATA</h2>
      <input
        placeholder="Post data"
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
      {data && <h2>Your data is saved with Id: {data}</h2>} 
      <button onClick={() => setFetch(true)}>Save Data</button>
    </>
  );
};
export default Intercpt;
