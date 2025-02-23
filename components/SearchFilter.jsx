import { useTheme } from "../hooks/useTheme";

export default function SearchFilter({ setQuery1 }) {

  const [mode] = useTheme();

  return (
    <select className={`${mode ? "dark" : "filter"}`} onChange={(e) => setQuery1(e.target.value)}>
      <option hidden>
        Filter By Region
      </option>
      <option value="africa">Africa</option>
      <option value="americas">Americas</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
    </select>

  )
}
