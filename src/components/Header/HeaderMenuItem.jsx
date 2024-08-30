import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons'
import { Link, useHistory } from 'react-router-dom'
import { ChevronDown, ChevronUp } from 'lucide-react'
import React, { useState } from 'react'


const HeaderMenuItem = () => {

    const [isOpen, setIsOpen] = useState(false)
    const history = useHistory();

    return (

        <div className='flex flex-col justify-between items-center md:flex-row md:w-full'>
            <div className='flex flex-col text-3xl pb-20 items-center md:flex-row md:py-0 md:gap-6 md:text-xl md:font-medium'>
                <Link to={"/"} className="py-4 text-[#737373]">Home</Link>
                <div className='flex items-center text-[#737373] cursor-pointer relative' onClick={() => setIsOpen((prev) => !prev)}>
                    <Link to="/shop" className="py-4 ">Shop</Link>
                    {!isOpen ? (
                        <ChevronDown className='hidden md:block' size={20} />
                    ) : (
                        <ChevronUp className='hidden md:block' size={20} />
                    )}
                    {isOpen && (
                        <div className='bg-white absolute flex top-10 pt-4 z-50 p-10 gap-20 hidden md:flex'>
                            <div className='flex flex-col gap-4 mt-4'>
                                <p className='cursor-pointer text-[#252B42] mb-8' to={"/shop"}>Kadın</p>
                                <Link>View All</Link>
                                <Link>Bags</Link>
                                <Link>Belts</Link>
                                <Link>Cosmetics</Link>
                                <Link>Bags</Link>
                            </div>
                            <div className='flex flex-col gap-4 mt-4'>
                                <p className='cursor-pointer text-[#252B42] mb-8'>Erkek</p>
                                <Link>View All</Link>
                                <Link>Bags</Link>
                                <Link>Belts</Link>
                                <Link>Cosmetics</Link>
                                <Link>Bags</Link>
                            </div>
                        </div>
                    )}
                </div>
                <Link to="/about" className="py-4 text-[#737373]">About</Link>
                <Link to="/team" className="py-4 text-[#737373]">Team</Link>
                <Link to="/contact" className="py-4 text-[#737373]">Contact</Link>
            </div>
            <div className='hidden md:flex text-xl gap-8'>
                <div className='flex items-center gap-2'>
                    <FontAwesomeIcon icon={faUser} style={{ color: "#23A6F0", }} />
                    <span className='text-[#23A6F0] font-medium'>Login / Register</span>
                </div>
                <div className='flex gap-6 items-center'>
                    <FontAwesomeIcon href='#' icon={faMagnifyingGlass} style={{ color: "#23A6F0", }} />
                    <FontAwesomeIcon icon={faCartShopping} style={{ color: "#23A6F0", }} />
                    <FontAwesomeIcon icon={faHeart} style={{ color: "#23A6F0", }} />
                </div>

            </div>

        </div>


    )
}

export default HeaderMenuItem;