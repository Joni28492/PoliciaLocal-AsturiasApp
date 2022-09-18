import { UiState } from './';

type UiActionType = 
     | {type: '[Ui] - ActionName'}


export const uiReducer = (state:UiState, action: UiActionType):UiState => {

     switch (action.type) {
          case '[Ui] - ActionName':
               return  {
                    ...state,
                    isMenuOpen: !state.isMenuOpen
               }

          default:
               return state
     }

}