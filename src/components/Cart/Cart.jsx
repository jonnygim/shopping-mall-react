import React, { useState } from 'react'
import CartItem from './CartItem'
import classes from './Cart.module.css'
import Button from '../Commons/Button'
import Modal from '../Commons/Modal'


const Cart = (props) => {
    
    // const cartItems = (
    //     <ul className={classes['cart-items']}>
    //     {PRODUCTS.map((product) => (
    //         <CartItem />
    //     ))}
    //     </ul>
    // );

    // const cartItemsTotal = (
    //     <div className={classes.total}>
    //         <span>Total Amount</span>
    //         <span>{totalAmount}</span>
    //     </div>
    // );

    const modalButton = (
        <div className={classes.buttons}>
        <Button onClick={props.onClose}>닫기</Button>
        <Button>주문</Button>
        </div>
    );

    const cartModalContent = (
        <>
            {/* 카트 목록(cartItmes) */}
            {}
            {/* 카트 목록 총 합(cartItemsTotal) */}
            {}
            {/* 닫기, 주문 버튼(modalButton) */}
            {modalButton}
        </>
    )

    return <Modal onClose={props.onClose}>{cartModalContent}</Modal>;
}

export default Cart
