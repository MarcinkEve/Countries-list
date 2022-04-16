import { useState } from "react";

function Sort({ doSort }) {
  const [select, setSelect] = useState(1);

  return (
    <>
      <div className="filters filt sort">
        <h5>Sort by: </h5>
        <select
          value={select}
          onChange={(event) => {
            setSelect(event.target.value);
            doSort(event.target.value);
          }}
        >
          <option value="1">A-Z</option>
          <option value="2">Z-A</option>
        </select>
      </div>
    </>
  );
}
export default Sort;
