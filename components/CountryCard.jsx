import { Link } from "react-router"

export default function CountryCard(props) {
 const {name,population,region,capital,image,countryKey,data}=props
  return (
    <Link to={`/${name}`} key={countryKey} state={data}>
    <div className="country">
      <img src={image} />
      <h3>{name}</h3>
      <p>
        Population:<b>{population}</b>
      </p>
      <p>
        Region:<b>{region}</b>
      </p>
      <p>
        Capital:<b>{capital}</b>
      </p>
    </div>
  </Link>
  )
}
