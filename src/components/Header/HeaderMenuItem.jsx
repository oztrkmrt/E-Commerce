import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { getCategories } from '@/redux/slices/productSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons'
import { ChevronDown, ChevronUp } from 'lucide-react'
import GravatarImage from '@/gravatar/GravatarImage'

const HeaderMenuItem = () => {

    const [isOpen, setIsOpen] = useState(false)
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    const dropdownRef = useRef(null);

    const { user } = useSelector(state => state.client);

    const { categories } = useSelector(state => state.product);

    const maleCategories = categories.filter(category => category.gender === "e");
    const femaleCategories = categories.filter(category => category.gender === "k");

    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleCategoryClick = (gender, category) => {
        const genderText = gender === 'k' ? 'kadin' : 'erkek';
        history.push(`/shop/${genderText}/${category.title.toLowerCase()}/${category.id}`);
        setIsOpen(false);
    };

    return (

        <div className='flex flex-col justify-between items-center md:flex-row md:w-full'>
            <div className='flex flex-col text-3xl pb-20 items-center md:flex-row md:py-0 md:gap-6 md:text-xl md:font-medium'>
                <Link to={"/"} className="py-4 text-[#737373]">Home</Link>
                <div className='flex items-center text-[#737373] cursor-pointer relative' ref={dropdownRef}>
                    <Link to="/shop" className="py-4 ">Shop</Link>
                    <div onClick={() => setIsOpen((prev) => !prev)}>
                        {!isOpen ? (
                            <ChevronDown className='hidden md:block' size={20} />
                        ) : (
                            <ChevronUp className='hidden md:block' size={20} />
                        )}
                    </div>
                    {isOpen && (
                        <div className='bg-white absolute flex top-10 pt-4 z-50 p-10 gap-20 hidden md:flex'>
                            <div className='flex flex-col gap-4 mt-4'>
                                <p className='cursor-pointer text-[#252B42] mb-8'>Kadın</p>
                                {
                                    femaleCategories.map((category) => (
                                        <span
                                            key={category.id}
                                            onClick={() => handleCategoryClick('k', category)}
                                            className="hover:underline cursor-pointer"
                                        >{category.title}</span>
                                    ))
                                }
                            </div>
                            <div className='flex flex-col gap-4 mt-4'>
                                <p className='cursor-pointer text-[#252B42] mb-8'>Erkek</p>
                                {
                                    maleCategories.map((category) => (
                                        <span
                                            key={category.id}
                                            onClick={() => handleCategoryClick('erkek', category.title, category.id)}
                                            className="hover:underline cursor-pointer"
                                        >{category.title}</span>
                                    ))
                                }
                            </div>
                        </div>
                    )}
                </div>
                <Link to="/about" className="py-4 text-[#737373]">About</Link>
                <Link to="/team" className="py-4 text-[#737373]">Team</Link>
                <Link to="/contact" className="py-4 text-[#737373]">Contact</Link>
            </div>


            <div className='hidden md:flex text-xl gap-8'>
                {user && user.name ? (
                    <div className='flex items-center gap-2'>
                        <FontAwesomeIcon icon={faUser} style={{ color: "#23A6F0", }} />
                        <span className='text-[#23A6F0] font-medium'>{user.name}</span>
                        <GravatarImage email={user.email} size={25} />
                    </div>
                ) : (
                    <div className='flex items-center gap-2'>
                        <FontAwesomeIcon icon={faUser} style={{ color: "#23A6F0", }} />
                        <Link to="/login" className='text-[#23A6F0] font-medium hover:underline'>Login</Link>
                        <span className='text-[#23A6F0] font-medium'>/</span>
                        <Link to="/signup" className='text-[#23A6F0] font-medium hover:underline'>Register</Link>
                    </div>
                )}
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