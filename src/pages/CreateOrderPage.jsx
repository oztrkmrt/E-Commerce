import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { fetchAddresses, deleteAddress } from '@/redux/slices/clientSlice';
import { setAddress, addNewAddress, updateExistingAddress } from '@/redux/slices/shoppingCartSlice';
import { useHistory } from 'react-router-dom';

const CreateOrderPage = () => {
    const [activeTab, setActiveTab] = useState('address');
    const { cart, address } = useSelector(state => state.shoppingCart);
    const { addressList } = useSelector(state => state.client);
    const dispatch = useDispatch();
    const history = useHistory();
    const [showAddressForm, setShowAddressForm] = useState(false);
    const [cities, setCities] = useState([]);
    const totalPrice = cart.reduce((total, item) => total + item.product.price * item.count, 0);

    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            dispatch(fetchAddresses());
            fetchCities();
        } else {
            history.push('/login');
        }

        // Auth error kontrolü
        const authError = localStorage.getItem("authError");
        if (authError) {
            localStorage.removeItem("authError");
            history.push('/login');
        }
    }, [history, dispatch]);

    const fetchCities = async () => {
        setCities(['İstanbul', 'Ankara', 'İzmir', 'Bursa', 'Tekirdağ']);
    };

    const handleAddAddress = async (data) => {
        try {
            await dispatch(addNewAddress(data)).unwrap();
            setShowAddressForm(false);
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
            setShowAddressForm(false);
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
                                        onClick={() => dispatch(setAddress(addr))}
                                        className={`bg-green-500 text-white py-1 px-2 rounded mr-2 ${addr === address ? 'opacity-50 cursor-not-allowed' : ''}`}
                                        disabled={addr === address}
                                    >
                                        {addr === address ? 'Selected' : 'Select'}
                                    </button>
                                    <button
                                        onClick={() => {
                                            setShowAddressForm(true);
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
                                        onClick={() => handleDeleteAddress(address.id)}
                                        className='bg-red-500 text-white py-1 px-2 rounded'
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                        <button
                            className='bg-blue-500 text-white py-2 px-4 rounded'
                            onClick={() => setShowAddressForm(true)}
                        >
                            Add New Address
                        </button>

                        {showAddressForm && (
                            <form onSubmit={handleSubmit(data => data.id ? handleUpdateAddress(data) : handleAddAddress(data))} className='mt-4'>
                                <div className='mb-4'>
                                    <label className='block mb-2'>Adres Başlığı</label>
                                    <input {...register('title', { required: 'Bu alan zorunludur' })} className='w-full border p-2' />
                                    {errors.title && <span className='text-red-500'>{errors.title.message}</span>}
                                </div>
                                <div className='mb-4'>
                                    <label className='block mb-2'>Ad</label>
                                    <input {...register('name', { required: 'Bu alan zorunludur' })} className='w-full border p-2' />
                                    {errors.name && <span className='text-red-500'>{errors.name.message}</span>}
                                </div>
                                <div className='mb-4'>
                                    <label className='block mb-2'>Soyad</label>
                                    <input {...register('surname', { required: 'Bu alan zorunludur' })} className='w-full border p-2' />
                                    {errors.surname && <span className='text-red-500'>{errors.surname.message}</span>}
                                </div>
                                <div className='mb-4'>
                                    <label className='block mb-2'>Telefon</label>
                                    <input {...register('phone', { required: 'Bu alan zorunludur' })} className='w-full border p-2' />
                                    {errors.phone && <span className='text-red-500'>{errors.phone.message}</span>}
                                </div>
                                <div className='mb-4'>
                                    <label className='block mb-2'>Şehir</label>
                                    <select {...register('city', { required: 'Bu alan zorunludur' })} className='w-full border p-2'>
                                        {cities.map((city, index) => (
                                            <option key={index} value={city}>{city}</option>
                                        ))}
                                    </select>
                                    {errors.city && <span className='text-red-500'>{errors.city.message}</span>}
                                </div>
                                <div className='mb-4'>
                                    <label className='block mb-2'>İlçe</label>
                                    <input {...register('district', { required: 'Bu alan zorunludur' })} className='w-full border p-2' />
                                    {errors.district && <span className='text-red-500'>{errors.district.message}</span>}
                                </div>
                                <div className='mb-4'>
                                    <label className='block mb-2'>Mahalle</label>
                                    <input {...register('neighborhood', { required: 'Bu alan zorunludur' })} className='w-full border p-2' />
                                    {errors.neighborhood && <span className='text-red-500'>{errors.neighborhood.message}</span>}
                                </div>
                                <button type='submit' className='bg-green-500 text-white py-2 px-4 rounded'>
                                    Save Address
                                </button>
                            </form>
                        )}
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
                <div>
                    {/* Ödeme seçenekleri burada olacak */}
                    <h2 className='text-2xl font-bold mb-4'>Ödeme Seçenekleri</h2>
                    <p>Bu kısım henüz tamamlanmadı.</p>
                </div>
            )}
        </div>
    );
};

export default CreateOrderPage;