import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <footer>
      <ul className="flex gap-4 place-content-center mb-10 "> 
        <li>
          <a className="redesSociales" href="#"><FontAwesomeIcon icon={faFacebook} /></a>
        </li>
        <li>
          <a className="redesSociales" href="#"><FontAwesomeIcon icon={faXTwitter} /></a>
        </li>
        <li>
          <a className="redesSociales" href="#"><FontAwesomeIcon icon={faInstagram} /></a>
        </li>
        
      </ul>
      <p className="text-center text-Gray-400 lg:text-xl">© 2025 Kisame15. Todos los derechos reservados.</p>
    </footer>
  );
};
