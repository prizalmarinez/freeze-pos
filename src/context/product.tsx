import React,
{
    useContext,
    createContext,
    useReducer,
    Dispatch
} from "react";

import { IState, initialState, Actions, productReducer } from './reducers/productReducer'

interface IContextProps {
    state: IState;
    dispatch: Dispatch<Actions>;
}

const ProductContext = createContext({} as IContextProps);

export const ProductProvider: React.FC = (props: any) => {
    const [state, dispatch] = useReducer(productReducer, initialState);

    const value = { state, dispatch };

    return (
        <ProductContext.Provider
            value={
                value
            }
        >
            {props.children}
        </ProductContext.Provider>
    )
}

export const useProduct = () => useContext(ProductContext)