import React, { useState } from 'react'
import CartContext from './CartContext'

const CartProvider = (props) => {
    const [cartState, setCartState] = useState({
        items: [],
        totalAmount: 0,
    });

    // cart에 product 데이터를 추가하는 메서드
    const addItemToCartHandler = (item) => {
        console.log(item);

        // 동일한 id값의 product가 존재할 경우, amount만 추가
        const existingCartItemIndex = cartState.items.findIndex(
            (cartItem) => cartItem.id === item.id
        );

        const existingCartItem = cartState.items[existingCartItemIndex];

        let updatedItems;
        if (existingCartItem) { // 새로 등록한 product(item)가 cart에 이미 존재할 때
            const updateItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + item.amount,
            };
            updatedItems = [...cartState.items];
            updatedItems[existingCartItemIndex] = updateItem;
        } else { // 새로 등록한 product(item)이 cart에 존재하지 않을때
            updatedItems = cartState.items.concat(item);
        }
        const updatedTotalAmount = cartState.tatalAmount + item.price * item.amount;
        setCartState({items: updatedItems, totalAmount: updatedTotalAmount});
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
    };

    return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
}

export default CartProvider