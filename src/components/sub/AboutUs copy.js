import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function AboutUs() {
    const team = [
        {
            name: "Lesley Kim",
            position: "CEO & Web Designer",
            img: process.env.PUBLIC_URL+"/img/team1.jpg",
        },
        {
            name: "Ben Affleck",
            position: "CEO & UI Designer",
            img: process.env.PUBLIC_URL+"/img/team2.jpg",
        },
        {
            name: "Jessica Chastain",
            position: "CEO & Graphic Designer",
            img: process.env.PUBLIC_URL+"/img/team3.jpg",
        }
    ]
   // const [team, setTeam] = useState(team[0]);

    return (
        <section className="content aboutUs">
            <div className="subTitle">
                <div className="inner">
                    <h1><NavLink to="/aboutUs">AboutUs</NavLink></h1>
                </div>
            </div>
            <div className="inner">
                <h1>GREAT BUSINESS COMES WITH GREAT SHOWCASING</h1>
                <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, eum.  <br /> In quasi voluptas, molestiae quod eligendi accusantium ipsam recusandae deserunt modi consequatur.</h2>
                <atrticle className="aboutBox">
                    <div className="about1">
                        <div className="txtBox">
                            <h2>Are you planning to take your business to the next level? Let's make your website ready!</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eius quae totam dolore blanditiis dolor culpa rem velit, exercitationem reiciendis aut, esse, illum soluta iusto mollitia necessitatibus est.<br />
                                Aperiam nihil placeat porro quia sit tempora, soluta eius ex corporis, tenetur debitis, doloremque esse temporibus! Autem, libero! Illum obcaecati quis eligendi odit asperiores consequuntur repudiandae commodi maiores ullam numquam velit molestiae, voluptas adipisci! Quos voluptatem odit cupiditate consectetur ipsum sed perferendis ut reprehenderit nisi.
                            </p>
                        </div>
                    </div>
                    <div className="about1">
                        <div className="txtBox">
                            <h2>Are you planning to take your business to the next level? Let's make your website ready!</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eius quae totam dolore blanditiis dolor culpa rem velit, exercitationem reiciendis aut, esse, illum soluta iusto mollitia necessitatibus est.<br />
                                Aperiam nihil placeat porro quia sit tempora, soluta eius ex corporis, tenetur debitis, doloremque esse temporibus! Autem, libero! Illum obcaecati quis eligendi odit asperiores consequuntur repudiandae commodi maiores ullam numquam velit molestiae, voluptas adipisci! Quos voluptatem odit cupiditate consectetur ipsum sed perferendis ut reprehenderit nisi.</p>
                        </div>
                    </div>
                </atrticle>
                <div className="aboutBox">
                    <div className="box">
                        <i className="fas fa-medal"></i>
                        <h3>TOP QUALITY<br />SERVICE</h3>
                    </div>
                    <div className="box">
                        <i className="fas fa-users-cog"></i>
                        <h3>EXPERT<br />TEAM</h3>
                    </div>
                    <div className="box">
                        <i className="fas fa-calculator"></i>
                        <h3>MARKET BEST<br />PRICING</h3>
                    </div>
                    <div className="box">
                        <i className="fas fa-truck"></i>
                        <h3>ONTIME<br />DELVERY</h3>
                    </div>
                </div>
                <h1>PROCESS</h1>
                <h2>Three steps solution</h2>
                <article className="aboutBox">
                    <div className="box">
                        <i className="fas fa-medal"></i>
                        <h3>Order Your Service </h3>
                    </div>
                    <div className="box">
                        <i className="fas fa-users-cog"></i>
                        <h3>Our Team Start Work</h3>
                    </div>
                    <div className="box">
                        <i className="fas fa-calculator"></i>
                        <h3>Deliver Your Project</h3>
                    </div>
                </article>
                <h1>OUR TEAM</h1>
                <h2>The Leadership Team</h2>
                <article className="aboutBox">
                    <div className="member">
                        <div className="photo">
                            <div className="sns">
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
                        </div>
                        <h4>Lesley Kim</h4>
                        <span>CEO & Web Designer</span>
                    </div>
                    <div className="member">
                        <div className="photo">
                            <div className="sns">
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
                        </div>
                        <h4>Ben Affleck</h4>
                        <span>CEO &amp; UI Designer</span>
                    </div>
                    <div className="member">
                        <div className="photo">
                            <div className="sns">
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
                        </div>
                        <h4>Jessica Chastain</h4>
                        <span>CEO & Graphic Designer</span>
                    </div>
                </article>


            </div>
        </section>
    )
}

export default AboutUs;