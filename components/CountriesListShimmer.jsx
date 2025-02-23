import './CountriesListShimmer.css'

export default function CountriesListShimmer() {
    // const array=new Array(10).fill(1);
    const mapped = Array.from({ length: 12 }).map((el,i) => {
        return <div key={i} className="country shimmer"></div>;
    })
  

    return (
        <div className="countries-container">
        {mapped}
        </div>

    )
}
