import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons'

const HeaderNavBar = () => {
    return (
        <div className='flex justify-between'>
            <span className="font-bold text-2xl px-8 py-6 text-[#252B42] ">Brand</span>
            <div className='flex items-center px-8 py-6 justify-between'>
                <FontAwesomeIcon className='px-4' href='#' icon={faMagnifyingGlass} />
                <FontAwesomeIcon className='px-4' icon={faCartShopping} />
                <FontAwesomeIcon className='px-4' icon={faBars} />
            </div>
        </div>
    )
}

export default HeaderNavBar;