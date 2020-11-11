import React,{createContext} from 'react';


let transactions = [
    {desc: 'cash', amount: 1500},
    {desc: 'Vegetable', amount: -100},
    {desc: 'Interest', amount: 9000},
  ]

const TransContext = createContext(transactions);

export default TransContext;