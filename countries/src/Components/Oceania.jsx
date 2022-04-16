import { useState } from "react";

function Oceania({ oceania }) {
  const [select, setSelect] = useState(1);

  return (
    <>
      <div className="filters filt">
        <h5>Region: </h5>
        <select
          value={select}
          onChange={(event) => {
            setSelect(event.target.value);
            oceania(event.target.value);
          }}
        >
          <option value="1">All</option>
          <option value="2">Oceania</option>
        </select>
      </div>
    </>
  );
}
export default Oceania;
