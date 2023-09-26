import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);
  const [apiUrl, setApiUrl] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
       // Fetch the config file and apply the API URL to the button's hx-post attribute
        // Could be avoided, when proxying the API through the website (cloudfront)
        fetch('/config.json')
            .then(response => response.json())
            .then(data => setApiUrl(data.api));
      const hostname = window.location.hostname;
      const port = 8080;
      const endpoint = "/api/messages";

      const apiRes = await fetch('/config.json');
      const apiJson = await apiRes.json();
      setApiUrl(apiJson.api);
      console.log(`apiUrl: ${JSON.stringify(apiUrl, null, 2)}`);
      

      const response = await fetch(`${apiUrl}/api`);
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
