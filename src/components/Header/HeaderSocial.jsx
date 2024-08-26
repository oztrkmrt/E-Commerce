import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faInstagram, faYoutube, faFacebook, faXTwitter } from '@fortawesome/free-brands-svg-icons'

const HeaderSocial = () => {
    return (
        <div className="hidden md:flex bg-[#252B42] text-[#FFFFFF] px-20 py-6 font-medium justify-between">
            <div className='flex items-center gap-2'>
                <FontAwesomeIcon icon={faPhone} style={{ color: "#FFFFFF", }} />
                <span>(225) 555-0118</span>
            </div>
            <div className='flex items-center gap-2'>
                <FontAwesomeIcon icon={faEnvelope} />
                <span>shopping.brand@example.com</span>
            </div>
            <div>
                Follow Us  and get a chance to win 80% off
            </div>
            <div className='flex gap-2'>
                <p>
                    Follow Us :
                </p>
                <div className='flex items-center gap-2'>
                    <FontAwesomeIcon icon={faInstagram} />
                    <FontAwesomeIcon icon={faYoutube} />
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faXTwitter} />
                </div>
            </div>
        </div>
    );
};


export default HeaderSocial;