import Oceania from "./Oceania";
import Smaller from "./Smaller";
import Sort from "./Sort";

function Top({ doSort, doFilter, oceania }) {
  return (
    <div className="bin">
      <div className="h1">
        <h1>COUNTRIES</h1>
      </div>
      <div className="filters">
        <div className="filters">
          <Smaller doFilter={doFilter}></Smaller>
          <Oceania oceania={oceania}></Oceania>
        </div>
        <div className="filters">
          <Sort doSort={doSort}></Sort>
        </div>
      </div>
    </div>
  );
}

export default Top;
