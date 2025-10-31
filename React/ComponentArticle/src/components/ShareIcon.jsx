import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faPinterestP } from "@fortawesome/free-brands-svg-icons";

import { ShareButton } from "./ShareButton";

export const ShareIcon = () => {
  return (
    <div className="flex justify-around items-center h-16  bg-Very-Dark-Grayish-Blue text-Light-Grayish-Blue absolute bottom-0 w-full"   >
      <div className="flex gap-5 tracking-[5px] ">
        <p className="uppercase ">share</p>
        <ul className="flex gap-3 text-[18px]">
          <li>
            <a className="socialIcons" href="">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
          <li>
            <a className="socialIcons" href="">
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
          </li>
          <li>
            <a className="socialIcons" href="">
              <FontAwesomeIcon icon={faPinterestP} />
            </a>
          </li>
        </ul>
      </div>

      <ShareButton />
    </div>
  );
};
