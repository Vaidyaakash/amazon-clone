export const initialState = {
    cart: [],
}

// export const CartTotal = (cart) => (
//     cart?.reduce((amount, item) => item.price + amount, 0)
// )

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "ADD_CART":
            return {
                ...state,
                cart: [...state.cart, action.item]
            }
        case "ADD_CART_SLIDER":
            return {
                ...state,
                cart: [...state.cart, action.item]
            }
        case "DELETE_FORM_CART":
            const index = state.cart.findIndex((e) => e.id === action.id)   // index of cart element(01234)
            // console.log(index);
            let NewCart = [...state.cart];
            if (index >= 0) {
                NewCart.splice(index, 1)
            }
            return {
                ...state,
                cart: NewCart
            }
        default:
            return state;
    }
}

export default reducer;