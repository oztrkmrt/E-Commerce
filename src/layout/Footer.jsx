import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { useHistory } from 'react-router-dom';

const Footer = () => {

    const history = useHistory()

    return (
        <div className='md:px-20 md:flex md:flex-col'>
            <div>
                <div className='mx-10 py-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between' >
                    <h3 className='font-bold text-3xl text-[#252B42] cursor-pointer' onClick={() => history.push("/")} >Brand</h3>
                    <div className='flex gap-2'>
                        <FontAwesomeIcon icon={faFacebook} style={{ color: "#74C0FC", }} className='text-xl' />
                        <FontAwesomeIcon icon={faInstagram} style={{ color: "#74C0FC", }} className='text-xl' />
                        <FontAwesomeIcon icon={faXTwitter} style={{ color: "#74C0FC", }} className='text-xl' />
                    </div>
                </div>
            </div>
            <div className='mx-10 mt-6 flex flex-col gap-2 md:flex-row md: justify-between'>
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
                <div className='flex flex-col gap-4 my-8'>
                    <h5 className='font-bold text-2xl text-[#252B42]'>Get In Touch</h5>
                    <form className="my-4 flex">
                        <input
                            type="text"
                            placeholder="Your Email"
                            className="px-6 py-3 bg-[#F9F9F9] border-2 rounded-l-md focus:outline-none font-base text-[#737373]"
                        />
                        <button
                            type="submit"
                            className="px-6 py-3 bg-[#23A6F0] text-white rounded-r-md font-bold"
                        >
                            Subscribe
                        </button>
                    </form>
                    <p className="font-base text-sm text-[#737373] font-normal">
                        Lore imp sum dolor Amit
                    </p>
                </div>

            </div>
            <div className='text-center bg-[#FAFAFA] py-10 md:text-start md:px-10'>
                <p className='text-[#737373] font-medium'>
                    Made With Love By <br className='md:hidden' />
                    Finland All Right Reserved
                </p>
            </div>
        </div>
    );
};

export default Footer;