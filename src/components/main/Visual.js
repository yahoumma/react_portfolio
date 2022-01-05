function Visual(){
    return(
        <section className="content visual">
            <div class="imgBox">
            </div>
            <div class="imgBtns">
                <a href="#" class="btns btnMinus">
                    <i class="fas fa-minus"></i>
                </a> 
                <a href="#" class="btns btnPlus">
                    <i class="fas fa-plus"></i>
                </a>
            </div> 
            <div class="floatingBox">
                <div class="txtBox">
                    <div class="txt">
                        <h1>Stay<br/>With Techoners</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, placeat dolore? </p>
                    </div>
                </div>
                <a href="#" class="btnMore">Learn More <i class="fas fa-long-arrow-alt-right"></i></a>
            </div>
            <div class="sns">
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
                </ul>
            </div>
        </section>
    )
}

export default Visual;