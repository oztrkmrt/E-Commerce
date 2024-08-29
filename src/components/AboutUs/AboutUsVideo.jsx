import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AboutUsVideo = () => {
    return (
        <div className="relative p-20 md:p-40">
            <img className="rounded-lg w-full" src="/images/video-image.jpg" alt="" />
            <FontAwesomeIcon
                icon={faCirclePlay}
                size="2xl"
                style={{ color: "#23A6F0" }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
        </div>
    );
}

export default AboutUsVideo;
