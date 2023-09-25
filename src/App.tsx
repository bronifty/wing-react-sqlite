import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const hostname = window.location.hostname;
      const port = 8080;
      const endpoint = "/api/";

      const response = await fetch(`http://${hostname}:${port}${endpoint}`);
      const data = await response.json();
      setData(data);
    };

    fetchData();
  }, []);

  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <div>{data && JSON.stringify(data)}</div>
    </>
  );
}

export default App;
