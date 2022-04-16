import { useState } from "react";

function Smaller({ doFilter }) {
  const [select, setSelect] = useState(1);

  return (
    <>
      <div className="filters filt">
        <h5>Size: </h5>
        <select
          value={select}
          onChange={(event) => {
            setSelect(event.target.value);
            doFilter(event.target.value);
          }}
        >
          <option value="1">All</option>
          <option value="2">Smaller than LT</option>
        </select>
      </div>
    </>
  );
}
export default Smaller;
