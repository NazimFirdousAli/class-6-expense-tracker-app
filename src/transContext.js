import React,{createContext,useReducer} from 'react';
import TransactionReducer from './transReducer.js';


let initialTransactions = [
    {id: 0, desc: 'cash', amount: 1500},
    {id: 1,desc: 'Vegetable', amount: -100},
    {id: 2,desc: 'Interest', amount: 9000},
    {id: 3,desc: 'Cold Drink', amount: -90},
    
  ]

const TransContext = createContext(initialTransactions);

export default TransContext;

export const TransProvider = ({children}) => {
    let [state,dispatch] = useReducer(TransactionReducer,initialTransactions)

    function addTransaction(transObj){
        dispatch({
            type: 'ADD TRANSACTION',
            payload: {
                amount:transObj.amount,
                desc: transObj.desc
            }
        })

    }

    function deleteTransaction(transObj){
        dispatch({
            type: 'DELETE TRANSACTION',
            payload: {
                amount:transObj.amount,
                desc: transObj.desc
            }
        })

    }

    return(
        <TransContext.Provider value={{
            transactions: state,
            addTransaction:addTransaction

        }}>
            {children}
        </TransContext.Provider>
    )
}
