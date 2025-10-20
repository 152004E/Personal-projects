import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
        </li>
        <li>
          <a href="#"><FontAwesomeIcon icon={faXTwitter} /></a>
        </li>
        <li>
          <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
        </li>
        
      </ul>
    </footer>
  );
};
