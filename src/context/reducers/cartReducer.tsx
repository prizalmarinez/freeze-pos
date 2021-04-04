interface CartItem {
    name: string,
    price: number,
    quantity: number,
    uid: number
}

export interface IState {
    cart: CartItem[]
}

export const initialState: IState = {
    cart: []
};

interface IAddToCart {
    type: "ADD_TO_CART";
    payload: CartItem
}

export type Actions = IAddToCart;

export const cartReducer = (state: IState, action: Actions) => {
    const { uid } = action.payload

    switch (action.type) {
        case 'ADD_TO_CART': {
            const exists = state.cart.some(item => item.uid === uid);
            const cart = exists
                ? state.cart.map(item => item.uid === uid ? { ...item, quantity: item.quantity + 1 } : item)
                : [...state.cart, action.payload];
            return {
                ...state,
                cart
            };
        }
    }
}

