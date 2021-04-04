import React,
{
    useContext,
    createContext,
    useReducer,
    Dispatch
} from "react";

import { IState, initialState, Actions, cartReducer } from './reducers/cartReducer'

interface IContextProps {
    state: IState;
    dispatch: Dispatch<Actions>;
}

const CartContext = createContext({} as IContextProps);

export const CartProvider: React.FC = (props: any) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const value = { state, dispatch };

    return (
        <CartContext.Provider
            value={
                value
            }
        >
            {props.children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)