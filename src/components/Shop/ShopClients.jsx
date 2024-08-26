import { faAws, faHooli, faLyft, faPiedPiperHat, faRedditAlien, faStripe } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ShopClients = () => {
    return (
        <div className="bg-[#FAFAFA] py-16">
            <div className="flex flex-col gap-6">
                <FontAwesomeIcon icon={faHooli} className="text-6xl text-[#737373]" />
                <FontAwesomeIcon icon={faLyft} className="text-6xl text-[#737373]" />
                <FontAwesomeIcon icon={faPiedPiperHat} className="text-6xl text-[#737373]" />
                <FontAwesomeIcon icon={faStripe} className="text-6xl text-[#737373]" />
                <FontAwesomeIcon icon={faAws} className="text-6xl text-[#737373]" />
                <FontAwesomeIcon icon={faRedditAlien} className="text-6xl text-[#737373]" />
            </div>
        </div>
    )
}

export default ShopClients;