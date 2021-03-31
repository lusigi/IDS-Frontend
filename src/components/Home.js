import React, { useState } from "react";
import DataGrid from "../components/DataGrid/DataGrid";
import axios from "axios";

function Home() {
  const [idNumber, setIdNumber] = useState("");
  const [results, setResults] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3001/api/users/individual", {
        idNumber,
      })
      .then((user) => {
        if (user) {
          console.log(user);
        } else {
          console.log("User not exist");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div className="home">
      <form className="form">
        <div className="search-input">
          <input
            onChange={(e) => setIdNumber(e.target.value)}
            name="idNumber"
            value={idNumber}
            className="inputSearch"
            placeholder="Enter the ID Number of the individual"
          />
        </div>
        <button onClick={handleClick}>Submit</button>
      </form>
    </div>
  );
}

export default Home;
