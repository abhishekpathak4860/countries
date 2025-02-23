import { Fragment, useState } from "react";
import SearchBar from "./SearchBar";
import SearchFilter from "./SearchFilter";
import CountriesList from "./CountriesList";
// import { useWindowSize } from "../hooks/useWindowSize";
import { useTheme } from "../hooks/useTheme";


export default function Home() {

    const [query, setQuery] = useState('');
    const [query1, setQuery1] = useState('');

    // const windowSize = useWindowSize();
    const [mode] = useTheme();

    // const [mode]=useOutletContext();
    //  console.log(themecontext);


    return (
        <Fragment>
            <main className={`${mode ? "dark" : ""}`}>
                <div className="search-filter-container">
                    <SearchBar setQuery={setQuery} />
                    <SearchFilter setQuery1={setQuery1} />
                </div>
                {/* <h1 style={{ textAlign: "center" }}>{windowSize.width}X{windowSize.height}</h1> */}
                {/* <h1 style={{textAlign:"center"}}>Height:{windowSize.height}</h1> */}
                {query === 'unmount' ? "" : <CountriesList query={query} query1={query1} />}
            </main>
        </Fragment>
    )
}
