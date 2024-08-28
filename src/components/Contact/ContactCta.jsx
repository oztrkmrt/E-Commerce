import { faArrowTurnDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactCta = () => {
    return (
        <div className="bg-white p-10 flex flex-col items-center gap-2 my-14">
            <FontAwesomeIcon icon={faArrowTurnDown} className="text-5xl" style={{ color: "#23A6F0", }} />
            <h6 className="text-[#252B42] font-bold">WE CAN'T WAIT TO MEET YOU</h6>
            <h2 className="text-[#252B42] font-bold text-5xl my-4">Let's Talk</h2>
            <button className="border bg-[#23A6F0] font-bold text-[#FFFFFF] py-3 px-4 rounded-md">Try it free now</button>
        </div>
    )
}

export default ContactCta;