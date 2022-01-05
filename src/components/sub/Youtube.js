import { NavLink } from "react-router-dom";

function Youtube(){
    return(
        <section className="content youtube">
        <div className="subTitle">
            <div className="inner">
              <h1><NavLink to="/youtube">Youtube</NavLink></h1>
            </div>
        </div>
        <div className="inner">
       
        </div>
        </section>
    )
}

export default Youtube;