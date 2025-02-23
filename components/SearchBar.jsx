import { useTheme } from "../hooks/useTheme";


export default function SearchBar({setQuery}) {
      const [mode] = useTheme();
  return (
    <div className="search">
    <i className="fa-solid fa-magnifying-glass" />
    <input className={`${mode ? "dark" : ""}`} type="text" id="search" placeholder="Search for a country" onChange={(e)=>setQuery(e.target.value.toLowerCase())}/>
  </div>
  )
}
