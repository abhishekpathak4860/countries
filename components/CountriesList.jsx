import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import CountriesListShimmer from "./CountriesListShimmer";
// import countriesData from "../countriesData";

// useState is used to create the state and useEffect is used to monitor the state.
export default function CountriesList({ query, query1 }) {
  // fetching data through API

  const [countriesData, setCountriesData] = useState([]); // state variables
  // const [count, setCount] = useState(0);

  useEffect(() => {
    // useEffect is use to make code run only once.
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,capital,flags,region,population,common,borders,subregion,currencies,languages"
    )
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data);
      });

    return () => {
      // unmount
      // clearTimeout(intervalId)
    };
  }, []);

  const filterCountry = countriesData.filter((countryInfo) => {
    if (query) {
      return countryInfo.name.common
        .toLowerCase()
        .includes(query.toLowerCase());
    }
    if (query1) {
      return countryInfo.region.toLowerCase() === query1.toLowerCase();
    }
    return true; // Show all if no search or filter is applied
  });
  // !countriesData.length
  return (
    <>
      {!countriesData.length ? (
        <CountriesListShimmer />
      ) : (
        <div className="countries-container">
          {filterCountry.length > 0 ? (
            filterCountry.map((countryInfo) => (
              <CountryCard
                key={countryInfo.name.common}
                countryKey={countryInfo.name.common}
                name={countryInfo.name.common}
                population={countryInfo.population.toLocaleString("en-IN")}
                region={countryInfo.region}
                capital={
                  countryInfo.capital ? countryInfo.capital : "No Capital"
                }
                image={countryInfo.flags.svg}
                data={countryInfo}
              />
            ))
          ) : (
            <p>No such country found</p>
          )}
        </div>
      )}
    </>
  );
}
