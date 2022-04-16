import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import List from "./Components/List";
import Top from "./Components/Top";

function App() {
  const [countries, setCountries] = useState([]);
  const [countriesOrg, setCountriesOrg] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v2/all?fields=name,region,area").then((resp) => {
      setCountries(resp.data);
      setCountriesOrg(resp.data);
    });
  }, []);

  const doFilter = (value) => {
    switch (parseInt(value)) {
      case 1:
        setCountries(countriesOrg);
        break;
      case 2:
        setCountries((cntr) => {
          return cntr.filter((el) => {
            if (el.area < 65300) {
              return el;
            }
            return 0;
          });
        });
        break;

      default:
    }
  };

  const oceania = (value) => {
    switch (parseInt(value)) {
      case 1:
        setCountries(countriesOrg);
        break;
      case 2:
        setCountries((cntr) => {
          return cntr.filter((el) => {
            if (el.region === "Oceania") {
              return el;
            }
            return 0;
          });
        });

        break;

      default:
    }
  };

  const doSort = (value) => {
    switch (parseInt(value)) {
      case 1:
        setCountries((cntr) => {
          cntr.sort((a, b) => {
            if (a.name > b.name) {
              return 1;
            }
            if (a.name < b.name) {
              return -1;
            }
            return 0;
          });
          return [...cntr];
        });
        break;
      case 2:
        setCountries((cntr) => {
          cntr.sort((a, b) => {
            if (a.name > b.name) {
              return -1;
            }
            if (a.name < b.name) {
              return 1;
            }
            return 0;
          });
          return [...cntr];
        });
        break;

      default:
    }
  };

  return (
    <div className="App">
      <Top doSort={doSort} doFilter={doFilter} oceania={oceania}></Top>
      <div>
        <List countries={countries}></List>
      </div>
    </div>
  );
}

export default App;
