import { NavLink } from "react-router-dom";

function Location() {
    return (
        <section className="content location">
            <div className="subTitle">
                <div className="inner">
                    <h1><NavLink to="/location">Location</NavLink></h1>
                </div>
            </div>
            <div className="inner">

            </div>
        </section>
    )
}

export default Location;