import React, { useContext } from 'react'
import CartItem from './CartItem'
import classes from './Cart.module.css'
import Button from '../Commons/Button'
import Modal from '../Commons/Modal'
import CartContext from '../../store/CartContext'


const Cart = (props) => {
    // Context 적용
    const cartContext = useContext(CartContext);

    const cartItems = (
        <ul className={classes['cart-items']}>
            {cartContext.items.map((product) => (
                <CartItem 
                key={product.id}
                name={product.name}
                price={product.price}
                amount={product.amount}
                charge={product.charge}
                />
            ))}
        </ul>
    );

    const totalAmount = `$${cartContext.totalAmount}`;

    const cartItemsTotal = (
        <div className={classes.total}>
            <span>결제 금액</span>
            <span>{totalAmount}</span>
        </div>
    );

    const modalButton = (
        <div className={classes.buttons}>
            <Button onClick={props.onClose}>닫기</Button>
            <Button>주문</Button>
        </div>
    );

    const cartModalContent = (
        <>
            {/* 카트 목록(cartItmes) */}
            {cartItems }
            {/* 카트 목록 총 합(cartItemsTotal) */}
            {cartItemsTotal}
            {/* 닫기, 주문 버튼(modalButton) */}
            {modalButton}
        </>
    )

    return <Modal onClose={props.onClose}>{cartModalContent}</Modal>;
}

export default Cart
