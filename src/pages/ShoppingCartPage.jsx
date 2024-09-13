import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { removeFromCart, updateItemCount } from '@/redux/slices/shoppingCartSlice';
import { useHistory } from 'react-router-dom';

const ShoppingCartPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { cart } = useSelector(state => state.shoppingCart);
    const totalPrice = cart.reduce((total, item) => total + item.product.price * item.count, 0);

    const handleQuantityChange = (item, newQuantity) => {
        const updatedQuantity = Math.max(0, newQuantity);
        if (updatedQuantity === 0) {
            dispatch(removeFromCart(item.product.id));
        } else {
            dispatch(updateItemCount({ productId: item.product.id, count: updatedQuantity }));
        }
    };

    const handleRemoveItem = (productId) => {
        dispatch(removeFromCart(productId));
    };

    return (
        <div className="container mx-auto px-20 py-8">
            <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-2/3">
                        {cart.map((item) => (
                            <div key={item.product.id} className="flex items-center border-b py-4">
                                <img src={item.product.images[0].url} alt={item.product.name} className="w-24 h-24 object-cover mr-4" />
                                <div className="flex-grow">
                                    <h2 className="text-lg font-semibold">{item.product.name}</h2>
                                    <p className="text-gray-600">Size: 38</p>
                                    <p className="text-gray-600">Price: ${item.product.price * 0.8}</p>
                                </div>
                                <div className="flex items-center">
                                    <button onClick={() => handleQuantityChange(item, Math.max(0, item.count - 1))} className="px-3 py-1 border bg-gray-100">-</button>
                                    <span className="px-4">{item.count}</span>
                                    <button onClick={() => handleQuantityChange(item, item.count + 1)} className="px-3 py-1 border bg-gray-100">+</button>
                                </div>
                                <p className="font-semibold ml-8">${(item.product.price * 0.8 * item.count).toFixed(2)}</p>
                                <button onClick={() => handleRemoveItem(item.product.id)} className="ml-4 text-red-500">
                                    <FontAwesomeIcon icon={faTrash} />
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="md:w-1/3">
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

export default ShoppingCartPage;
