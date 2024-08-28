import { faFacebook, faInstagram, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialMediaIcons = () => {
    return (
        <div className="flex gap-6">
            <FontAwesomeIcon icon={faXTwitter} style={{ color: "#252B42", }} size="xl" />
            <FontAwesomeIcon icon={faFacebook} style={{ color: "#252B42", }} size="xl" />
            <FontAwesomeIcon icon={faInstagram} style={{ color: "#252B42", }} size="xl" />
            <FontAwesomeIcon icon={faLinkedin} style={{ color: "#252B42", }} size="xl" />
        </div>
    )
}

export default SocialMediaIcons;