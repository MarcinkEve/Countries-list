function CountriesList({ country }) {
  return (
    <div className="row-group">
      <li className="list-group-item">
        <div className="content">
          <h3>
            <strong>{country.name}</strong>
          </h3>
          <p>
            <u>Region:</u> {country.region}
          </p>
          <p>
            <u>Area:</u> {country.area} km<sup>2</sup>
          </p>
        </div>
      </li>
    </div>
  );
}

export default CountriesList;
