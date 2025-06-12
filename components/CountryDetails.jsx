import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router";
import CountryDetailShimmer from "./CountryDetailShimmer";
// import { useWindowSize } from "../hooks/useWindowSize";
import { useTheme } from "../hooks/useTheme";

export default function CountryDetails() {
  // const [mode]=useOutletContext();
  // getting the name from queryParams
  // const [searchParam] = useSearchParams()// a type of HOOK in react
  // const Country_name = searchParam.get("name");
  const [mode] = useTheme();
  const params = useParams();
  const { state } = useLocation(); // hook provided by react router

  // const windowSize = useWindowSize();

  const Country_name = params.country;
  const [countryData, setCountryData] = useState();
  const [notFound, setnotFound] = useState(false);

  function updateCountryData(data) {
    setCountryData({
      name: data.name.common,
      nativeName: data.name.nativeName
        ? Object.values(data.name.nativeName)[0].common
        : data.name.common,
      population: data.population,
      region: data.region,
      subregion: data.subregion ? data.subregion : "no subreigion",
      capital: data.capital ? data.capital : "no capital",
      //   tld: data.tld[0],
      currencies: data.currencies
        ? Object.values(data.currencies)[0].symbol
        : "no currency",
      languages: data.languages
        ? Object.values(data.languages).join(", ")
        : "no language",
      borders: data.borders,
      image: data.flags.svg,
    });
    if (data.borders) {
      // agar border hai tabhi iske ander aana ok
      Promise.all(
        data.borders.map(async (border) => {
          const res = await fetch(
            `https://restcountries.com/v3.1/alpha/${border}`
          );
          const [borderscountry] = await res.json();
          return borderscountry.name.common;
        })
      ).then((allBordersName) => {
        setCountryData((prevState) => ({
          ...prevState,
          borders: allBordersName,
        }));
      });
    }
  }

  useEffect(() => {
    if (state) {
      updateCountryData(state);
      return;
    }

    fetch(`https://restcountries.com/v3.1/name/${Country_name}?FullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        updateCountryData(data);
      })
      .catch((err) => {
        setnotFound(true);
      });
  }, [Country_name]);

  if (notFound) {
    return <div>Country Not Found</div>;
  }

  return (
    <>
      {!countryData ? (
        <CountryDetailShimmer />
      ) : (
        countryData && (
          <main className={`${mode ? "dark" : ""}`}>
            <div className="backbutton">
              <Link to="/" className="back">
                ←Back
              </Link>
            </div>
            {/* <h1 style={{ textAlign: "center" }}>{windowSize.width}X{windowSize.height}</h1> */}
            <div className="maindiv">
              <div className="img_content">
                <img src={countryData.image} alt="" />
              </div>
              <div className="details_content">
                <div className="first_box">
                  <div className="sub_firstBox">
                    <h2>{countryData.name}</h2>
                    <p>
                      <b>Native Name:</b>
                      {countryData.nativeName}
                    </p>
                    <p>
                      <b>Population:</b>
                      {countryData.population.toLocaleString("en-IN")}
                    </p>
                    <p>
                      <b>Region:</b>
                      {countryData.region}
                    </p>
                    <p>
                      <b>Sub-Region:</b>
                      {countryData.subregion}
                    </p>
                    <p>
                      <b>Capital:</b>
                      {countryData.capital}
                    </p>
                  </div>
                  <div className="sub_secondBox">
                    {/* <p>
                      <b>Top Level Domain:</b>
                      {countryData.tld}
                    </p> */}
                    <p>
                      <b>Currencies:</b>
                      {countryData.currencies}
                    </p>
                    <p>
                      <b>Languages:</b>
                      {countryData.languages}
                    </p>
                  </div>
                </div>
                <div className="second_box">
                  <p>Border Countries:</p>
                  {countryData.borders && countryData.borders.length > 0
                    ? countryData.borders.map((border, i) => (
                        <Link key={i} to={`/${border}`}>
                          {border}
                        </Link>
                      ))
                    : "No Border Country"}
                </div>
              </div>
            </div>
          </main>
        )
      )}
    </>
  );
}
