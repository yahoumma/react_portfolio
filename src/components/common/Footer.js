import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="inner">
        <h1>PF</h1>
        <article>
            <p>Copyright &copy; Techoners All Right reserved.</p>
            <ul>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Security</a></li>
                <li><a href="#">Site Map</a></li>
            </ul>
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
                        <i className="fas fa-globe"></i>
                        </a>
                    </li>
                </ul>
          </div>
        </article>
      
      </div>
    </footer>
  )
}

export default Footer;