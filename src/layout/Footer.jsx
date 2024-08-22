import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div className=''>
            <div className='bg-[#FAFAFA]'>
                <div className='mx-10 py-10 flex flex-col gap-6' >
                    <h3 className='font-bold text-3xl text-[#252B42]'>Brand</h3>
                    <div className='flex gap-2'>
                        <FontAwesomeIcon icon={faFacebook} style={{ color: "#74C0FC", }} className='text-xl' />
                        <FontAwesomeIcon icon={faInstagram} style={{ color: "#74C0FC", }} className='text-xl' />
                        <FontAwesomeIcon icon={faXTwitter} style={{ color: "#74C0FC", }} className='text-xl' />
                    </div>
                </div>
            </div>
            <div className='mx-10 mt-6 flex flex-col gap-2'>
                <div className='flex flex-col gap-4 my-8'>
                    <h5 className='font-bold text-2xl text-[#252B42]'>Company Info</h5>
                    <p className='font-medium text-[#737373]'>About Us</p>
                    <p className='font-medium text-[#737373]'>Carrier</p>
                    <p className='font-medium text-[#737373]'>We are hiring</p>
                    <p className='font-medium text-[#737373]'>Blog</p>
                </div>
                <div className='flex flex-col gap-4 my-8'>
                    <h5 className='font-bold text-2xl text-[#252B42]'>Legal</h5>
                    <p className='font-medium text-[#737373]'>About Us</p>
                    <p className='font-medium text-[#737373]'>Carrier</p>
                    <p className='font-medium text-[#737373]'>We are hiring</p>
                    <p className='font-medium text-[#737373]'>Blog</p>
                </div>
                <div className='flex flex-col gap-4 my-8'>
                    <h5 className='font-bold text-2xl text-[#252B42]'>Features</h5>
                    <p className='font-medium text-[#737373]'>Business Marketing</p>
                    <p className='font-medium text-[#737373]'>User Analytic</p>
                    <p className='font-medium text-[#737373]'>Live Chat</p>
                    <p className='font-medium text-[#737373]'>Unlimited Support</p>
                </div>
                <div className='flex flex-col gap-4 my-8'>
                    <h5 className='font-bold text-2xl text-[#252B42]'>Resources</h5>
                    <p className='font-medium text-[#737373]'>IOS & Android</p>
                    <p className='font-medium text-[#737373]'>Watch a Demo</p>
                    <p className='font-medium text-[#737373]'>Customers</p>
                    <p className='font-medium text-[#737373]'>API</p>
                </div>

            </div>
            <div></div>
        </div>
    );
};

export default Footer;