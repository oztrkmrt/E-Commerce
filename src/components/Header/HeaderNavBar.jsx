import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons'
import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons'
import { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const HeaderNavBar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isCartOpen, setIsCartOpen] = useState(false)
    const history = useHistory();
    const { user } = useSelector(state => state.client);
    const { cart } = useSelector(state => state.shoppingCart);

    const totalItems = cart.reduce((total, item) => total + item.count, 0);
    const totalPrice = cart.reduce((total, item) => total + (item.product.price * item.count), 0);

    return (
        <div className='flex justify-between relative'>
            <span className="font-bold text-2xl px-10 py-6 text-[#252B42] cursor-pointer" onClick={() => history.push("/")}>Brand</span>
            <div className='flex items-center px-8 py-6 justify-between cursor-pointer relative'>
                <div className='flex items-center gap-4 md:hidden'>
                    <FontAwesomeIcon href='#' icon={faMagnifyingGlass} style={{ color: "#23A6F0" }} />
                    <div className='relative' onClick={() => setIsCartOpen(!isCartOpen)}>
                        <FontAwesomeIcon icon={faCartShopping} style={{ color: "#23A6F0" }} />
                        {totalItems > 0 && (
                            <span className='absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs'>
                                {totalItems}
                            </span>
                        )}
                    </div>
                    <FontAwesomeIcon icon={faHeart} style={{ color: "#23A6F0" }} />
                </div>
                <FontAwesomeIcon className='px-4 md:hidden' icon={faBars} onClick={() => setIsOpen(!isOpen)} />
                {isCartOpen && (
                    <div className='absolute top-full right-0 mt-2 w-64 bg-white shadow-lg rounded-lg z-50'>
                        <div className='p-4'>
                            <h3 className='font-bold mb-2'>Sepetim ({totalItems} Ürün)</h3>
                            {cart.map((item) => (
                                <div key={item.product.id} className='flex justify-between items-center mb-2'>
                                    <img src={item.product.images[0].url} alt={item.product.name} className='w-12 h-12 object-cover' />
                                    <div className='flex-1 ml-2'>
                                        <p className='text-sm'>{item.product.name}</p>
                                        <p className='text-xs'>Adet: {item.count}</p>
                                    </div>
                                    <p className='text-sm font-bold'>{item.product.price * item.count} TL</p>
                                </div>
                            ))}
                            <div className='mt-4 flex justify-between items-center'>
                                <p className='font-bold'>Toplam:</p>
                                <p className='font-bold'>{totalPrice.toFixed(2)} TL</p>
                            </div>
                            <button className='mt-4 w-full bg-[#23A6F0] text-white py-2 rounded' onClick={() => history.push('/cart')}>
                                Sepete Git
                            </button>
                            <button className='mt-2 w-full bg-[#2DC071] text-white py-2 rounded' onClick={() => history.push('/checkout')}>
                                Siparişi Tamamla
                            </button>
                        </div>
                    </div>
                )}
            </div>
            {isOpen && (
                <div className='absolute top-full right-0 mt-2 z-50 md:hidden'>
                    <div className='flex flex-col gap-4 p-4 bg-white shadow-lg rounded-lg'>
                        {user && user.name ? (
                            <div className='flex items-center gap-4'>
                                <FontAwesomeIcon icon={faUser} style={{ color: "#23A6F0" }} />
                                <span className='text-[#23A6F0] font-medium'>{user.name}</span>
                            </div>
                        ) : (
                            <div className='flex items-center gap-4'>
                                <FontAwesomeIcon icon={faUser} style={{ color: "#23A6F0" }} />
                                <Link to="/login" className='text-[#23A6F0] font-medium'>Login</Link>
                                <span className='text-[#23A6F0] font-medium'> / </span>
                                <Link to="/signup" className='text-[#23A6F0] font-medium'>Register</Link>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}

export default HeaderNavBar;