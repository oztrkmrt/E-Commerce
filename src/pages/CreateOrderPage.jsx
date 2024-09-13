import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axiosInstance from '../services/axiosInstance';

const CreateOrderPage = () => {
    const [step, setStep] = useState(1);
    const { cart } = useSelector(state => state.shoppingCart);
    const dispatch = useDispatch();

    const handleNextStep = () => {
        setStep(step + 1);
    };

    const handlePreviousStep = () => {
        setStep(step - 1);
    };

    const handleSubmitOrder = async () => {
        try {
            const response = await axiosInstance.post('/order', {
                // Sipariş detayları
            });
            // Sipariş başarılı olduysa gerekli işlemleri yapın
        } catch (error) {
            console.error('Sipariş oluşturulurken bir hata oluştu:', error);
        }
    };

    return (
        <div>
            <h1>Create Order</h1>
            {step === 1 ? (
                <div>
                    <h2>Step 1: Review Your Cart</h2>
                    {/* Sepet içeriğini göster */}
                    <button onClick={handleNextStep}>Next</button>
                </div>
            ) : (
                <div>
                    <h2>Step 2: Shipping and Payment</h2>
                    {/* Kargo ve ödeme bilgilerini al */}
                    <button onClick={handlePreviousStep}>Previous</button>
                    <button onClick={handleSubmitOrder}>Place Order</button>
                </div>
            )}
        </div>
    );
};

export default CreateOrderPage;