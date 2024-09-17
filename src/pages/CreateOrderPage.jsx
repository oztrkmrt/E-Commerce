import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import {
    fetchAddresses, deleteAddress,
    addNewAddress, updateExistingAddress,
    setSelectedAddress, fetchCards,
    addNewCard
} from '@/redux/slices/clientSlice';
import { useHistory } from 'react-router-dom';
import Modal from '@/Utils/Modal';

const CreateOrderPage = () => {
    const [activeTab, setActiveTab] = useState('address');
    const { cart, address } = useSelector(state => state.shoppingCart);
    const { addressList, creditCards } = useSelector(state => state.client);
    const dispatch = useDispatch();
    const history = useHistory();
    const [showModal, setShowModal] = useState(false);
    const [showCardModal, setShowCardModal] = useState(false);
    const [selectedCardId, setSelectedCardId] = useState(null);
    const [cities, setCities] = useState([]);
    const [selectedAddressId, setSelectedAddressId] = useState(null);
    const totalPrice = cart.reduce((total, item) => total + item.product.price * item.count, 0);

    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm();
    const { register: registerCard, handleSubmit: handleSubmitCard, formState: { errors: cardErrors }, reset: resetCard } = useForm();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            dispatch(fetchAddresses());
            fetchCities();
        } else {
            history.push('/login');
        }
        const authError = localStorage.getItem("authError");
        if (authError) {
            localStorage.removeItem("authError");
            history.push('/login');
        }
        dispatch(fetchCards());
    }, [history, dispatch]);

    const fetchCities = async () => {
        setCities(['İstanbul', 'Ankara', 'İzmir', 'Bursa', 'Tekirdağ']);
    };

    const handleAddAddress = async (data) => {
        try {
            await dispatch(addNewAddress(data)).unwrap();
            setShowModal(false);
            reset();
        } catch (error) {
            console.error('Adres eklenirken hata oluştu:', error);
            if (error.response && error.response.status === 401) {
                history.push('/login');
            }
        }
    };

    const handleUpdateAddress = async (data) => {
        try {
            await dispatch(updateExistingAddress(data)).unwrap();
            setShowModal(false);
        } catch (error) {
            console.error('Adres güncellenirken hata oluştu:', error);
            if (error.response && error.response.status === 401) {
                history.push('/login');
            }
        }
    };

    const handleDeleteAddress = async (addressId) => {
        try {
            await dispatch(deleteAddress(addressId)).unwrap();
        } catch (error) {
            console.error('Adres silinirken hata oluştu:', error);
            if (error.response && error.response.status === 401) {
                history.push('/login');
            }
        }
    };

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const handleSelectAddress = (addr) => {
        setSelectedAddressId(addr.id);
        dispatch(setSelectedAddress(addr));
    };

    const handleAddCard = async (data) => {
        try {
            await dispatch(addNewCard(data)).unwrap();
            setShowCardModal(false);
            resetCard();
        } catch (error) {
            console.error('Kart eklenirken hata oluştu:', error);
            if (error.response && error.response.status === 401) {
                history.push('/login');
            }
        }
    };

    const handleSelectCard = (card) => {
        setSelectedCardId(card.id);
    };

    return (
        <div className='container mx-auto px-20 py-8'>
            <div className='flex mb-4'>
                <button
                    className={`mr-4 px-4 py-2 ${activeTab === 'address' ? 'bg-orange-500 text-white' : 'bg-gray-200'}`}
                    onClick={() => handleTabChange('address')}
                >
                    Address Information
                </button>
                <button
                    className={`px-4 py-2 ${activeTab === 'payment' ? 'bg-orange-500 text-white' : 'bg-gray-200'}`}
                    onClick={() => handleTabChange('payment')}
                >
                    Payment Options
                </button>
            </div>

            {activeTab === 'address' && (
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    <div className='col-span-2'>
                        <h2 className='text-2xl font-bold mb-4'>Shipping Address</h2>
                        {[...addressList, address].filter(Boolean).map((addr, index) => (
                            <div key={index} className='mb-4 p-4 border rounded'>
                                <h3 className='font-bold'>{addr.title}</h3>
                                <p>{addr.name} {addr.surname}</p>
                                <p>{addr.phone}</p>
                                <p>{addr.city}, {addr.district}, {addr.neighborhood}</p>
                                <div className='mt-2'>
                                    <button
                                        onClick={() => handleSelectAddress(addr)}
                                        className={`bg-green-500 text-white py-1 px-2 rounded mr-2 ${addr.id === selectedAddressId ? 'opacity-50 cursor-not-allowed' : ''}`}
                                        disabled={addr.id === selectedAddressId}
                                    >
                                        {addr.id === selectedAddressId ? 'Selected' : 'Select'}
                                    </button>
                                    <button
                                        onClick={() => {
                                            setShowModal(true);
                                            setValue('id', addr.id);
                                            setValue('title', addr.title);
                                            setValue('name', addr.name);
                                            setValue('surname', addr.surname);
                                            setValue('phone', addr.phone);
                                            setValue('city', addr.city);
                                            setValue('district', addr.district);
                                            setValue('neighborhood', addr.neighborhood);
                                        }}
                                        className='bg-blue-500 text-white py-1 px-2 rounded mr-2'
                                    >
                                        Update
                                    </button>
                                    <button
                                        onClick={() => handleDeleteAddress(addr.id)}
                                        className='bg-red-500 text-white py-1 px-2 rounded'
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                        <button
                            className='bg-blue-500 text-white py-2 px-4 rounded'
                            onClick={() => setShowModal(true)}
                        >
                            Add New Address
                        </button>
                        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                            <h2 className='text-2xl font-bold mb-4'>Add New Address</h2>
                            <form onSubmit={handleSubmit(data => data.id ? handleUpdateAddress(data) : handleAddAddress(data))} className='mt-4'>
                                <div className='mb-4'>
                                    <label className='block mb-2'>Address Title</label>
                                    <input {...register('title', { required: 'This field is required.' })} className='w-full border p-2' />
                                    {errors.title && <span className='text-red-500'>{errors.title.message}</span>}
                                </div>
                                <div className='mb-4'>
                                    <label className='block mb-2'>Name</label>
                                    <input {...register('name', { required: 'This field is required.' })} className='w-full border p-2' />
                                    {errors.name && <span className='text-red-500'>{errors.name.message}</span>}
                                </div>
                                <div className='mb-4'>
                                    <label className='block mb-2'>Surname</label>
                                    <input {...register('surname', { required: 'This field is required.' })} className='w-full border p-2' />
                                    {errors.surname && <span className='text-red-500'>{errors.surname.message}</span>}
                                </div>
                                <div className='mb-4'>
                                    <label className='block mb-2'>Phone</label>
                                    <input {...register('phone', { required: 'This field is required.' })} className='w-full border p-2' />
                                    {errors.phone && <span className='text-red-500'>{errors.phone.message}</span>}
                                </div>
                                <div className='mb-4'>
                                    <label className='block mb-2'>City</label>
                                    <select {...register('city', { required: 'This field is required.' })} className='w-full border p-2'>
                                        {cities.map((city, index) => (
                                            <option key={index} value={city}>{city}</option>
                                        ))}
                                    </select>
                                    {errors.city && <span className='text-red-500'>{errors.city.message}</span>}
                                </div>
                                <div className='mb-4'>
                                    <label className='block mb-2'>District</label>
                                    <input {...register('district', { required: 'This field is required.' })} className='w-full border p-2' />
                                    {errors.district && <span className='text-red-500'>{errors.district.message}</span>}
                                </div>
                                <div className='mb-4'>
                                    <label className='block mb-2'>Neighborhood</label>
                                    <input {...register('neighborhood', { required: 'This field is required.' })} className='w-full border p-2' />
                                    {errors.neighborhood && <span className='text-red-500'>{errors.neighborhood.message}</span>}
                                </div>
                                <button type='submit' className='bg-green-500 text-white py-2 px-4 rounded'>
                                    Save Address
                                </button>
                            </form>
                        </Modal>
                    </div>
                    <div>
                        <div className="bg-gray-100 p-6 rounded-lg">
                            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                            <div className="flex justify-between mb-2">
                                <span>Product Total</span>
                                <span>${(totalPrice * 0.8).toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between mb-2">
                                <span>Shipping Cost</span>
                                <span>$20.00</span>
                            </div>
                            <div className="flex justify-between mb-2 text-green-500">
                                <span>Free Shipping on <br /> Orders Over $150</span>
                                <span>-$20.00</span>
                            </div>
                            <hr className="my-4" />
                            <div className="flex justify-between font-semibold">
                                <span>Total</span>
                                <span>${(totalPrice * 0.8).toFixed(2)}</span>
                            </div>
                            <button className="w-full bg-blue-500 text-white py-2 rounded mt-4"
                                onClick={() => history.push('/create-order')}
                            >Complete Order</button>
                            <div className="mt-4">
                                <input type="text" placeholder="Enter discount code" className="w-full p-2 border rounded" />
                                <button className="w-full bg-gray-300 text-gray-700 py-2 rounded mt-2">Apply Discount</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'payment' && (
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    <div className='col-span-2'>
                        <h2 className='text-2xl font-bold mb-4'>Payment Options</h2>
                        {creditCards.map((card, index) => (
                            <div key={index} className='mb-4 p-4 border rounded'>
                                <h3 className='font-bold'>{card.cardHolderName}</h3>
                                <p>**** **** **** {card.lastFourDigits}</p>
                                <p>Expires: {card.expirationMonth}/{card.expirationYear}</p>
                                <button
                                    onClick={() => handleSelectCard(card)}
                                    className={`bg-green-500 text-white py-1 px-2 rounded mr-2 ${card.id === selectedCardId ? 'opacity-50 cursor-not-allowed' : ''}`}
                                    disabled={card.id === selectedCardId}
                                >
                                    {card.id === selectedCardId ? 'Selected' : 'Select'}
                                </button>
                            </div>
                        ))}
                        <button
                            className='bg-blue-500 text-white py-2 px-4 rounded'
                            onClick={() => setShowCardModal(true)}
                        >
                            Add New Card
                        </button>
                        <Modal isOpen={showCardModal} onClose={() => setShowCardModal(false)}>
                            <h2 className='text-2xl font-bold mb-4'>Add New Card</h2>
                            <form onSubmit={handleSubmitCard(handleAddCard)} className='mt-4'>
                                <div className='mb-4'>
                                    <label className='block mb-2'>Card Holder Name</label>
                                    <input {...registerCard('cardHolderName', { required: 'This field is required.' })} className='w-full border p-2' />
                                    {cardErrors.cardHolderName && <span className='text-red-500'>{cardErrors.cardHolderName.message}</span>}
                                </div>
                                <div className='mb-4'>
                                    <label className='block mb-2'>Card Number</label>
                                    <input {...registerCard('cardNumber', { required: 'This field is required.', pattern: { value: /^[0-9]{16}$/, message: 'Invalid card number.' } })} className='w-full border p-2' />
                                    {cardErrors.cardNumber && <span className='text-red-500'>{cardErrors.cardNumber.message}</span>}
                                </div>
                                <div className='mb-4 flex'>
                                    <div className='w-1/2 mr-2'>
                                        <label className='block mb-2'>Expiration Month</label>
                                        <input {...registerCard('expirationMonth', { required: 'This field is required.', pattern: { value: /^(0[1-9]|1[0-2])$/, message: 'Invalid month.' } })} className='w-full border p-2' placeholder='MM' />
                                        {cardErrors.expirationMonth && <span className='text-red-500'>{cardErrors.expirationMonth.message}</span>}
                                    </div>
                                    <div className='w-1/2 ml-2'>
                                        <label className='block mb-2'>Expiration Year</label>
                                        <input {...registerCard('expirationYear', { required: 'This field is required.', pattern: { value: /^[0-9]{4}$/, message: 'Invalid year.' } })} className='w-full border p-2' placeholder='YYYY' />
                                        {cardErrors.expirationYear && <span className='text-red-500'>{cardErrors.expirationYear.message}</span>}
                                    </div>
                                </div>
                                <div className='mb-4'>
                                    <label className='block mb-2'>CVV</label>
                                    <input {...registerCard('cvv', { required: 'This field is required.', pattern: { value: /^[0-9]{3,4}$/, message: 'Invalid CVV.' } })} className='w-full border p-2' />
                                    {cardErrors.cvv && <span className='text-red-500'>{cardErrors.cvv.message}</span>}
                                </div>
                                <button type='submit' className='bg-green-500 text-white py-2 px-4 rounded'>
                                    Save Card
                                </button>
                            </form>
                        </Modal>
                    </div>
                    <div>
                        <div className="bg-gray-100 p-6 rounded-lg">
                            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                            <div className="flex justify-between mb-2">
                                <span>Product Total</span>
                                <span>${(totalPrice * 0.8).toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between mb-2">
                                <span>Shipping Cost</span>
                                <span>$20.00</span>
                            </div>
                            <div className="flex justify-between mb-2 text-green-500">
                                <span>Free Shipping on <br /> Orders Over $150</span>
                                <span>-$20.00</span>
                            </div>
                            <hr className="my-4" />
                            <div className="flex justify-between font-semibold">
                                <span>Total</span>
                                <span>${(totalPrice * 0.8).toFixed(2)}</span>
                            </div>
                            <button className="w-full bg-blue-500 text-white py-2 rounded mt-4"
                                onClick={() => history.push('/create-order')}
                            >Complete Order</button>
                            <div className="mt-4">
                                <input type="text" placeholder="Enter discount code" className="w-full p-2 border rounded" />
                                <button className="w-full bg-gray-300 text-gray-700 py-2 rounded mt-2">Apply Discount</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CreateOrderPage;