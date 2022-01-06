import { NavLink } from "react-router-dom";

function AboutUs() {
    return (
        <section className="content aboutUs">
            <div className="subTitle">
                <div className="inner">
                    <h1><NavLink to="/aboutUs">AboutUs</NavLink></h1>
                </div>
            </div>
            <div className="inner">
                <atrticle className="aboutBox1">
                    <h1>GREAT BUSINESS COMES WITH GREAT SHOWCASING</h1>
                    <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In quasi voluptas, molestiae quod eligendi accusantium ipsam recusandae deserunt modi consequatur.</h2>

                    <div className="flotingBox">
                        <div className="txtBox">
                            <h3>Are you planning to take your business to the next level? Let's make your website ready!</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eius quae totam dolore blanditiis dolor culpa rem velit, exercitationem reiciendis aut, esse, illum soluta iusto mollitia necessitatibus est.<br />
                                Aperiam nihil placeat porro quia sit tempora, soluta eius ex corporis, tenetur debitis, doloremque esse temporibus! Autem, libero! Illum obcaecati quis eligendi odit asperiores consequuntur repudiandae commodi maiores ullam numquam velit molestiae, voluptas adipisci! Quos voluptatem odit cupiditate consectetur ipsum sed perferendis ut reprehenderit nisi.<br />
                                in non asperiores iusto eligendi ad tempora dolorem repellat sit quasi enim laborum distinctio perspiciatis vel aliquid vitae? Quo blanditiis magnam praesentium consequatur fuga sint, vero dolore!</p>
                        </div>
                    </div>
                    <div className="flotingBox">
                        <div className="txtBox">
                            <h3>Are you planning to take your business to the next level? Let's make your website ready!</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eius quae totam dolore blanditiis dolor culpa rem velit, exercitationem reiciendis aut, esse, illum soluta iusto mollitia necessitatibus est.<br />
                                Aperiam nihil placeat porro quia sit tempora, soluta eius ex corporis, tenetur debitis, doloremque esse temporibus! Autem, libero! Illum obcaecati quis eligendi odit asperiores consequuntur repudiandae commodi maiores ullam numquam velit molestiae, voluptas adipisci! Quos voluptatem odit cupiditate consectetur ipsum sed perferendis ut reprehenderit nisi.<br />
                                in non asperiores iusto eligendi ad tempora dolorem repellat sit quasi enim laborum distinctio perspiciatis vel aliquid vitae? Quo blanditiis magnam praesentium consequatur fuga sint, vero dolore!</p>
                        </div>
                    </div>


                    <div className="">
                        <div>
                            <i class="fas fa-medal"></i>
                            <h4>TOP QUALITY SERVICE</h4>
                        </div>
                        <div>
                            <i class="fas fa-users-cog"></i>
                            <h4>EXPERT TEAM</h4>
                        </div>
                        <div>
                            <i class="fas fa-calculator"></i>
                            <h4>MARKET BEST PRICING</h4>
                        </div>
                        <div>
                            <i class="fas fa-truck"></i>
                            <h4>ONTIME DELVERY</h4>
                        </div>
                    </div>
                </atrticle>

                <article className="aboutBox2">
                    <h1>PROCESS</h1>
                    <h2>Three steps solution</h2>
                    <div>
                        <i class="fas fa-medal"></i>
                        <h4>Order Your Service </h4>
                    </div>
                    <div>
                        <i class="fas fa-users-cog"></i>
                        <h4>Our Team Start Work</h4>
                    </div>
                    <div>
                        <i class="fas fa-calculator"></i>
                        <h4>Deliver Your Project</h4>
                    </div>
                </article>
                <article className="aboutBox2">
                    <h1>OUR TEAM</h1>
                    <h2>The Leadership Team</h2>
                    <div className="member1">
                        <div className="photo">
                            <div className="sns">
                                <ul>
                                    <li>
                                        <a href="#">
                                            <i class="fab fa-instagram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="fab fab fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="fas fa-globe-americas"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <p>Lesley Kim</p>
                        <span>CEO & Web Designer</span>
                    </div>
                    <div className="member2">
                        <div className="photo">
                            <div className="sns">
                                <ul>
                                    <li>
                                        <a href="#">
                                            <i class="fab fa-instagram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="fab fab fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="fas fa-globe-americas"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <p>Ben Affleck</p>
                        <span>CEO &amp; UI Designer</span>
                    </div>
                    <div className="member3">
                        <div className="photo">
                            <div className="sns">
                                <ul>
                                    <li>
                                        <a href="#">
                                            <i class="fab fa-instagram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="fab fab fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="fas fa-globe-americas"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <p>Jessica Chastain</p>
                        <span>CEO & Graphic Designer</span>
                    </div>
                </article>


            </div>
        </section>
    )
}

export default AboutUs;