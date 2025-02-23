import './CountryDetailShimmer.css'
import { Link} from "react-router";

export default function CountryDetailShimmer() {
  return (
    <>
    <main>
            <div className="backbutton">
                <Link to="/" className="back button">
                    
                </Link>
            </div>
            <div className="maindiv">
                <div className="img_content img">
                   
                </div>
                <div className="details_content">
                    <div className="first_box">
                        <div className="sub_firstBox">
                            <h2 className='head'>&nbsp;</h2>
                            <p className='data'>
                            &nbsp;
                            </p>
                            <p className='data'>
                            &nbsp;
                            </p>
                            <p className='data'>
                            &nbsp;
                            </p>
                            <p className='data'>
                            &nbsp;
                            </p>
                            <p className='data'>
                            &nbsp;
                            </p>
                        </div>
                        <div className="sub_secondBox">
                            <p className='data'>
                            &nbsp;
                            </p>
                            <p className='data'>
                            &nbsp;
                            </p>
                            <p className='data'>
                            &nbsp;
                            </p>
                        </div>
                    </div>
                    <div className="second_box">
                        <p className='data'>&nbsp;</p>
                        &nbsp;
                    </div>
                </div>
            </div>
        </main>
        </>
  )
}
