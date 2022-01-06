import { NavLink } from "react-router-dom";

function Login(){
    return(
        <section className="content login">
        <div className="subTitle">
            <div className="inner">
              <h1><NavLink to="/login">Login</NavLink></h1>
            </div>
        </div>
        <div className="inner">
       
        </div>
        </section>
    )
}

export default Login;