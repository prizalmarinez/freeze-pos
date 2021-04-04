interface Product {
    name: string,
    price: number,
    quantity: number,
    uid: number
}

export interface IState {
    products: Product[]
}

export const initialState: IState = {
    products: []
};

interface IAddProduct {
type: "ADD_PRODUCT";
    payload: Product
}

export type Actions = IAddProduct;

export const productReducer = (state: IState, action: Actions) => {
    switch (action.type) {
        case 'ADD_PRODUCT': {
            return {
                ...state,
                products: [...state.products, action.payload]
            }
        }
    }
}

