import CountriesList from "./CountriesList";

function List({ countries }) {
  return (
    <>
      <div className="list">
        <ul className="list-group">
          {countries.map((country, i) => (
            <CountriesList key={i} country={country}></CountriesList>
          ))}
        </ul>
      </div>
    </>
  );
}

export default List;
