import { faLocationDot, faPaperPlane, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactBody = () => {
    return (
        <div className="bg-[#FAFAFA] p-10 flex flex-col gap-6">
            <div className="text-[#252B42] flex flex-col gap-6 py-10">
                <h6 className="font-bold text-center">VISIT OUR OFFICE</h6>
                <h2 className="text-3xl font-bold text-center">We help small businesses
                    with big ideas</h2>
            </div>
            <div className="flex flex-col md:flex-row md:justify-center">
                <div className="bg-white p-10 flex flex-col items-center gap-2">
                    <FontAwesomeIcon icon={faPhone} className="text-5xl" style={{ color: "#23A6F0", }} />
                    <h6 className="text-[#252B42] font-bold">georgia.young@example.com</h6>
                    <h6 className="text-[#252B42] font-bold">georgia.young@ple.com</h6>
                    <h5 className="text-[#252B42] font-bold text-xl my-4">Get Support</h5>
                    <button className="border border-[#23A6F0] font-bold text-[#23A6F0] py-3 px-4 rounded-md">Submit Request</button>
                </div>
                <div className="bg-[#252B42] p-10 flex flex-col items-center gap-2">
                    <FontAwesomeIcon icon={faLocationDot} className="text-5xl" style={{ color: "#23A6F0", }} />
                    <h6 className="text-white font-bold">georgia.young@example.com</h6>
                    <h6 className="text-white font-bold">georgia.young@ple.com</h6>
                    <h5 className="text-white font-bold text-xl my-4">Get Support</h5>
                    <button className="border border-[#23A6F0] font-bold text-[#23A6F0] py-3 px-4 rounded-md">Submit Request</button>
                </div>
                <div className="bg-white p-10 flex flex-col items-center gap-2">
                    <FontAwesomeIcon icon={faPaperPlane} className="text-5xl" style={{ color: "#23A6F0", }} />
                    <h6 className="text-[#252B42] font-bold">georgia.young@example.com</h6>
                    <h6 className="text-[#252B42] font-bold">georgia.young@ple.com</h6>
                    <h5 className="text-[#252B42] font-bold text-xl my-4">Get Support</h5>
                    <button className="border border-[#23A6F0] font-bold text-[#23A6F0] py-3 px-4 rounded-md">Submit Request</button>
                </div>
            </div>
        </div>
    )
}

export default ContactBody;