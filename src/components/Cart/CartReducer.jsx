const CartReducer = (state, action) => {
    switch (action.type) {
        case 'addCart':
            const updatedCart = [...state.cart, action.item];
            const updatedTotal = updatedCart.reduce((acc, item) => acc + item.price, 0);
            return {
                ...state,
                cart: updatedCart,
                total: updatedTotal
            };
        default:
            return state;
        case 'removeFromCart':
            const decrementCart = state.cart.filter(item => item.id !== action.id)
            const decrementTotal = state.total - action.price
            return {
                ...state,
                cart: decrementCart,
                total: decrementTotal,
            }
    }
}

export default CartReducer;