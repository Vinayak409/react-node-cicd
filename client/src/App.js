import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [userName, setUserName] = useState("");

  const getNames = async () => {
    const response = await axios.get("/names");
    setUserName(response.data);
  };

  useEffect(() => {
    getNames();
  }, []);

  return (
    <>
      <h1>My Website</h1>
      <h3>My name is {userName}</h3>
    </>
  );
}

export default App;
