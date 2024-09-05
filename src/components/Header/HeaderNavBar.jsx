import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons'
import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


const HeaderNavBar = () => {

    const [isOpen, setIsOpen] = useState(false)
    const history = useHistory();

    const { user } = useSelector(state => state.client);

    return (
        <div className='flex justify-between'>
            <span className="font-bold text-2xl px-10 py-6 text-[#252B42] cursor-pointer" onClick={() => history.push("/")}>Brand</span>
            <div className='flex items-center px-8 py-6 justify-between cursor-pointer relative md:hidden' onClick={() => setIsOpen((prev) => !prev)}>
                <FontAwesomeIcon className='px-4' icon={faBars} />
                {isOpen && (
                    <div className='absolute top-full right-0 mt-2 z-50'>
                        <div className='flex flex-col gap-4 p-4'>
                            {user && user.name ? (
                                <div className='flex items-center gap-4'>
                                    <FontAwesomeIcon icon={faUser} style={{ color: "#23A6F0", }} />
                                    <span className='text-[#23A6F0] font-medium'>{user.name}</span>
                                </div>
                            ) : (
                                <div className='flex items-center gap-4'>
                                    <FontAwesomeIcon icon={faUser} style={{ color: "#23A6F0", }} />
                                    <Link to="/login" className='text-[#23A6F0] font-medium'>Login</Link>
                                    <span className='text-[#23A6F0] font-medium'> / </span>
                                    <Link to="/signup" className='text-[#23A6F0] font-medium'>Register</Link>
                                </div>
                            )}

                            <div className='flex gap-6 items-center'>
                                <FontAwesomeIcon href='#' icon={faMagnifyingGlass} style={{ color: "#23A6F0", }} />
                                <FontAwesomeIcon icon={faCartShopping} style={{ color: "#23A6F0", }} />
                                <FontAwesomeIcon icon={faHeart} style={{ color: "#23A6F0", }} />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default HeaderNavBar;