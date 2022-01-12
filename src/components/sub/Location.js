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
                <h1> CONTACT US</h1>
                <h2>Get it touch and let us know how we can help</h2>
                <div className="contactBox">
                    <article className="map">
                    
                    </article>
                    <div className="connect">
                        <div className="sns">
                            <h3>Connect</h3>
                            <ul>
                                <li>
                                    <a href="#">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fab fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fas fa-globe-americas"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="emailForm">
                            <h3>Send &amp; Request</h3>
                            <form>
                            <fieldset>
                                <legend className="h">email send &amp; request form</legend>
                                <table>
                                    <caption className="h">email form</caption>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <input type="text" id="name" name="name" placeholder="Your Name" />
                                            </td>
                                            <td>
                                                <input type="email" id="email" name="email" placeholder="Your Email" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="2">
                                                <textarea name="request" id="request" placeholder="Your Request"></textarea>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="2">
                                                <input type="submit" value="SEND" className="btnSend" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </fieldset>
                        </form>
                        </div>
                    
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Location;