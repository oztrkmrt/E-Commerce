import { faFacebook, faInstagram, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialMediaIcons = ({ color = "#252B42", size = "xl" }) => {
    return (
        <div className="flex gap-6">
            <FontAwesomeIcon icon={faXTwitter} style={{ color: color }} size={size} />
            <FontAwesomeIcon icon={faFacebook} style={{ color: color }} size={size} />
            <FontAwesomeIcon icon={faInstagram} style={{ color: color }} size={size} />
            <FontAwesomeIcon icon={faLinkedin} style={{ color: color }} size={size} />
        </div>
    );
};

export default SocialMediaIcons;