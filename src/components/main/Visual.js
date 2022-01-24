import { useEffect, useRef } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';

function Visual() {
    return (
        <figure id="visual" className="content visual myScroll">
            <div className="imgBox">
            </div>
            <div className="bgBox">
            </div>
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