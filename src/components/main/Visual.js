import { useEffect, useRef } from 'react';
function Visual() {
    return (
        <figure id="visual" className="content visual myScroll">
            <div className="imgBox">
            </div>
            <div className="bgBox">
            </div>
            {/*
            <div className="imgBtns">
                <a href="#" className="btns btnMinus">
                    <i className="fas fa-minus"></i>
                </a>
                <a href="#" className="btns btnPlus">
                    <i className="fas fa-plus"></i>
                </a>
            </div>
            */}
            <div className="floatingBox">
                <div className="txtBox">
                    <div className="txt">
                        <h1>Stay<br />With Techoners</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, placeat dolore? </p>
                    </div>
                </div>
                <a href="#" className="btnMore">Learn More <i className="fas fa-long-arrow-alt-right"></i></a>
            </div>
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
        </figure>        
    )
}

export default Visual;