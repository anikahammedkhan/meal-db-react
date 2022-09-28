import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    return (
        <div className='cart-container'>
            <h1 className='font-bold pt-4'>Your Cart</h1>
            <div className='cart-item-container'>
                {
                    cart.map(item => <div className='cart-item flex'>
                        <li className='pr-4'>{item.strMeal}</li>
                        <h1>Quantity : </h1>
                    </div>)
                }
            </div>

        </div>
    );
};

export default Cart;