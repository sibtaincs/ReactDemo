import React from 'react';



const CartContext =React.createContext({

    items:[],
    totalAmount:0,
    addItem:(item) => {},
    removeItem:(id) => {},
    updateItem:(id) => {},
    clearCart:() => {},
});



export default CartContext;