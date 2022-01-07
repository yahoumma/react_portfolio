function Contact() {
    return (
        <section className="content contact">
            <div className="inner">
                <h1>CONTACT US</h1>
                <div className="wrap">
                    <article>
                        <ul>
                            <li>Email : tsjsyayh@gmail.com</li>
                            <li>Call : +82 10-5656-5610</li>
                            <li>
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
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </article>
                    <article>
                        <ul>
                            <li><a href="#">Terms of Service</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Site Map</a></li>
                        </ul>
                    </article>
                    <article>
                        <span>ADDRESS</span>
                        <address>suinro3312-16,Gangnam-Gu,Seoul-Si</address>
                        <div className="btns">
                            <a href="#" className="btnMore">Live Chat More <i className="fas fa-long-arrow-alt-right"></i></a>
                            <a href="#" className="btnUp"><i className="fas fas fa-long-arrow-alt-up"></i></a>
                        </div>
                    </article>

                </div>
            </div>
        </section>
    )
}

export default Contact;