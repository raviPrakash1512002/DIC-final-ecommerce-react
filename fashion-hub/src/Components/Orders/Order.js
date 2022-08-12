import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Reviewitem from '../Reviewitem/Reviewitem';
import './Order.css'

const Order = () => {
    const [products] = useProducts()
    const [cart, setCart] = useCart(products);
    const navigate =useNavigate();
    const handleRemoveproduct = product => {
        const rest = cart.filter(pd=> pd.id !==product.id);
        setCart(rest)
        removeFromDb(product.id)
    }
    return (
        <div className='shop-container'>
            <div className="review-items-container">
                {
                    cart.map(product => <Reviewitem
                        key={product.id}
                        product={product}
                        handleRemoveproduct={handleRemoveproduct}
                    >
                    </Reviewitem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                <button className='submit-btn' onClick={()=>navigate('/shipment')}>Proceed Shipment</button>
                </Cart>
            </div>
        </div>
    );
};

export default Order;