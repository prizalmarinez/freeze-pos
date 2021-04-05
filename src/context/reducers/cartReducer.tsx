interface CartItem {
    name: string,
    price: number,
    quantity: number,
    uid: number,
    tPrice: number
}

export interface IState {
    cart: CartItem[],
    cTotal: number
}

export const initialState: IState = {
    cart: [],
    cTotal: 0
};

interface IAddToCart {
    type: "ADD_TO_CART";
    payload: CartItem
}

interface IClearCart {
    type: "CLEAR_CART";
}

export type Actions = IAddToCart | IClearCart;

export const cartReducer = (state: IState, action: Actions) => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            const { uid } = action.payload
            const exists = state.cart.some(item => item.uid === uid);

            const cart = exists
                ? state.cart.map(item => item.uid === uid ? { ...item, quantity: item.quantity + 1, tPrice: (item.quantity + 1) * item.price } : item)
                : [...state.cart, action.payload];

            return {
                ...state,
                cart,
                cTotal: cart.reduce((sum, { tPrice }) => sum + tPrice, 0)
            };
        }
        case 'CLEAR_CART': {
            return {
                ...state,
                cart: [],
                cTotal: 0
            };
        }
    }
}

