import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { getCategories } from '@/redux/slices/productSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCartShopping, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons'
import { ChevronDown, ChevronUp } from 'lucide-react'
import GravatarImage from '@/gravatar/GravatarImage'
import { logoutUser } from '@/redux/thunk/authThunk'

const HeaderMenuItem = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [isCartOpen, setIsCartOpen] = useState(false)
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    const dropdownRef = useRef(null);
    const cartRef = useRef(null);

    const { user } = useSelector(state => state.client);
    const { categories } = useSelector(state => state.product);
    const { cart } = useSelector(state => state.shoppingCart);

    const totalItems = cart.reduce((total, item) => total + item.count, 0);
    const totalPrice = cart.reduce((total, item) => total + (item.product.price * item.count), 0);

    const maleCategories = categories.filter(category => category.gender === "e");
    const femaleCategories = categories.filter(category => category.gender === "k");

    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    useEffect(() => {
        setIsCartOpen(false);
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

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (cartRef.current && !cartRef.current.contains(event.target)) {
                setIsCartOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const updateDropdownPosition = () => {
            const cartIcon = document.getElementById('cartIcon');
            const cartDropdown = document.getElementById('cartDropdown');
            if (cartIcon && cartDropdown && isCartOpen) {
                const rect = cartIcon.getBoundingClientRect();
                cartDropdown.style.top = `${rect.bottom + window.scrollY}px`;
                cartDropdown.style.right = `${window.innerWidth - rect.right}px`;
            }
        };

        updateDropdownPosition();
        window.addEventListener('resize', updateDropdownPosition);
        return () => window.removeEventListener('resize', updateDropdownPosition);
    }, [isCartOpen]);

    const handleCategoryClick = (gender, category) => {
        const genderText = gender === 'k' ? 'kadin' : 'erkek';
        history.push(`/shop/${genderText}/${category.title.toLowerCase()}/${category.id}`);
        setIsOpen(false);
    };

    const handleLogout = () => {
        dispatch(logoutUser());
        history.push('/');
    };

    return (

        <div className='flex flex-col justify-between items-center md:flex-row md:w-full md:pr-20'>
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
                                            onClick={() => handleCategoryClick('erkek', category)}
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
                    <FontAwesomeIcon className='cursor-pointer' icon={faMagnifyingGlass} style={{ color: "#23A6F0" }} />
                    <div
                        id="cartIcon"
                        className='relative z-50 cursor-pointer'
                        /* ref={cartRef} */
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsCartOpen(prev => !prev);
                        }}
                    >
                        <FontAwesomeIcon icon={faCartShopping} style={{ color: "#23A6F0" }} />
                        {totalItems > 0 && (
                            <span className='absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs'>
                                {totalItems}
                            </span>
                        )}
                    </div>
                    <FontAwesomeIcon className='cursor-pointer' icon={faHeart} style={{ color: "#23A6F0" }} />
                    {user && user.name && (
                        <FontAwesomeIcon
                            className='cursor-pointer'
                            icon={faSignOutAlt}
                            style={{ color: "#23A6F0" }}
                            onClick={handleLogout}
                        />
                    )}
                </div>
                {isCartOpen && (
                    <div
                        id="cartDropdown"
                        className='fixed w-64 bg-white shadow-lg rounded-lg z-[1000]'
                        style={{ minWidth: '250px' }}
                    >
                        <div className='p-4'>
                            <h3 className='font-bold mb-2'>My Cart ({totalItems} Product)</h3>
                            {cart.map((item) => (
                                <div key={item.product.id} className='flex justify-between items-center mb-2'>
                                    <img src={item.product.images[0].url} alt={item.product.name} className='w-12 h-12 object-cover' />
                                    <div className='flex-1 ml-2'>
                                        <p className='text-sm'>{item.product.name}</p>
                                        <p className='text-xs'>Quantity: {item.count}</p>
                                    </div>
                                    <p className='text-sm font-bold'>{(item.product.price * 0.8).toFixed(2) * item.count} $</p>
                                </div>
                            ))}
                            <div className='mt-4 flex justify-between items-center'>
                                <p className='font-bold'>Total:</p>
                                <p className='font-bold'>{(totalPrice * 0.8).toFixed(2)} $</p>
                            </div>
                            <button
                                className='mt-4 w-full bg-[#23A6F0] text-white py-2 rounded z-[9999]'
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    history.push('/shopping-cart');
                                    setIsCartOpen(false);
                                }}
                            >
                                Go to Cart
                            </button>
                            <button className='mt-2 w-full bg-[#2DC071] text-white py-2 rounded' onClick={() => history.push('/create-order')}>
                                Complete Order
                            </button>
                        </div>
                    </div>
                )}

            </div>

        </div>


    )
}

export default HeaderMenuItem;