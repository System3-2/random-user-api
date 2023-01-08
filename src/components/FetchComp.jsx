import { useState, useEffect } from "react";
import Component from "./Component";
import Loading from "./Loading";

const FetchComp = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = "https://course-api.com/react-tours-project";

  const fetchData = async() => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }
  useEffect(() => {
  
    fetchData();
  }, []);

  function removeData(id) {
    const filtered = data.filter((item) => item.id !== id);
    return setData(filtered);
  }

  if (loading) {
    return <Loading />;
  }
  if (data.length === 0) {
    return <div className="no-data">
      <h3>No Tours</h3>
      <button onClick={() => fetchData()}>Fetch Tours</button>
    </div>
  }

  return (
    <>
      <Component data={data} removeData={removeData}/>
    </>
  );
};

export default FetchComp;
