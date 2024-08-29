import { faAws, faHooli, faLyft, faPiedPiperHat, faRedditAlien, faStripe } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ClientIcons = () => {
    return (
        <div className="bg-[#FAFAFA] py-16">
            <div className="flex flex-col gap-6 md:flex-row md:justify-between md:px-20">
                <FontAwesomeIcon icon={faHooli} className="text-7xl text-[#737373]" />
                <FontAwesomeIcon icon={faLyft} className="text-7xl text-[#737373]" />
                <FontAwesomeIcon icon={faPiedPiperHat} className="text-7xl text-[#737373]" />
                <FontAwesomeIcon icon={faStripe} className="text-7xl text-[#737373]" />
                <FontAwesomeIcon icon={faAws} className="text-7xl text-[#737373]" />
                <FontAwesomeIcon icon={faRedditAlien} className="text-7xl text-[#737373]" />
            </div>
        </div>
    )
}

export default ClientIcons;