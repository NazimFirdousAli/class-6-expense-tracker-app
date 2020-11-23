
const TransactionReducer = ((state,action) => {
    switch(action.type){
        case 'ADD TRANSACTION':{
            return [ ...state,action.payload] 
        }
        case 'DELETE TRANSACTION':{
            return[ ...state,action.payload]
        }
        default:
            return state;
    }

})
export default TransactionReducer;