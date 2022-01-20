import { NavLink } from "react-router-dom";

function About() {
    return (
        <figure id="about" className="content about myScroll">
            <div className="imgBox"></div>
                <div className="floatingBox">
                    <div className="txtBox">
                        <h1>ABOUT US</h1>
                        <h2>GREAT BUSINESS COMSE WITH<br />GRAET SHOWCASING.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, placeat dolore? Delectus facilis animi explicabo atque doloremque tempore magnam odio!</p>
                        <NavLink to="/aboutUs" className="btnMore">Learn More <i className="fas fa-long-arrow-alt-right"></i></NavLink>
                    </div>

                </div>
        </figure>
    )
}

export default About;