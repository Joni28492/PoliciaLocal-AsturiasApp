import { FC, useReducer, PropsWithChildren } from 'react';
import { UiContext, uiReducer } from './';


export interface UiState {
    isMenuOpen: boolean;
}

interface Props { };


const Ui_INITIAL_STATE: UiState = {
    isMenuOpen: false
}


export const UiProvider: FC<PropsWithChildren<Props>> = ({ children }) => {

    const [state, dispatch] = useReducer(uiReducer, Ui_INITIAL_STATE);

    const toggleSideMenu = () => {
        dispatch({ type: '[Ui] - ActionName' });
    }

    return (
        < UiContext.Provider value={{
            ...state,
            //methods
            toggleSideMenu
        }}>
            {children}
        </ UiContext.Provider>
    )
}